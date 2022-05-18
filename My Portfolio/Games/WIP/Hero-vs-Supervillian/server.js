const express = require('express');
let superHeroes = require("superheroes");
let superVillians = require("supervillains");

let mySuperHeroName = superHeroes.random();
let mySuperVillian = superVillians.random();

const app = express();
const port = 3000;

//Parse data from post
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    var name = "hello";
    //res.sendFile(__dirname + "/index.html", {name:name});
    res.send("<h1>"+mySuperHeroName+"</h1>\n"+"<h1>"+mySuperVillian+"</h1>");
});

app.get("/index.js", (req, res) =>{
    res.sendFile(__dirname + "/index.js");
});

app.get("/styles.css", (req, res) =>{
    res.sendFile(__dirname + "/styles.css");
});







//listen on port
app.listen(port, () =>
{
    console.log("The server is setup on port " + port);
});