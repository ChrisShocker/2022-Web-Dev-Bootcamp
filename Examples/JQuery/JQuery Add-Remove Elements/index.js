
// Make sure JQuery is ready for loading its scripts
// Can also put scripts from HTML at end of body tag 
$(document).ready(function(){

    //add an h1 element before the existing h1 element
    $("h1").before("<h1>h1 Prior</h1>");  

    //add an h3 element after the existing h2 element
    $("h2").after("<h3>h3 after h2</h3>");  

    //add a button inside h3 element but before it
    $("h3").prepend("<button>prepend button</button>");  

    //add a button inside h3 element just after it
    $("h3").append("<button>append button</button>");  

    //add an h4 element after the existing h3 element
    $("h3").after("<h4>h4 after h3</h4>");  

    //remove the h4 element we created
    $("h4").remove();

});