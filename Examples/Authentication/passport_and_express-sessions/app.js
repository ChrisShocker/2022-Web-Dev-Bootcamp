/******** 
 *.ENV
*********/
require('dotenv').config();

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
 * exress-session
*********/
const session = require('express-session');
app.use(session({
    secret: process.env.MONGOOSE_SECRET,
    resave: false,
    saveUninitialized: false
}));

/******** 
 * Passport
*********/
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { application } = require('express');
app.use(passport.initialize());
app.use(passport.session());

/******** 
 *Mongoose Schema, Model, & Passport plugin
*********/
const userSchema = new mongoose.Schema({
    //not username is made unique by defualt with passport
    username: {
        type: String,
        required: [true, 'Error: No username']
    },

    password: String,
});
//Create plugin for passport-local-mongoose
userSchema.plugin(passportLocalMongoose);
//Create model
const User = new mongoose.model('User', userSchema);
//Add authentication
passport.use(User.createStrategy());
//use serialize/deserialize for express-sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    res.render('home');
})

app.get('/logout', (req, res) =>{
    req.logOut();
    res.redirect('/');
})

/******** 
 * routes
*********/
app.route('/login')
    .get((req, res) =>
    {
        res.render('login');
    }).post(passport.authenticate("local", {failureRedirect:'/login'}),
    (req, res) =>
    {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });

        req.login(user, (error) =>
        {
            if (error)
                console.log(error);
            else
            {
                passport.authenticate("local")(req, res, function ()
                {
                    res.redirect("/secrets");
                });
            }
        })
    })

app.route('/register')
    .get((req, res) =>
    {
        res.render('register');
    }).post((req, res) =>
    {
        User.register({ username: req.body.username }, req.body.password, (error, user) =>
        {
            if (error)
            {
                console.log(error);
                res.redirect("/register");
            }
            else
            {
                passport.authenticate("local")(req, res, function ()
                {
                    res.redirect("/secrets");
                });
            }
        });
    });

app.route('/secrets')
    .get((req, res) =>
    {
        if (req.isAuthenticated())
            res.render('secrets');
        else
            res.redirect("/login");
    })


/******** 
 * Server
*********/
app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});