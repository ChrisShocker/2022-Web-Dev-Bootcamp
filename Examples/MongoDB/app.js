const { MongoClient, ServerApiVersion } = require('mongodb');

const userName = "";
const password = "";
const uri = "mongodb+srv://" + userName + ":" + password + "@cluster0.rsfw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err =>
{
    //creats a database called ExampleDatabase with a collection called fruits
    const collection = client.db("ExampleDatabase").collection("fruits");

    //add items to the collection
    addSingleDocument(collection, "apple", 9, "Apples are awesome");
    addSingleDocument(collection, "orange", 7, "Oranges are a citrus fruit");
    addSingleDocument(collection, "Bananas", 8, "Bananas have pottasium");

    //add more then one document at a time
    addManydocuments(collection), function ()
    {
        //once the last item has been added we can colse the connection
        client.close();
    };

});

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

async function addSingleDocument(collection, name, score, review)
{
    // Creates a document to add to the collection
    const doc = { name: name, score: score, review: review };
    // await the result from mongo
    const result = await collection.insertOne(doc);
    // log the id the document was created under 
    console.log(result);
}