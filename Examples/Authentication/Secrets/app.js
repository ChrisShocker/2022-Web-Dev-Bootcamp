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
    _id: {
        type: String,
        required: [true, 'Error: No ID, should be email..']
    },

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

/******** 
 * routes
*********/
app.route('/login')
    .get((req, res) =>
    {
        res.render('login');
    }).post((req, res) =>
    {
        const userName = req.body.userName;
        const password = req.body.password;

        User.findOne({ email: userName }, (error, foundUser) =>
        {
            if (error)
                console.log(error);
            else
            {
                if (foundUser.password === password)
                {
                    console.log("User found");
                    res.render('secrets');
                }
                else
                    console.log("User not found");
            }
        })
    })

app.route('/register')
    .get((req, res) =>
    {
        res.render('register');
    }).post((req, res) =>
    {
        const newUser = new User({
            _id: req.body.userName,
            email: req.body.userName,
            password: req.body.password
        });
        newUser.save((error) =>
        {
            if (error)
                console.log(error);
            else
                console.log('User added');

            res.render('secrets');
        })
    })


/******** 
 * Server
*********/
app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});