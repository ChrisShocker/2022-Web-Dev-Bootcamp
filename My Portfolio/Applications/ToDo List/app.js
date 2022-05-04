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
mongoose.connect(uri, { useNewURLParser: true });

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
const Task = new mongoose.model('Task', taskSchema);

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    Task.find({}, function (error, tasks)
    {
        if (error)
            console.log(error);
        else
            res.render('list', { listTitle: date.getDate(), listArray: tasks });
    });
});

app.get('/about', (req, res) =>
{
    res.render("about");
});


app.get('/:someThing', async (req, res) =>
{
    const list = req.params.someThing;
    const newList = new mongoose.model(list, taskSchema);
    newList.find({}, function (error, tasks)
    {
        if (error)
            console.log(error);
        else
            res.render('list', { listTitle: req.params.someThing, listArray: tasks });
    });
})

/******** 
 * post
*********/
app.post('/', async (req, res) =>
{
    const list = req.body.list;
    if(req.body.createList){
        newList = req.body.createList;
        res.redirect('/'+newList);
    }
    //const list = req.body.list;
    else if(list == date.getDay() + ',')
    {
        if (req.body.removeTask)
        {
            await mongCMD.removeTask(req, Task);
            res.redirect('/');
        }
        else
        {
            await mongCMD.addTask(req, Task);
            res.redirect('/');
        }
    }
    else
    {
        const newList = new mongoose.model(list, taskSchema);
        if (req.body.removeTask)
        {
            await mongCMD.removeTask(req, newList);
            res.redirect('/' + list);
        }
        else
        {
            await mongCMD.addTask(req, newList);
            res.redirect('/' + list);
        }
    }
});

//works
// app.post('/', async (req, res) =>
// {
//     const list = req.body.list;
//     if (list == date.getDay() + ',')
//     {
//         if (req.body.removeTask)
//         {
//             await mongCMD.removeTask(req, Task);
//             res.redirect('/');
//         }
//         else
//         {
//             await mongCMD.addTask(req, Task);
//             res.redirect('/');
//         }
//     }
//     else
//     {
//         const newList = new mongoose.model(list, taskSchema);
//         if (req.body.removeTask)
//         {
//             await mongCMD.removeTask(req, newList);
//             res.redirect('/' + list);
//         }
//         else
//         {
//             await mongCMD.addTask(req, newList);
//             res.redirect('/' + list);
//         }
//     }
// });

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

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});