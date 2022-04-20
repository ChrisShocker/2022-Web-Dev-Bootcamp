//data catching, slice, js injection, length
function limitMessage()
{
    // catching data in variables
    let userInput = prompt("Please type a message post");
    console.log("You typed: " + userInput);

    // slice
    let sliced = userInput.slice(0, 239);
    alert("Characters 0 - 239: " + sliced)

    //injecting js into html
    document.write("You typed: " + sliced);

    // length
    let messageLength = userInput.length;
    alert("the length of your message was " + messageLength + "\nYou have " + (240 - messageLength) + " characters left")
}
//limitMessage();

//toUpperCase
function convertToUpper(name)
{
    name = name.toUpperCase();
    document.getElementById("paragraph1").innerHTML = "Uppercase: "  +name;
}

//toLowerCase
function convertToLower(name)
{
    name = name.toLowerCase();
    document.getElementById("paragraph2").innerHTML = "Lowercase: " +name;
}

function capitalizeFirstLetter(string)
{
    //  let firstLetter = name.slice(0,1).toUpperCase();
    // name = firstLetter + name.slice(1, name.length);
    string = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    document.getElementById("paragraph3").innerHTML = "Uppercase first letter: " +string;
}

// toUpperCase and toLowerCase
function convertName()
{
    let name = "jerry";
    convertToUpper(name);
    convertToLower(name);
    capitalizeFirstLetter(name);
}

//wait for html to load before calling on html variables
window.onload = function ()
{
    convertName();
}


