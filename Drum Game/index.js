let drumSet = document.getElementsByTagName("button");

for (let i = 0; i < drumSet.length; i++)
{
    drumSet[i].addEventListener("click", function ()
    {
        switch (drumSet[i].className)
        {
            case "w_Drum":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a_Drum":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s_Drum":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d_Drum":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j_Drum":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k_Drum":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l_Drum":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });
}

    document.addEventListener("keydown", function (keyPressed)
    {
        //playSound(keyPressed.key);
        switch (keyPressed.key)
        {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });

    function playSound(someButton){
        if(someButton === "w" || someButton === "w_Drum"){
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
        }

    }