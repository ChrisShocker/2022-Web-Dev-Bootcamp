const express = require('express');
const ejs = require('ejs');
const _ = require('lodash');
const date = require(__dirname +'/modules/date.ejs');
const array = require(__dirname +'/modules/arrayManip.ejs');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const messageAbout = "laboris nisi ut aliquip ex ea commodo consequat.";
const messageContact = "Sed ut perspiciatis unde omnis iste natus doloremque.";
const posts = [];

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

app.get('/notFound', (req, res) =>{
    res.render('notfound');
});

app.get('/post', (req, res) =>
{
    res.render('post', { postArray: array.getPost(posts, req.params.post) });
});

app.get('/:reqParam', (req, res) =>{
        let exists = array.getPost(posts, req.params.reqParam);
        if(exists != -1)
            res.render('post', { postArray: array.getPost(posts, req.params.reqParam) });
        else
            res.redirect("notFound");
});

app.post("/compose", (req, res) => {
    const post = {
        date: date.getDateWithMinute(), 
        title: req.body.title,
        body: req.body.composition,
    }
    posts.push(post);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    array.deletePost(posts, req.body.date);
    console.log("Post with date " +req.body.date +" deleted");
    res.redirect("/");
});

app.post("/post", (req, res) => {
    let exists = array.getPost(posts, req.body.search);
    if(exists != -1)
        res.render('post', { postArray: array.getPost(posts, req.body.search) });
    else
        res.redirect("notFound");
});

app.listen(port, () =>
{
    console.log("Server setup on port: " + port);
});