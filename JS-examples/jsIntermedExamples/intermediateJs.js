
// Get a number between 1 and 6
function randomDice(){
    let n = Math.random();
    n = Math.floor(n*6) +1;
    console.log(n);
}

function matchType(nameArray, match){

    if(match >= 90)
        alert(nameArray[0] +" and " +nameArray[1] +" are meant for eachother");

    else if(match >=60 && match < 90)
        alert(nameArray[0] +" and " +nameArray[1] +" have great compatibility");

    else
        alert(nameArray[0] +" and " +nameArray[1] +" have bad compatibility");
}

function loveCalc(name1, name2){
    let names = prompt("Please enter two names");
    let nameArray = names.split(' ');

    let match = Math.random();
    match = Math.floor(match*100) + 1;

    matchType(nameArray, match);
}

function checkIfLeapYear(year){
    if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0)
        console.log("Leap year.")
    else
        console.log("Not leap year.")
}


window.onload = function(){
    // randomDice();
    // loveCalc();
    // checkIfLeapYear(1989);

}