const express = require("express");
const date = require(__dirname + "/modules/date.ejs");
const array = require(__dirname + "/modules/arrayManip.ejs");
const mongoose = require('mongoose');
const port = 3000;
const app = express();

const keys = require('./api_keys');
const userName = keys.mongooseUserName;
const password = keys.mongoosePassword;
const DB = keys.mongooseDB;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

//arrays to hold items added by user
const dayTasksArray = [];
const workTasksArray = [];


app.get('/', (req, res) =>
{
    res.render('list', { listTitle: date.getDate(), listArray: dayTasksArray });
});

app.get('/about', (req, res) =>
{
    res.render("about");
});

app.get('/work', (req, res) =>
{
    res.render('list', { listTitle: "Work List", listArray: workTasksArray });
})

app.post('/', (req, res) =>
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
            array.addItem(req, workTasksArray);
            res.redirect("/work")
        }
    }
    else
    {
        if (req.body.removeTask)
        {
            array.removeItem(req, dayTasksArray);
            res.redirect('/');
        }
        else
        {
            array.addItem(req, dayTasksArray);
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