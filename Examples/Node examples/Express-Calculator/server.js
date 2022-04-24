const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

//Parse data from post
app.use(express.urlencoded({extended: true}));

//Send client to set page on page load
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

//Upon recieveing post response, send a message
app.post("/" , (req, res) =>{
    console.log(req.body);
    res.send(selectArith(Number(req.body.num1), Number(req.body.num2), req.body.operation));
});

//listen on port
app.listen(port, () =>{
   console.log("The server is setup on port " + port); 
});

//TODO:
//bug here, not sending correct data?
function selectArith(number1, number2, operation){
    if(operation === "add")
        return addNumbers(number1, number2);

    else if(operation === "sub")
        return subtractNumbers(number1, number2);

    else if(operation === "mul")
        return multiplyNumbers(number1, number2);

    else if(operation === "div")
        return divideNumbers(number1, number2);

    else if(operation === "mod")
        return moduloNumbers(number1, number2);
    else
        console.log("unknown operator");
}

function addNumbers(number1, number2){
    return ("Addition: "+Number(number1 + number2));
}

function subtractNumbers(number1, number2){
    return ("Subtraction: "+Number(number1 - number2));
}

function multiplyNumbers(number1, number2){
    return ("Multiplication: "+Number(number1 * number2));
}

function divideNumbers(number1, number2){
    return ("Division: "+Number(number1 / number2));
}

function moduloNumbers(number1, number2){
    return ("Modulo: "+Number(number1 % number2));
}