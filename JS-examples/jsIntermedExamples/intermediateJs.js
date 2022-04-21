
// Get a number between 1 and 6
function randomDice()
{
    let n = Math.random();
    n = Math.floor(n * 6) + 1;
    console.log(n);
}

// Takes input and checks if it's a leap year
function checkIfLeapYear(year)
{
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0)
        console.log("Leap year.")
    else
        console.log("Not leap year.")
}

// Simple FizzBuss solution that stores Fizz, Buzz, or FizzBuzz into an array
function fizzBuzz()
{
    let fizzArray = [];
    for (let i = 0; i <= 100; ++i)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            fizzArray.push(i + " FizzBuzz");
        }
        else if (i % 3 === 0)
        {
            fizzArray.push(i + " Fizz");
        }

        else if (i % 5 === 0)
        {
            fizzArray.push(i + " Buzz");
        }
    }

    fizzArray.forEach(element =>
    {
        console.log(element);
    });
}


// Takes in a number and prints up to that number of the fibonacci sequence
function fibonacciGen(n)
{
    if (n === 0)
        return null;

    else if (n === 1)
        return [0];

    else
    {
        let numArray = [0, 1];

        for (let i = numArray.length; i < n; ++i)
            numArray.push(numArray[i - 2] + numArray[i - 1]);

        numArray.forEach(element => console.log(element));

        return numArray;
    }
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

//Build a guest array and check if a name is on it
class admitGuest
{
    guests = [];

    addGuestToArray()
    {
        for (let i = 0; i < 3; ++i)
        {
            let name = prompt("Enter a guest name to add to the list");
            this.guests.push(name);
        }
    }

    printGuestArray()
    {
        this.guests.forEach(element => console.log(element));
    }

    checkGuestList()
    {
        let name = prompt("Please enter a name to check if it's on the guest list")
        this.guests.includes(name) ? console.log("Guest on list") : console.log("Guest NOT on list");
    }
}

window.onload = function ()
{
    // randomDice();

    // checkIfLeapYear(1989);

    // fizzBuzz();

    // fibonacciGen(5);

    /*
    const loveCalculator = new loveCalc();
    loveCalculator.calcCompat();
    */

    /*
    const guestArray = new admitGuest();
    guestArray.addGuestToArray();
    guestArray.checkGuestList();
    */
}










