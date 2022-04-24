const express = require('express');
const app = express();
const port = 3000;

//Parse data from post
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
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