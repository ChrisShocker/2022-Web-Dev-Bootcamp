/******** 
 * Modules
*********/
const date = require(__dirname + '/modules/date.ejs');
const array = require(__dirname + '/modules/arrayManip.ejs');

/******** 
 * Mongoose
*********/
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
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const port = 3000;

/******** 
 * Misc. Modules
*********/
const _ = require('lodash');
app.set('view engine', 'ejs');

/******** 
 * Schema
*********/
const postSchema = new mongoose.Schema({
    date: {
        type: String,
    },

    title: {
        type: String,
        required: [true, 'Error: No title entered']
    },

    body: {
        type: String,
        required: [true, 'Error: No body entered']
    }
});
const Post = new mongoose.model('Home', postSchema);

const messageAbout = "laboris nisi ut aliquip ex ea commodo consequat.";
const messageContact = "Sed ut perspiciatis unde omnis iste natus doloremque.";
const posts = [];

app.get('/', (req, res) =>
{
    Post.find({}, async function (error, posts)
    {
        if (error)
            console.log(error);
        else
        {
            res.render('home', { postArray: posts });
        }
    });
});

app.get('/about', (req, res) =>
{
    res.render('about', { message: messageAbout });
});

app.get('/compose', (req, res) =>
{
    res.render('compose');
});

app.get('/contact', (req, res) =>
{
    res.render('contact', { message: messageContact });
});

app.get('/notFound', (req, res) =>
{
    res.render('notfound');
});

app.get('/:reqParam', (req, res) =>
{
    let postsMatch = [];
    let exists = array.getPost(posts, postsMatch, req.params.reqParam);
    if(exists != -1)
        res.render('post', { postsMatch: postsMatch });
    else
        res.redirect("notFound");
});

app.post("/compose", (req, res) =>
{
    const post = {
        date: date.getDateWithMinute(),
        title: req.body.title,
        body: req.body.composition,
    }
    posts.push(post);
    res.redirect("/");
});

app.post("/delete", (req, res) =>
{
    array.deletePost(posts, req.body.date);
    console.log("Post with date " + req.body.date + " deleted");
    res.redirect("/");
});

app.post("/post", (req, res) =>
{
    let postsMatch = [];
    let exists = array.getPosts(posts, postsMatch, req.body.search);
    if (exists != -1)
        res.render('post', { postsMatch: postsMatch });
    else
        res.redirect("notFound");
});

app.listen(port, () =>
{
    console.log("Server setup on port: " + port);
});