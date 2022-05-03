const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');
const mongoose = require('mongoose');

const userName = "";
const password = "";
const DB = "";

const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/" + DB + "?retryWrites=true&w=majority";

/*****************
Setup Schemas
*****************/
//vegetable schema to define vegetables
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

//person schema with a vegetable doc embedded
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Error: No name']
    },
    age: {
        type: Number,
        min: 1,
        max:120
    },
    //Embedding vegetable document into the person doc
    favouriteVegetable: vegetableSchema 
})
const Person = mongoose.model("Person", personSchema);


/*****************
Connect and Call Functions
*****************/
mongoose.connect(uri, { useNewURLParser: true });

//createPerson('Chad', 23, );
findAll('persons');
findAll('vegetables');

/*****************
functions
*****************/
//create a person and vegetable doc, and embed the vegetable to the person doc
async function createPerson(name, age)
{
    const vegetable = new Vegetable({
        name: 'Carrot',
        rating: 8,
        review: 'Carrots are great!'
    });

    const person = new Person({
        name: name,
        age: age,
        favouriteVegetable: vegetable
    });

    //save person document and insert it into the Person collection
    await person.save();
    //save vegetable document and insert it into the Vegetable collection
    await vegetable.save();
    console.log("Person added");
}

//find all docs with type docType (i.e., persons)
async function findAll(docType)
{
    //find all the documents in the db
    Person.find({}, function (error, docType)
    {
        if (error)
            console.log(error)
        else
            //print out the results to the cmd
            console.log(JSON.parse(JSON.stringify(docType)));
    });
}