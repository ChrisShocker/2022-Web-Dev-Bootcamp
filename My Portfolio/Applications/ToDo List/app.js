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

    let dayList = [
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"]
    ];

    res.render("list", {day: dayList[day][1]});
}








app.listen(port, ()=>{
    console.log("Server running on port: " +port);
});