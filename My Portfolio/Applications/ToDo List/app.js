const express = require("express");

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    determineDay(res);
});


function determineDay(res){
    let today = new Date();
    let day = today.getDay();

    if(day === 0)
        res.render("list", {day: "Sunday!"});
    else if(day === 1)
        res.render("list", {day: "Monday!"});
    else if(day === 2)
        res.render("list", {day: "Tuesday!"});
    else if(day === 3)
        res.render("list", {day: "Wednesday!"});
    else if(day === 4)
        res.render("list", {day: "Thrusday!"});
    else if(day === 5)
        res.render("list", {day: "Friday!"});
    else
        res.render("list", {day: "Saturday!"});
}








app.listen(port, ()=>{
    console.log("Server running on port: " +port);
});