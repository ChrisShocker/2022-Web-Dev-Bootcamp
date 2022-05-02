const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');
const mongoose = require('mongoose');

const userName = "";
const password = "";
const DB = "";

const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewURLParser: true });

//addSingleDocument('Broccoli', 6, "My dog loves it");

//addManydocuments();

//findAll();

findByName('Carrot');


async function findByName(name)
{
    const vegetableSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });

    const Vegetable = mongoose.model("Vegetable", vegetableSchema);
    Vegetable.find({ name: name}, function(error, vegetables){
        if(error)
            console.log(error);
        else
            console.log(vegetables);
    });
}

async function findAll()
{
    const vegetableSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });

    const Vegetable = mongoose.model("Vegetable", vegetableSchema);

    //find all the documents in the db
    Vegetable.find({}, function (error, vegetables)
    {
        if(error)
            console.log(error)
        else
        //print out the results to the cmd
        console.log(JSON.stringify(vegetables, null, 4));
    });
}

async function addSingleDocument(name, rating, review)
{
    //determine how we want data for an object to be structured
    const vegetableSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });

    //Create a model for mongodb. 
    //Note: Vegetable will become vegetables
    const Vegetable = mongoose.model("Vegetable", vegetableSchema);

    const vegetable = new Vegetable({
        name: name,
        rating: rating,
        review: review
    });

    //save vegetable document and insert it into the Vegetable collection
    vegetable.save();
}

async function addManydocuments()
{
    const vegetableSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });
    const Vegetable = mongoose.model("Vegetable", vegetableSchema);

    vegetableArray = [
        {
            name: "Green bean",
            score: 8,
            review: "Great with steak"
        },
        {
            name: "Potato",
            score: 10,
            review: "Best baked or mashed"
        },
        {
            name: "Corn",
            score: 7,
            review: "I run the economy"
        }
    ]

    // log the id the document was created under 
    const result = Vegetable.insertMany(vegetableArray, function (error, docs)
    {
        if (error)
            console.log(error);
        else
            console.log('Vegetables added');
    });
    // create entries and await the result from mongo
}

