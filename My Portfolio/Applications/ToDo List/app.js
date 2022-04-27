const express = require("express");

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    determineDay(res);
});


function determineDay(res){
    let today = new Date();

    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var day = today.toLocaleDateString('en-US', options);

    res.render('list', {day: day});
}

app.listen(port, ()=>{
    console.log("Server running on port: " +port);
});