/******** 
 * Modules
*********/
const date = require(__dirname + "/modules/date.ejs");
const mongCMD = require(__dirname + "/modules/mongCommands.ejs");

/******** 
 * Mongoose
*********/
const mongoose = require('mongoose');
const keys = require('./api_keys');
const userName = keys.mongooseUserName;
const password = keys.mongoosePassword;
const DB = keys.mongooseDB;
const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";
const connection = mongoose.connect(uri, { useNewURLParser: true });

/******** 
 * Express
*********/
const express = require("express");
const { Db } = require('mongodb');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 3000;

/******** 
 * Schema
*********/
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Error: No task name']
    }
});
const Task = new mongoose.model(date.getDate().join(''), taskSchema);

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    Task.find({}, async function (error, tasks)
    {
        if (error)
            console.log(error);
        else
        {
            let todaysDate = date.getDate();
            res.render('list', { listTitle: todaysDate, listArray: tasks });
        }
    });
});

app.get('/about', (req, res) =>
{
    res.render("about");
});

app.get('/myLists', (req, res) =>
{
    mongoose.connection.db.listCollections().toArray(function (error, names)
    {
        if (error)
            console.log(error);
        else
        {
            res.render('myLists', { listTitle: 'My List', listArray: names });
        }
    })
});

app.get('/:someThing', async (req, res) =>
{
    let listName = req.params.someThing;
    const subStringArray = [];
    let splitArray = listName.split(' ');
    for (let i = 0; i < splitArray.length; ++i)
    {
        subStringArray.push(splitArray[i]);
    }

    const newList = new mongoose.model(splitArray.join(' '), taskSchema);
    newList.find({}, function (error, tasks)
    {
        if (error)
            console.log(error);
        else
            res.render('list', { listTitle: subStringArray, listArray: tasks });
    });
})

/******** 
 * post
*********/
app.post('/', async (req, res) =>
{
    var list = req.body.listName;

    if (req.body.createList)
    {
        let newList = req.body.createList;
        res.redirect('/' + newList);
    }

    else if(list){
        console.log(list);
        list = list.replaceAll('^', ' ');
        console.log(list);
        let Task = new mongoose.model(list, taskSchema);
        await mongCMD.addTask(req, Task);
        res.redirect('/' + list);
    }
    // else if (req.body.listName != date.getDay() + ',')
    // {
    //     const newList = new mongoose.model(list, taskSchema);
    //     if (req.body.removeTask)
    //     {
    //         await mongCMD.removeTask(req, newList);
    //         res.redirect('/' + list);
    //     }
    //     else
    //     {
    //         await mongCMD.addTask(req, newList);
    //         res.redirect('/' + list);
    //     }
    // }
    // else
    // {
    //     if (req.body.removeTask)
    //     {
    //         await mongCMD.removeTask(req, Task);
    //         res.redirect('/');
    //     }
    //     else
    //     {
    //         await mongCMD.addTask(req, Task);
    //         res.redirect('/');
    //     }
    // }
});

app.post('/delete', (req, res) =>
{
    const list = req.body.listName;
    if (req.body.listName == date.getDay() + ',')
    {
        mongCMD.removeTaskByID(req, Task);
        res.redirect('/');
    }
    else
    {
        const newList = new mongoose.model(list, taskSchema);
        mongCMD.removeTaskByID(req, newList);
        res.redirect('/' + list);
    }
});

app.post('/deleteList', async (req, res) =>
{
    var listName = req.body.removeTask;
    console.log(listName);

    var listArray = [];
    listArray = await mongoose.connection.db.listCollections().toArray();
    for (let i = 0; i < listArray.length; ++i)
    {
        // console.log(listArray[i].name);
        //console.log(listName);
        if (listArray[i].name === listName)
        {
            await mongoose.connection.db.dropCollection(listName);
            await console.log('collection: ' + "'" + listName + "'" + ' deleted');
        }
    }
    res.redirect('/myLists');
});

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});