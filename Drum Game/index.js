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

//listen for keydown event and play assoctiated sound
document.addEventListener("keydown", function (keyPressed)
{
    playSound(keyPressed.key);
});

function playSound(instrumentSound)
{
    if (instrumentSound === "w" || instrumentSound === "w_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "a" || instrumentSound === "a_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "s" || instrumentSound === "s_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "d" || instrumentSound === "d_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "j" || instrumentSound === "j_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "k" || instrumentSound === "k_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else if (instrumentSound === "l" || instrumentSound === "l_Drum")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    else
        console.log(instrumentSound + " button not found");
}