$(document).ready(function () {
    // $(".part-two-container").click(function() {
    //     $(this).fadeOut();
    // });

    $("button").click(function () {
        $(".game-section-container").load("game-content.txt #hollow-knight");
    });

    // $(".nav-type-one-gradient-top").click(function() {
    //     $(".nav-top-entry").toggleClass("nav-top-entry-transition");

    //     setTimeout(function() {
    //         $(".nav-top-entry").load("game-list-entries.txt #your-index").toggleClass("nav-top-entry-transition");
    //     }, 500);
    // })

    let j = 2;

    // if (i = 0) {
    //     $(".nav-type-one-gradient-top").addClass("nav-type-one-gradient-top-display-none");
    // }

    $(".nav-type-one-gradient-top").click(function () {
        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                console.log(result);

                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    if (j > 1) {
                        $(".nav-top-entry").text(result[j - 2].name);
                    } else {
                        $(".nav-top-entry").text("");
                    }
                    
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    if (j > 0) {
                        $(".nav-game").text(result[j - 1].name);
                    } else {
                        $(".nav-game").text("");
                    }
                    
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 900);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[j].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);

                setTimeout(function () { --j; console.log(j); }, 900);

                setTimeout(function () {
                    if (j == 0) {
                        $(".nav-type-one-gradient-top").addClass("nav-type-one-gradient-top-inactive");
                    } else {
                        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
                    }
                }, 900)

                setTimeout(function () {
                    if (j == 16) {
                        $(".nav-type-one-gradient-bottom").addClass("nav-type-one-gradient-bottom-inactive");
                    } else {
                        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
                    }
                }, 900)
            }
        })
    });

    $(".nav-type-one-gradient-bottom").click(function () {
        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                console.log(result);

                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[j].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    if (j < 16) {
                        $(".nav-game").text(result[j + 1].name);
                    } else {
                        $(".nav-game").text("");
                    }
                    
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 900);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    if (j < 15) {
                        $(".nav-bottom-entry").text(result[j + 2].name);
                    } else {
                        $(".nav-bottom-entry").text("");
                    }
                    
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);

                setTimeout(function () { ++j; console.log(j); }, 900);

                setTimeout(function () {
                    if (j == 0) {
                        $(".nav-type-one-gradient-top").addClass("nav-type-one-gradient-top-inactive");
                    } else {
                        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
                    }
                }, 900)

                setTimeout(function () {
                    if (j == 16) {
                        $(".nav-type-one-gradient-bottom").addClass("nav-type-one-gradient-bottom-inactive");
                    } else {
                        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
                    }
                }, 900)
            }
        })
    });
})