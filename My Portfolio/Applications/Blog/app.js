const express = require('express');
const ejs = require('ejs');
const { application } = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home');
});



























app.listen(port, () =>{
    console.log("Server setup on port: " +port);
});