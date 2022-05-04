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


app.get('/work', (req, res) =>
{
    res.render('list', { listTitle: "Work List", listArray: workTasksArray });
})

app.post('/', async (req, res) =>
{
    if (req.body.removeTask)
    {
        console.log(req.body);
        mongCMD.removeTask(req, Task);
        res.redirect('/');
    }
    else
    {
        await mongCMD.addTask(req, Task);
        res.redirect('/');
    }
}
);
app.post('/delete', (req, res) =>
{
    mongCMD.removeTaskByID(req, Task);
    res.redirect('/');
});

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});