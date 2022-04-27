const express = require("express");

const port = 3000;
const app = express();

//array to hold items added by user
var dayTasksArray = [];
var workTasksArray = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    determineDay();
    res.render('list', {listTitle: determineDay(), listArray: dayTasksArray});
});

app.get('/about', (req, res) =>{
    res.render("about");
});

app.get('/work', (req, res) => {
    res.render('list', {listTitle: "Work List", listArray: workTasksArray});
})

app.post('/', (req, res) =>{
    if(req.body.list === "Work"){
        addItem(req, workTasksArray);
        res.redirect("/work")
    }
    else{
        addItem(req, dayTasksArray);
        res.redirect('/');
    }
});

app.post('/work', (req, res) =>{
    addItem(workTasksArray, item);

    //after recieving new data redirect it to the get/render function
    res.redirect('/work');
});

function addItem(req, array){
    var item = req.body.newItem;
    array.push(item);
}

function determineDay(){
    let today = new Date();

    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var day = today.toLocaleDateString('en-US', options);
    return day;
}

app.listen(port, ()=>{
    console.log("Server running on port: " +port);
});