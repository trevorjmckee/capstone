$(document).ready(function() {
    // $(".part-two-container").click(function() {
    //     $(this).fadeOut();
    // });

    $("button").click(function() {
        $(".game-section-container").load("hollow-knight.txt #hollow-knight");
    });
})