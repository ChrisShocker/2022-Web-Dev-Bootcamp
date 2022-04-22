
// Make sure JQuery is ready for loading its scripts
// Can also put scripts from HTML at end of body tag 
$(document).ready(function(){

    // js set color
    document.getElementsByTagName("h1")[0].style.color = "red";

    // jQuery set color
    $("h1").css("color", "red");

    // log color rgb value
    console.log($("h1").css("color"));

    // add class
    $("h1").addClass("main-title margins");

    // remove class
    $("h1").removeClass("main-title");

    // only manipulate text can't add tags
    $("h1").text("Good Bye");

    // Changes button text, and can add tags because ".html" 
    $("button").html("<em>Don't Click Me!</em>")

    
});