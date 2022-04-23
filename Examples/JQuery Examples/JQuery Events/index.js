
// Make sure JQuery is ready for loading its scripts
// Can also put scripts from HTML at end of body tag 
$(document).ready(function(){


    // 1.
    // change css color on click
    $("h1").click(function(){
        $("h1").css("color", "purple");
    });

    //2.
    // js: select all buttons, add event listener, and change background color on click
    let buttonList = document.getElementsByTagName("button");
    for(let i = 0; i < buttonList.length; ++i){
        buttonList[i].addEventListener("click", function(){
            buttonList[i].style.background = "blue";
        });
    }

    // 2.
    // JQuery: select all buttons, add event, and change text color on click
    $("button").click(function(){
        $("button").css("color", "red");
    })

    // 3.
    // JQuery: detect keypresses in input box and print it to console
    $("input").keypress(function(event){
        console.log(event.key);
    })

    // 4.
    // JQuery: detect keypresses and change h1 to match them
    $("input").keypress(function(keyPressed){
        $("h1").text(keyPressed.key);
    })

    // 5.
    // JQuery: add event on mouseover to h1 and change its color on event
    $("h1").on("mouseover", function(){
        $("h1").css("color", "purple");
    });
});