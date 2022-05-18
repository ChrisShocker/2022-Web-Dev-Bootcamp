//Add functionailty for a virtual drumset

let drumSet = document.getElementsByTagName("button");
//add listener to all buttons and play their sound
for (let i = 0; i < drumSet.length; i++)
{
    drumSet[i].addEventListener("click", function ()
    {
        playSound(drumSet[i].className);
    });
}

// listen for keydown event and play assoctiated sound
document.addEventListener("keydown", function (keyPressed)
{
    playSound(keyPressed.key);
});

// Playes a sound based on button pressed or clicked 
function playSound(instrumentSound)
{
    if (instrumentSound === "w" || instrumentSound === "w_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        animateButton("w_Drum");
    }

    else if (instrumentSound === "a" || instrumentSound === "a_Drum")
    {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        animateButton("a_Drum");
    }

    else if (instrumentSound === "s" || instrumentSound === "s_Drum")
    {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        animateButton("s_Drum");
    }

    else if (instrumentSound === "d" || instrumentSound === "d_Drum")
    {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        animateButton("d_Drum");
    }

    else if (instrumentSound === "j" || instrumentSound === "j_Drum")
    {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        animateButton("j_Drum");
    }

    else if (instrumentSound === "k" || instrumentSound === "k_Drum")
    {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        animateButton("k_Drum");
    }

    else if (instrumentSound === "l" || instrumentSound === "l_Drum")
    {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        animateButton("l_Drum");
    }

    else
        console.log(instrumentSound + " button not found");
}

// Adds and removes class to simulate an animation
async function animateButton(buttonToAnimate)
{
    document.getElementsByClassName(buttonToAnimate)[0].classList.add("pressed");
    await delay(25);
    setTimeout(function () { document.getElementsByClassName(buttonToAnimate)[0].classList.remove("pressed"), 35 });
}

/*
Allows animations by returning a promise to setTimeout
since setTimeout is an async function 
(doesn't wait for other functions to finish on stack)
*/
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}