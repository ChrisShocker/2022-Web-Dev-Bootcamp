const express = require('express');
const request = require('request');


let port = 3000;
const app = express();






app.listen(port, () => {
    console.log("Server created on port " +port);
});