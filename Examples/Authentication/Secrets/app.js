/******** 
 * mongoose-encryption & .ENV
*********/
const encrypt = require('mongoose-encryption');
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
const userName = process.env.MONGOOSE_USERNAME;
const password = process.env.MONGOOSE_PASSWORD;
const DB = process.env.MONGOOSE_DB;
const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";
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
//Encrypt dataBase before creating model
const secret = process.env.MONGOOSE_SECRET;
userSchema.plugin(encrypt, { secret: secret, encryptedFeilds: ['password'] });
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