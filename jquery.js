$(document).ready(function() {
    // $(".part-two-container").click(function() {
    //     $(this).fadeOut();
    // });

    $("button").click(function() {
        $(".game-section-container").load("game-content.txt #hollow-knight");
    });

    $(".nav-type-one-gradient-top").click(function() {
        $(".nav-top-entry").toggleClass("nav-top-entry-transition").delay(1000).load("game-list-entries.txt #your-index").toggleClass("nav-top-entry-transition");
        
        // $(".nav-top-entry").load("game-list-entries.txt #your-index");
        // $(".nav-top-entry").toggleClass("nav-top-entry-transition");
    })
})