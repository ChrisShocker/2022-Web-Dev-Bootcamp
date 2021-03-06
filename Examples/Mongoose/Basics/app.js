const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');
const mongoose = require('mongoose');

const keys = require('./api_keys');
const userName = keys.mongooseUserName;
const password = keys.mongoosePassword;
const DB = keys.mongooseDB;

const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewURLParser: true });

//schema mongoose will use for operations on DB
const vegetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Error: No name']
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: {
        type: String,
        required: false
    }
});

//Create a model for objects in mongodb. 
//Note: Vegetable will become vegetables
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

//addSingleDocument('Broccoli', 8, "My dog loves it");

//addManydocuments();

//updateVegetableByName('Carrot', 'carrot', 8, '');

//deleteVegetableByName('Corn');

//deleteAllVegetablesByName('Carrot');

//findByName('Carrot');

findAll();

//mongoose.connection.close();

async function deleteVegetableByName(searchparam){
    Vegetable.deleteOne({name: searchparam}, function(error){
        if(error)
            console.log(error);
        else
            console.log('Vegetable deleted');
    });
}

async function deleteAllVegetablesByName(searchparam){
    Vegetable.deleteMany({name: searchparam}, function(error){
        if(error)
            console.log(error);
        else
            console.log('Vegetables deleted');
    });
}

async function updateVegetableByName(searchparam, name, rating, review){
    Vegetable.updateOne({name: searchparam}, {name: name, rating: rating, review: review}, function(error){
        if(error)
            console.log(error);
        else
            console.log('Vegetable updated');
    });
}

async function findByName(name)
{
    Vegetable.find({ name: name }, function (error, vegetables)
    {
        if (error)
            console.log(error);
        else
            console.log(vegetables);
    });
}

async function findAll()
{
    //find all the documents in the db
    Vegetable.find({}, function (error, vegetables)
    {
        if (error)
            console.log(error)
        else
            //print out the results to the cmd
            console.log(JSON.parse(JSON.stringify(vegetables)));
    });
}

async function addSingleDocument(name, rating, review)
{
    const vegetable = new Vegetable({
        name: name,
        rating: rating,
        review: review
    });

    //save vegetable document and insert it into the Vegetable collection
    await vegetable.save();
    console.log("Vegetable added");
}

async function addManydocuments()
{
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
    Vegetable.insertMany(vegetableArray, function (error, docs)
    {
        if (error)
            console.log(error);
        else
            console.log('Vegetables added');
    });
}