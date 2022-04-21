
// Get a number between 1 and 6
function randomDice()
{
    let n = Math.random();
    n = Math.floor(n * 6) + 1;
    console.log(n);
}

// Fake calculator that randomly ouputs compatibility between two words
class loveCalc
{

    calcCompat(name1, name2)
    {
        let names = prompt("Please enter two names");
        let nameArray = names.split(' ');

        let match = Math.random();
        match = Math.floor(match * 100) + 1;

        this.matchType(nameArray, match);
    }

    matchType(nameArray, match)
    {
        if (match >= 90)
            alert(nameArray[0] + " and " + nameArray[1] + " are meant for eachother");

        else if (match >= 60 && match < 90)
            alert(nameArray[0] + " and " + nameArray[1] + " have great compatibility");

        else
            alert(nameArray[0] + " and " + nameArray[1] + " have bad compatibility");
    }
}

// Takes input and checks if it's a leap year
function checkIfLeapYear(year)
{
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0)
        console.log("Leap year.")
    else
        console.log("Not leap year.")
}

window.onload = function ()
{
    // randomDice();

    // const loveCalculator = new loveCalc();
    // loveCalculator.calcCompat();

    // checkIfLeapYear(1989);
}