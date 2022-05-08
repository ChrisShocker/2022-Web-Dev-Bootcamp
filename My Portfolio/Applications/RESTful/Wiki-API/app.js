/******** 
 * Modules
*********/

/******** 
 * Mongoose
*********/
const { Db } = require('mongodb');
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
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;

/******** 
 * Misc. Modules
*********/
app.set('view engine', 'ejs');

/******** 
 * Schema
*********/
const wikiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Error: No task name']
    },
    content: {
        type: String,
        required: [true, 'Error: No task name']
    }
});
const Task = new mongoose.model(wikiSchema);

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
            res.render('index');
        }
    });
});

/******** 
 * post
*********/
app.post('/', async (req, res) =>
{

});

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});