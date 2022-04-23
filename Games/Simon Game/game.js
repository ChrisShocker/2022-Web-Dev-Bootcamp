let buttons = $(".btn");
let sequencePattern = [];

let gameState = {
    levelNumber: 1,
    gameStarted: false,
}


//gameStart(gameState.levelNumber);
    if(gameState.gameStarted === false){
        gameStart();
    }
    else
        playGame();


function gameStart()
{
    $(document).keypress(function (event)
    {
        $("#level-title").text(gameState.levelNumber);
        generateNextColor();
        displayLastGeneratedColor();
        gameState.gameStarted = true;
        playGame();
    })
}

function playGame(){
    $(document).off("keypress");
    //add click event to all buttons
    $(".btn").click(function ()
    {
        $("#level-title").text(gameState.levelNumber + 1);
        $(this).animate({ opacity: 0.5 }).animate({ opacity: 1 });
        ++gameState.levelNumber;
    })
}

//Generates the sequence of colors for simon game
function generateNextColor()
{
    let randomColor = Math.floor(Math.random() * 4);
    if (randomColor === 0)
        sequencePattern.push("green");

    else if (randomColor === 1)
        sequencePattern.push("red");

    else if (randomColor === 2)
        sequencePattern.push("yellow");

    else
        sequencePattern.push("blue");
}

//displays last color generated
function displayLastGeneratedColor()
{
    let lastColorAdded = sequencePattern[sequencePattern.length - 1];
    $("." + lastColorAdded).animate({ opacity: 0.5 }).animate({ opacity: 1 });
    playColorSound(lastColorAdded);
}

//plays whatever sound color is passed to it
function playColorSound(color)
{
    if (color === "green")
    {
        var audio = new Audio("sounds/green.mp3");
        audio.play();
    }
    else if (color === "red")
    {
        var audio = new Audio("sounds/red.mp3");
        audio.play();
    }
    else if (color === "yellow")
    {
        var audio = new Audio("sounds/yellow.mp3");
        audio.play();
    }
    else if (color === "blue")
    {
        var audio = new Audio("sounds/blue.mp3");
        audio.play();
    }
}