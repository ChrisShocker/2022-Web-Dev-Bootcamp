
// Get a number between 1 and 6
function randomDice(){
    let n = Math.random();
    n = Math.floor(n*6);
    console.log(n);
}

function loveCalc(name1, name2){
    let names = prompt("Please enter two names");
    let nameArray = names.split(' ');

    let match = Math.random();
    match = Math.floor(match*100);

    alert(nameArray[0] +" and " +nameArray[1] +" have " +match +"% Love Compatability");
}

window.onload = function(){
    // randomDice();
    // loveCalc();
}