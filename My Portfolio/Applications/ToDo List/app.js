const express = require("express");

const port = 3000;
const app = express();

//array to hold items added by user
var itemArray = [];

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    determineDay(res);
    res.render('list', {day: determineDay(), itemArray: itemArray});
});

app.post('/', (req, res) =>{
    var item = req.body.newItem;
    itemArray.push(item);

    //after recieving new data redirect it to the get/render function
    res.redirect('/');
});

function determineDay(){
    let today = new Date();

    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var day = today.toLocaleDateString('en-US', options);
    return day;
}

app.listen(port, ()=>{
    console.log("Server running on port: " +port);
});