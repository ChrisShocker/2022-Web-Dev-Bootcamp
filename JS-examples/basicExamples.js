//data catching, slice, js injection, length
function limitMessage()
{
    // catching data in variables
    let userInput = prompt("Please type a message post");
    console.log("You typed: " + userInput);

    // slice
    let sliced = userInput.slice(0, 239);
    alert("Characters 0 - 239: " + sliced)

    // injecting js into html
    document.write("You typed: " + sliced);

    // length
    let messageLength = userInput.length;
    alert("the length of your message was " + messageLength + "\nYou have " + (240 - messageLength) + " characters left")
}

//toUpperCase
function convertToUpper(string)
{
    string = string.toUpperCase();
    document.getElementById("paragraph1").innerHTML = "Uppercase: " + string;
}

// toLowerCase
function convertToLower(string)
{
    string = string.toLowerCase();
    document.getElementById("paragraph2").innerHTML = "Lowercase: " + string;
}

// capitalize the first letter of a string
function capitalizeFirstLetter(string)
{
    // let firstLetter = name.slice(0,1).toUpperCase();
    // name = firstLetter + name.slice(1, name.length);
    string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    document.getElementById("paragraph3").innerHTML = "Uppercase first letter: " + string;
}

// toUpperCase, toLowerCase, and capitalize first letter of a string
function convertName()
{
    let name = "jerry";
    convertToUpper(name);
    convertToLower(name);
    capitalizeFirstLetter(name);
}

function dogToHumanYears()
{
    let dogAge = prompt("Please type in your dog's age");
    alert("Your dog is: " + Number((dogAge - 2) * 4 + 21));

}

// wait for html to load before calling on html variables
window.onload = function ()
{
    //  limitMessage();
    // convertName();
    dogToHumanYears();
}


