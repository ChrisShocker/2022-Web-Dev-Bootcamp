let drumSet = document.getElementsByTagName("button");

for(let i = 0; i < drumSet.length; i++){
    console.log(drumSet[i].className);
    drumSet[i].addEventListener("click", eval(drumSet[i].className));
}

function w_Drum()
{
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

function a_Drum()
{
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}

function s_Drum()
{
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}

function d_Drum()
{
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}

function j_Drum()
{
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}

function k_Drum()
{
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}

function l_Drum()
{
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
}