/******** 
 * Express
*********/
const { application, response } = require('express');
const express = require('express');
const request = require('request');
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
let port = 3000;

/******** 
 * Misc Modules
*********/
const https = require('https');

/*****************************************************/
/*PROVIDE THE FOLLOWING*/
//api key:
const key = "";
const serverPrefix = "";
//audience list;
const listID = "";
/*****************************************************/

const url = "https://" + serverPrefix + ".api.mailchimp.com/3.0/lists/" + listID + "/";

/******** 
 * get
*********/
app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) =>
{
    res.sendFile(__dirname + "/index.html");
});

app.get("/unsubscribe.html", (req, res) =>
{
    res.sendFile(__dirname + "/unsubscribe.html");
});

app.get("/unsubscribe-success.html", (req, res) =>
{
    res.sendFile(__dirname + "/unsubscribe-success.html");
});

app.get("/unsubscribe-failed.html", (req, res) =>
{
    res.sendFile(__dirname + "/unsubscribe-failed.html");
});

/******** 
 * post
*********/
app.post("/index", (req, res) =>
{
    addSubscriber(req, res, key, serverPrefix, listID);
});

app.post("/unsubscribe", (req, res) =>
{
    removeSubscriber(req, res, key, serverPrefix, listID);
});

app.post("/failure", (req, res) =>
{
    res.redirect("/index.html");
});


app.listen(port, () =>
{
    console.log("Server created on port " + port);
});

/******** 
 * functions
*********/
function removeSubscriber(req, res, key, serverPrefix, listID)
{
    //data being passed to mailchimp
    var data = {
        update_existing: true,
        members: [
            {
                email_address: req.body.email,
                status: "unsubscribed",
            }
        ]
    };

    createRequest(req, res, data, "unsub");
}

function reAddSubscriber(req, res, key, serverPrefix, listID)
{
    //data being passed to mailchimp
    var data = {
        update_existing: true,

        members: [
            {
                email_address: req.body.email,
                status: "subscribed",
            }
        ]
    };

   createRequest(req, res, data, "readd");
}

function addSubscriber(req, res, serverPrefix, listID)
{
    //data being passed to mailchimp
    var data = {
        members: [
            {
                email_address: req.body.email,
                status: "subscribed",

                /*
                 * "merge fields" are specific to mailchimp and allow us to specify data
                 * values specific to the subscriber we are adding.
                 * https://mailchimp.com/developer/marketing/docs/merge-fields/ 
                 */
                merge_fields:
                {
                    FNAME: req.body.firstName,
                    LNAME: req.body.lastName
                }
            }
        ]
    };

    createRequest(req, res, data, "sub")
}

function createRequest(req, res, data, subType)
{
    //convert data to json strings to pass to mailchimp
    const jsonData = JSON.stringify(data);

    //options to be passed into https specific to the "https" node module
    //https://nodejs.org/api/http.html
    const options = {
        method: "POST",
        auth: "Chris:" + key,
    }

    //variable to hold data thats return from response
    let responseData = '';
    //variable to convert held data to a JSON object
    let responseObject = {};

    //create a request to the specified url with our options 
    const request = https.request(url, options, (response) =>
    {
        //on response parse the data and log it to console
        response.on("data", (data) =>
        {
            responseData += data;
            console.log(JSON.parse(data));
        });

        //after recieveing all data from response
        response.on("end", () =>
        {
            responseObject = JSON.parse(responseData);

            if (subType === "unsub")
            {
                if (responseObject.error_count === 0)
                    res.sendFile(__dirname + "/unsubscribe-success.html");
                else
                    res.sendFile(__dirname + "/unsubscribe-failed.html");
            }
            else
            {
                if (responseObject.error_count === 0)
                    res.sendFile(__dirname + "/success.html");
                else
                    reAddSubscriber(req, res, key, serverPrefix, listID);
            }
        });
    });

    //send the request as chunks to mailchimp
    request.write(jsonData);

    //terminate the request and flush stream
    request.end();
}