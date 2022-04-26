const { application, response } = require('express');
const express = require('express');
const request = require('request');
const https = require('https');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let port = 3000;

/*****************************************************/
/*PROVIDE THE FOLLOWING*/

//api key
/*
const key = "";
const serverPrefix = "";
//audience list
const listID = "";
*/
/*****************************************************/

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

function removeSubscriber(req, res, key, serverPrefix, listID){
    //url path to access mailchip api
    const url = "https://" + serverPrefix + ".api.mailchimp.com/3.0/lists/" + listID + "/";

    //data being passed to mailchimp
    var data = {
            update_existing: true,
        members: [
            {
                email_address: req.body.email,
                status: "unsubscribed",

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

            if (responseObject.error_count === 0)
                res.sendFile(__dirname + "/success.html");
            else
                res.sendFile(__dirname + "/failure.html");
        });
    });

    //send the request as chunks to mailchimp
    request.write(jsonData);

    //terminate the request and flush stream
    request.end();

}

function addSubscriber(req, res, key, serverPrefix, listID)
{
    //url path to access mailchip api
    const url = "https://" + serverPrefix + ".api.mailchimp.com/3.0/lists/" + listID + "/";

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

            if (responseObject.error_count === 0)
                res.sendFile(__dirname + "/success.html");
            else
                res.sendFile(__dirname + "/failure.html");
        });
    });

    //send the request as chunks to mailchimp
    request.write(jsonData);

    //terminate the request and flush stream
    request.end();
}