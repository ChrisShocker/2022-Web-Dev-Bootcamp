
// Make sure JQuery is ready for loading its scripts
// Can also put scripts from HTML at end of body tag 
$(document).ready(function(){

    // JQuery built in animations
    // hides h1 element
    $(".hide").on("click", function(){
        $("h1").hide();
    });

    // shows h1 element
    $(".show").on("click", function(){
        $("h1").show();
    });

    // toggles between hiding and unhiding h1 element
    $(".toggle").on("click", function(){
        $("h1").toggle();
    });

    // hides h1 element with FadeOut animation
    $(".fadeOut").on("click", function(){
        $("h1").fadeOut();
    });

    // shows h1 element with FadeIn animation
    $(".fadeIn").on("click", function(){
        $("h1").fadeIn();
    });

    // toggles between hiding and unhiding h1 element
    $(".fadeToggle").on("click", function(){
        $("h1").fadeToggle();
    });

    // hides h2 element with FadeOut animation
    $(".slideUp").on("click", function(){
        $("h2").slideUp();
    });

    // shows h2 element with FadeIn animation
    $(".slideDown").on("click", function(){
        $("h2").slideDown();
    });

    // toggles between hiding and unhiding h2 element
    $(".slideToggle").on("click", function(){
        $("h2").slideToggle();
    });

    // Custom JQuery animations
    // can only add css values that have a numeric value in .animate()
    $(".custom").on("click", function (){
        $("h3").animate({opacity: 0.5}).animate({margin: 100}).animate({margin: 0}).animate({opacity: 1});
    });
});