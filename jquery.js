$(document).ready(function() {
    // $(".part-two-container").click(function() {
    //     $(this).fadeOut();
    // });

    $("button").click(function() {
        $(".game-section-container").load("game-content.txt #hollow-knight");
    });
})