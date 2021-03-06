const express = require('express');
const http = require("http");
const app = express();
const port = 3000;

/****************************************************************/
//NOTE: MUST HAVE API KEY TO USE
let key = "";
/****************************************************************/

let openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?";
//Parse data from post
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/index.html");
});

//upon recieveing a post, do something
app.post("/", (req, res) =>
{
    let city = "Portland,US-OR";

    http.get(openWeatherURL + "units=imperial&q=" + req.body.cityName + "&appid=" + key, (response) =>
    {
        //store all data into a variable to avoid JSON timeout error
        let responseData = '';
        response.on("data", (data) =>
        {
            responseData += data;
        });

        //once all the data has been stored, parse it
        response.on("end", () =>
        {
            let weatherData = JSON.parse(responseData);

            let icon = weatherData.weather[0].icon;
            let iconImage = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            let temp = weatherData.main.temp;
            let weatherDescrip = weatherData.weather[0].description;
            res.write("<h2>The current weather is: " + weatherDescrip + "</h2>");
            res.write("<h1>The temperature is: " + temp + " degrees</h1>");
            res.write("<img src=" + iconImage + ">");
            res.send();
        });
    });
});

app.get("/styles.css", (req, res) =>
{
    res.sendFile(__dirname + "/styles.css");
});

//listen on port
app.listen(port, () =>
{
    console.log("The server is setup on port " + port);
});