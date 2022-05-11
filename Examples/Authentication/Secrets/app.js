/******** 
 * bcrypt.js  & .ENV
*********/
require('dotenv').config();
var bcrypt = require('bcryptjs');
var sha512 = require('js-sha512');

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
const username = process.env.MONGOOSE_USERNAME;
const password = process.env.MONGOOSE_PASSWORD;
const DB = process.env.MONGOOSE_DB;
const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";
const connection = mongoose.connect(uri, { useNewURLParser: true });


/******** 
 * Schema, Model, and Encryption
*********/
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, 'Error: No ID, should be email..']
    },

    password: {
        type: String,
        required: [true, 'Error: No password']
    }
});
//Create model
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
        const username = req.body.userName;
        const password = sha512(req.body.password);

        User.findOne({ email: username }, (error, foundUser) =>
        {
            if (error)
                console.log(error);
            else
            {
                if (foundUser)
                {
                    bcrypt.genSalt(12, function (error, salt)
                    {
                        bcrypt.hash(password, salt, (error, hash) =>
                        {
                            bcrypt.compare(password, hash, (error, match) =>
                            {
                                if(match === true){
                                    console.log("User found");
                                    res.render('secrets');
                                }
                                else{
                                    console.log('Wrong password');
                                }
                            })
                        })
                    })
                }
                else
                {
                    console.log("User not found");
                    res.redirect('login');
                }
            }
        })
    })

app.route('/register')
    .get((req, res) =>
    {
        res.render('register');
    }).post((req, res) =>
    {
        bcrypt.genSalt(12, (error, salt) =>
        {
            bcrypt.hash(sha512(req.body.password), salt, (error, hash) =>
            {
                const newUser = new User({
                    _id: req.body.username,
                    password: hash
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
        })
    })

/******** 
 * Server
*********/
app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});