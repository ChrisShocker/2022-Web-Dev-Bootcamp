document.getElementsByClassName("w drum")[0].addEventListener("click", wDrum);
document.getElementsByClassName("a drum")[0].addEventListener("click", aDrum);
document.getElementsByClassName("s drum")[0].addEventListener("click", sDrum);
document.getElementsByClassName("d drum")[0].addEventListener("click", dDrum);
document.getElementsByClassName("j drum")[0].addEventListener("click", jDrum);
document.getElementsByClassName("k drum")[0].addEventListener("click", kDrum);
document.getElementsByClassName("l drum")[0].addEventListener("click", lDrum);

function wDrum()
{
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

function aDrum()
{
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}
function sDrum()
{
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}
function dDrum()
{
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}
function jDrum()
{
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}
function kDrum()
{
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}
function lDrum()
{
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
}
/*
console.log(document.getElementsByClassName("w drum")[0].className);
function playSound()
{
    switch (document.getElementsByClassName()[0].className)
    {
        case "w drum":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

    }
}
*/