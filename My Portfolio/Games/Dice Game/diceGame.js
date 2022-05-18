//Randomly changes dice images to settle disputes between two players
function randomlyChangeDice()
{
    let n = Math.floor(Math.random() * 6) + 1;
    let m = Math.floor(Math.random() * 6) + 1;

    document.getElementsByClassName("img1")[0].src = "images/dice" +n +".png";
    document.getElementsByClassName("img2")[0].src = "images/dice" +m +".png";

    if(n > m)
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
    else if(m > n)
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
    else
        document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw!";
}

window.onload = function ()
{
    randomlyChangeDice();
}