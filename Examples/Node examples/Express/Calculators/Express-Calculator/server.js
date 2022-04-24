const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

//Parse data from post
app.use(express.urlencoded({ extended: true }));


// Get
app.get("/", (req, res) =>
{
    res.sendFile(__dirname + "/index.html")
});

app.get("/calculator.html", (req, res) =>
{
    res.sendFile(__dirname + "/calculator.html")
});

app.get("/styles.css", (req, res) =>
{
    res.sendFile(__dirname + "/styles.css")
});

app.get("/bmiCalculator.html", (req, res) =>
{
    res.sendFile(__dirname + "/bmiCalculator.html")
});


// Posts
app.post("/calculator", (req, res) =>
{
    res.send(selectArith(Number(req.body.num1), Number(req.body.num2), req.body.operation));
});

app.post("/bmi", (req, res) =>
{
    res.send(calcBMI(Number(req.body.height), Number(req.body.weight)));
});


//listen on port
app.listen(port, () =>
{
    console.log("The server is setup on port " + port);
});


//Call operation function based on parameter passed in
function selectArith(number1, number2, operation)
{
    if (operation === "add")
        return addNumbers(number1, number2);

    else if (operation === "sub")
        return subtractNumbers(number1, number2);

    else if (operation === "mul")
        return multiplyNumbers(number1, number2);

    else if (operation === "div")
        return divideNumbers(number1, number2);

    else if (operation === "mod")
        return moduloNumbers(number1, number2);
    else
        console.log("unknown operator");
}

//calculate BMI from input
function calcBMI(height, weight)
{
    return ("BMI is " + (Math.round(703 * (Number(weight / Math.pow(height, 2))))));
}

function addNumbers(number1, number2)
{
    return ("Addition: " + Number(number1 + number2));
}

function subtractNumbers(number1, number2)
{
    return ("Subtraction: " + Number(number1 - number2));
}

function multiplyNumbers(number1, number2)
{
    return ("Multiplication: " + Number(number1 * number2));
}

function divideNumbers(number1, number2)
{
    return ("Division: " + Number(number1 / number2));
}

function moduloNumbers(number1, number2)
{
    return ("Modulo: " + Number(number1 % number2));
}