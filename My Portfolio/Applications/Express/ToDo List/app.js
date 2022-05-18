/******** 
 * Custom Modules
*********/
const date = require(__dirname + "/modules/date.ejs");
const mongCMD = require(__dirname + "/modules/mongCommands.ejs");

/******** 
 *MongoDB keys
*********/
const keys = require('./api_keys');
/******* Replace these with your mongoDB credentials (Readme)*******/
const userName = keys.mongooseUserName;
const password = keys.mongoosePassword;
const DB = keys.mongooseDB;

/******** 
 *MongoDB & Mongoose
*********/
const { Db } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";
const connection = mongoose.connect(uri, { useNewURLParser: true });

/******** 
 * Express & EJS
*********/
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;
app.set('view engine', 'ejs');

/******** 
 * Schema
*********/
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Error: No task name']
    }
});
const Task = new mongoose.model(date.getDate().join(' '), taskSchema);

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
    res.render('about', { listTitle: 'About', listArray: '' });
});

app.get('/myLists', async (req, res) =>
{
    var listArray = [];
    listArray = await mongoose.connection.db.listCollections().toArray();

    res.render('myLists', { listTitle: 'My List', listArray: listArray });
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
        if (newList === " ")
        {
            console.log('Empty list');
            res.redirect(req.get('referer'));
        }
        else
        {
            res.redirect('/' + newList);
        }
    }

    else if (req.body.newItem)
    {
        list = list.replaceAll('^', ' ');
        let Task = new mongoose.model(list, taskSchema);
        await mongCMD.addTask(req, Task);
        res.redirect('/' + list);
    }

    else if (req.body.removeTask)
    {
        list = list.replaceAll('^', ' ');
        const currentList = new mongoose.model(list, taskSchema);
        await mongCMD.removeTaskByID(req, currentList);
        res.redirect('/' + list);
    }

    else if (req.body.goToList)
    {
        var goTo = req.body.goToList;
        goTo = goTo.replaceAll('^', ' ');
        res.redirect('/' + goTo);
    }
    else
    {
        console.log('Empty parameter');
        res.redirect(req.get('referer'));
    }

});

app.post('/deleteList', async (req, res) =>
{
    var listName = req.body.removeTask;
    listName = listName.replaceAll('^', ' ');

    var listArray = [];
    listArray = await mongoose.connection.db.listCollections().toArray();
    for (let i = 0; i < listArray.length; ++i)
    {
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