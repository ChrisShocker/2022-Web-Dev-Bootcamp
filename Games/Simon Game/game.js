let buttons = $(".btn");

let gameState = {
    levelNumber: 1,
    gameStarted: false,
    sequencePattern: [],
    maxLevel: 0,
}

if (gameState.gameStarted === false)
    startGame();
else
    playGame();


function startGame()
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

function playGame()
{
    $(document).off("keypress");
    //add click event to all buttons
    $(".btn").click(async function ()
    {
        $("#level-title").text(gameState.levelNumber + 1);
        $(this).animate({ opacity: 0.5 }).animate({ opacity: 1 });
        playColorSound(this.id);

        while (gameState.maxLevel < gameState.sequencePattern.length)
        {
            buttonChecker(this.id);
        }

        ++gameState.levelNumber;
        await delay(1000);
        generateNextColor();
        displayLastGeneratedColor();
    })
}


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//checks to see if proper sequence was followed
function buttonChecker(colorLastPressed)
{
    if (colorLastPressed === gameState.sequencePattern[gameState.maxLevel])
    {
        ++gameState.maxLevel;
    }
    else
        gameOver();
}

function gameOver()
{
    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(location.reload() , 3000)
}

//Generates the sequence of colors for simon game
function generateNextColor()
{
    let randomColor = Math.floor(Math.random() * 4);
    if (randomColor === 0)
        gameState.sequencePattern.push("green");

    else if (randomColor === 1)
        gameState.sequencePattern.push("red");

    else if (randomColor === 2)
        gameState.sequencePattern.push("yellow");

    else
        gameState.sequencePattern.push("blue");
}

//displays last color generated
function displayLastGeneratedColor()
{
    let lastColorAdded = gameState.sequencePattern[gameState.sequencePattern.length - 1];
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