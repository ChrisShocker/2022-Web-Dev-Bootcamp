/******** 
 * Express & ejs
*********/
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const ejs = require('ejs');
app.set('view engine', 'ejs');

/******** 
 * Lodash
*********/
const _ = require('lodash');

/******** 
 * Custom Modules
*********/
const date = require(__dirname + '/modules/date.ejs');
const array = require(__dirname + '/modules/arrayManip.ejs');

/******** 
 * Placeholder text
*********/
const messageAbout = "laboris nisi ut aliquip ex ea commodo consequat.";
const messageContact = "Sed ut perspiciatis unde omnis iste natus doloremque.";
const posts = [];

/******** 
 * create example post
*********/
const post = {
    date: date.getDateWithMinute(),
    title: "Give me a Title",
    body: "What's on your mind?",
}
posts.push(post);

/******** 
 * get
*********/
app.get('/', (req, res) =>
{
    res.render('home', { postArray: posts });
});

app.get('/index', (req, res) =>
{
    res.render('home', { postArray: posts });
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
    if (exists != -1)
        res.render('post', { postsMatch: postsMatch });
    else
        res.redirect("notFound");
});

/******** 
 * post
*********/
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