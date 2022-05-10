/******** 
 * Express & EJS
*********/
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const port = 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home');
})

app.get('/login', (req, res) =>{
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});