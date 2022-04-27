const express = require("express");
const date = require(__dirname + "/views/date.ejs");
const array = require(__dirname + "/views/arrayManip.ejs");
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

//arrays to hold items added by user
var dayTasksArray = [];
var workTasksArray = [];


app.get('/', (req, res) =>
{
    res.render('list', { listTitle: date.getDate(), listArray: dayTasksArray });
});

app.get('/about', (req, res) =>
{
    res.render("about");
});

app.get('/work', (req, res) =>
{
    res.render('list', { listTitle: "Work List", listArray: workTasksArray });
})

app.post('/', (req, res) =>
{
    if (req.body.list === "Work")
    {
        if (req.body.removeTask)
        {
            array.removeItem(req, dayTasksArray);
            res.redirect('/work');
        }
        else
        {
            array.addItem(req, workTasksArray);
            res.redirect("/work")
        }
    }
    else
    {
        if (req.body.removeTask)
        {
            array.removeItem(req, dayTasksArray);
            res.redirect('/');
        }
        else
        {
            array.addItem(req, dayTasksArray);
            res.redirect('/');
        }
    }
});

app.post('/work', (req, res) =>
{
    addItem(workTasksArray, item);

    //after recieving new data redirect it to the get/render function
    res.redirect('/work');
});

function addItem(req, array)
{
    var item = req.body.newItem;
    array.push(item);
}

app.listen(port, () =>
{
    console.log("Server running on port: " + port);
});