
// Make sure JQuery is ready for loading its scripts
// Can also put scripts from HTML at end of body tag 
$(document).ready(function(){

    // Gets attribute of an obj
    console.log($("img").attr("src"));

    // prints anchor tag href
    console.log($("a").attr("href"));

    // Changes anchor tag href to something else
    $("a").attr("href", "https://www.yahoo.com");
});