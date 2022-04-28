const express = require('express');
const ejs = require('ejs');
const { application } = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const messageHome = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";
const messageAbout = "laboris nisi ut aliquip ex ea commodo consequat.";
const messageContact = "Sed ut perspiciatis unde omnis iste natus doloremque.";

app.get('/', (req, res) =>
{
    res.render('home', { message: messageHome });
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

app.post("/compose", (req, res) => {
    console.log(req.body.title);
    console.log(req.body.composition);

    res.render('compose');
});

app.listen(port, () =>
{
    console.log("Server setup on port: " + port);
});