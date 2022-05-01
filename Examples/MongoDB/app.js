const { MongoClient, ServerApiVersion } = require('mongodb');

const userName = "";
const password = "";
const uri = "mongodb+srv://" +userName +":" +password +"@cluster0.rsfw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


client.connect(err =>
{
    //creats a database called ExampleDatabase with a collection called fruits
    const collection = client.db("ExampleDatabase").collection("fruits");

    createDocument(collection);
    
    //client.close();
});

async function createDocument(collection){
    // Creates a document to add to the collection
    const doc = { name: "Neapolitan pizza", shape: "round" };
    // await the result from mongo
    const result = await collection.insertOne(doc);
    // log the id the document was created under 
    console.log(result.insertedId);

}

