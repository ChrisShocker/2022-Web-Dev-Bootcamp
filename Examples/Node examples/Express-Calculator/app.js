const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) =>{
    res.send("thanks for posting");
    console.log(req.body);
});

app.listen(port, () =>{
   console.log("The server is setup on port " + port); 
});