const express = require('express');
const ejs = require('ejs');
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

app.get('/post', (req, res) =>
{
    res.render('post');
});

app.get('/:testing', (req, res) =>{
    array.getPost(posts, req.params.testing);  
    res.render('home', { postArray: posts });
});

app.get('/compose/:testing', (req, res) =>{
    array.getPost(posts, req.params.testing);  
    res.render('home', { postArray: posts });
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

app.listen(port, () =>
{
    console.log("Server setup on port: " + port);
});