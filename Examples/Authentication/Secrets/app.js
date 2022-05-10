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
 * MongoDB and Mongoose
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
 * Schema & Model
*********/
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Error: No email']
    },

    password: {
        type: String,
        required: [true, 'Error: No password']
    }
});
const User = new mongoose.model('User', userSchema)

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    res.render('home');
})

app.get('/login', (req, res) =>
{
    res.render('login');
})

app.get('/register', (req, res) =>
{
    res.render('register');
})

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});