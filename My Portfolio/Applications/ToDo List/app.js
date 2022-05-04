/******** 
 * Modules
*********/
const date = require(__dirname + "/modules/date.ejs");
const array = require(__dirname + "/modules/arrayManip.ejs");
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
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 3000;

/******** 
 * Application
*********/
//arrays to hold items added by user
const dayTasksArray = [];
const workTasksArray = [];

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


mongCMD.getTasks(Task, dayTasksArray)
    .then(() =>
    {
        app.get('/', (req, res) =>
        {
           console.log('print\n' +dayTasksArray[0][1].name +'\nprint'); 
            res.render('list', { listTitle: date.getDate(), listArray: dayTasksArray });
        });
    });

// app.get('/', async (req, res) =>
// {
//     await mongCMD.getTasks(Task, dayTasksArray);
//     console.log(dayTasksArray.length);
//     res.render('list', { listTitle: date.getDate(), listArray: dayTasksArray });
// });

app.get('/about', (req, res) =>
{
    res.render("about");
});

app.get('/work', (req, res) =>
{
    res.render('list', { listTitle: "Work List", listArray: workTasksArray });
})

app.post('/', async (req, res) =>
{
    if (req.body.list === "Work")
    {
        if (req.body.removeTask)
        {
            array.removeItem(req, workTasksArray);
            res.redirect('/work');
        }
        else
        {
            mongCMD.addTask(req, Task);
            res.redirect("/work")
        }
    }
    else
    {
        if (req.body.removeTask)
        {
            mongCMD.removeTask(req, Task);
            res.redirect('/');
        }
        else
        {
            await mongCMD.addTask(req, Task, dayTasksArray);
            mongCMD.getTasks(Task, dayTasksArray);
            res.redirect('/');
        }
    }
});

app.post('/work', (req, res) =>
{
    addItem(workTasksArray, item);
    //after recieving new data redirect it to the get/render function
    res.redirect('/work');
});

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});