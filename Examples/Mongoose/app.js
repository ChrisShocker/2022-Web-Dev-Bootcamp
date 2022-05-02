const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');
const mongoose = require('mongoose');

const userName = "";
const password = "";
const DB = ""

const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/"+DB +"?retryWrites=true&w=majority";

 mongoose.connect(uri, {useNewURLParser:true});

//addSingleDocument('Broccoli', 6, "My dog loves it");

//findAll();


async function findName(collection, name)
{
}

async function findAll()
{
    const vegetableSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });

    const Vegetable = mongoose.model("Vegetable", vegetableSchema);

    Vegetable.find({}, function (err, vegetables){

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

async function addManydocuments(collection)
{
    // create entries and await the result from mongo
    const result = await collection.insertMany(
        [
            {
                name: "tomato",
                score: 1,
                review: "Tomtaoes are fuit?"
            },
            {
                name: "mango",
                score: 8,
                review: "Best fruit for smoothies"
            },
            {
                name: "pineapple",
                score: 10,
                review: "So sweeeeeet"
            }
        ]
    );
    // log the id the document was created under 
    console.log(result);
}

