const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

//Parse data from post
app.use(express.urlencoded({extended: true}));

//Send client to set page on page load
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

//Upon recieveing post response, send a message
app.post("/" , (req, res) =>{
    res.send(calcBMI(Number(req.body.height), Number(req.body.weight)));
});

//listen on port
app.listen(port, () =>{
   console.log("The server is setup on port " + port); 
});

//calculate BMI from input
function calcBMI(height, weight){
    return ("BMI is "+(Math.round(703*(Number(weight / Math.pow(height, 2))))));
}