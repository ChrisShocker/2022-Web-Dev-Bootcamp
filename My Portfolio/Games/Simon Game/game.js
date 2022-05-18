let gameState = {
    levelNumber: 1,
    gameStarted: false,
    gameActualSequence: [],
    userSequence: [],
    currentCheckLevel: 0,
    playedBefore: false,
}

if (gameState.gameStarted === false){
    startGame();
}
else{
    playGame();
}

//start state of the game
function startGame()
{
    $(document).keypress(function()
    {
        $("#level-title").text("Level " +gameState.levelNumber);
        gameState.gameStarted = true;

        if(gameState.playedBefore === false)
            generateGameSequence();

        playGame();
    })
}

//play state of the game
async function playGame()
{
    await delay(200);
    $(document).off("keypress");
    //add click event to all buttons
    $(".btn").click(async function ()
    {
        $("#level-title").text("Level "+gameState.levelNumber);
        $(this).animate({ opacity: 0.5 }).animate({ opacity: 1 });

        generateUserSequence(this.id);

        buttonChecker();
    });
}

//adds randomly generated color to game sequence array
function generateGameSequence(){
        generateNextColor();
        displayLastGeneratedColor();
        ++gameState.levelNumber;
}

//adds user clicked color to an array
function generateUserSequence(color){
        gameState.userSequence.push(color);
        playColorSound(color);
}

//checks to see if user input sequence is same as game sequence
async function buttonChecker()
{   
        if (gameState.userSequence[gameState.currentCheckLevel] === gameState.gameActualSequence[gameState.currentCheckLevel])
            ++gameState.currentCheckLevel;

        else
            gameOver();

        if(gameState.currentCheckLevel === gameState.gameActualSequence.length){
            await delay(1000);
            generateGameSequence();
            gameState.userSequence = [];
            gameState.currentCheckLevel = 0;
        }
}

//game over state
async function gameOver()
{
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    playColorSound("wrong");
    await delay(100);
    $("body").removeClass("game-over");

    resetGame();
}

//refeshes page after game over state
function resetGame(){
    $(document).keypress(function()
    {
        location.reload();
    });
}

//Generates the sequence of colors for simon game
function generateNextColor()
{
    let randomColor = Math.floor(Math.random() * 4);
    if (randomColor === 0)
        gameState.gameActualSequence.push("green");

    else if (randomColor === 1)
        gameState.gameActualSequence.push("red");

    else if (randomColor === 2)
        gameState.gameActualSequence.push("yellow");

    else
        gameState.gameActualSequence.push("blue");
}

//displays last color generated
function displayLastGeneratedColor()
{
    let lastColorAdded = gameState.gameActualSequence[gameState.gameActualSequence.length - 1];
    $("." + lastColorAdded).animate({ opacity: 0.5 }).animate({ opacity: 1 });
    playColorSound(lastColorAdded);
}

//plays whatever sound color is passed to it
function playColorSound(color)
{
    var audio = new Audio("sounds/"+ color +".mp3");
    audio.play();
}

//adds a delay
function delay(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}