const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    console.log(req);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("contact info...")
});

app.get("/about", (req, res) =>{
    res.send("about me.....")
});

app.listen(port, () =>{
   console.log("The server is setup on port " + port); 
});