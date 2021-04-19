$(document).ready(function () {
    // $(".part-two-container").click(function() {
    //     $(this).fadeOut();
    // });

    $("button").click(function () {
        $(".game-section-container").load("game-content.txt #hollow-knight");
    });

    $.ajax({
        type: "GET",
        url: "game-list-entries.json",
        success: function (result) {
            // load navigation entries
            $(".nav-game").text(result[0].name);
            $(".nav-top-entry").text("");
            $(".nav-bottom-entry").text(result[1].name);

            // deactivate top gradient
            $(".nav-type-one-gradient-top").addClass("nav-type-one-gradient-top-inactive");

            // load list entries
            for (var p = 0; p < 17; p++) {
                $("#li-" + p).text(result[p].name);
            }
        }
    });

    let j = 0;

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

                // set game content
                $(".game-section-container").load("game-content.txt #" + (j - 1));

                // animate into content
                setTimeout(function () { pressNavMain(); }, 200);
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

                // set game content
                $(".game-section-container").load("game-content.txt #" + (j + 1));

                // animate into content
                setTimeout(function () { pressNavMain(); }, 200);
            }
        })
    });

    $("#li-0").click(function () {
        $(".game-section-container").load("game-content.txt #0");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text("");
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[0].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[1].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").addClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 0;
    });

    $("#li-1").click(function () {
        $(".game-section-container").load("game-content.txt #1");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[0].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[1].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[2].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 1;
    });

    $("#li-2").click(function () {
        $(".game-section-container").load("game-content.txt #2");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[1].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[2].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[3].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 2;
    });

    $("#li-3").click(function () {
        $(".game-section-container").load("game-content.txt #3");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[2].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[3].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[4].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 3;
    });

    $("#li-4").click(function () {
        $(".game-section-container").load("game-content.txt #4");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[3].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[4].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[5].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 4;
    });

    $("#li-5").click(function () {
        $(".game-section-container").load("game-content.txt #5");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[4].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[5].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[6].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 5;
    });

    $("#li-6").click(function () {
        $(".game-section-container").load("game-content.txt #6");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[5].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[6].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[7].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 6;
    });

    $("#li-7").click(function () {
        $(".game-section-container").load("game-content.txt #7");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[6].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[7].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[8].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 7;
    });

    $("#li-8").click(function () {
        $(".game-section-container").load("game-content.txt #8");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[7].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[8].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[9].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 8;
    });

    $("#li-9").click(function () {
        $(".game-section-container").load("game-content.txt #9");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[8].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[9].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[10].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 9;
    });

    $("#li-10").click(function () {
        $(".game-section-container").load("game-content.txt #10");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[9].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[10].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[11].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 10;
    });

    $("#li-11").click(function () {
        $(".game-section-container").load("game-content.txt #11");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[10].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[11].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[12].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 11;
    });

    $("#li-12").click(function () {
        $(".game-section-container").load("game-content.txt #12");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[11].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[12].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[13].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 12;
    });

    $("#li-13").click(function () {
        $(".game-section-container").load("game-content.txt #13");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[12].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[13].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[14].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 13;
    });

    $("#li-14").click(function () {
        $(".game-section-container").load("game-content.txt #14");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[13].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[14].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[15].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 14;
    });

    $("#li-15").click(function () {
        $(".game-section-container").load("game-content.txt #15");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[14].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[15].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text(result[16].name);
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").removeClass("nav-type-one-gradient-bottom-inactive");
        j = 15;
    });

    $("#li-16").click(function () {
        $(".game-section-container").load("game-content.txt #16");
        setTimeout(function () { pressNavMain(); }, 200);

        $.ajax({
            type: "GET",
            url: "game-list-entries.json",
            success: function (result) {
                $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                setTimeout(function () {
                    $(".nav-top-entry").text(result[15].name);
                    $(".nav-top-entry").toggleClass("nav-top-entry-transition");
                }, 600);

                $(".nav-game").toggleClass("nav-game-transition");
                setTimeout(function () {
                    $(".nav-game").text(result[16].name);
                    $(".nav-game").toggleClass("nav-game-transition");
                }, 600);

                $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                setTimeout(function () {
                    $(".nav-bottom-entry").text("");
                    $(".nav-bottom-entry").toggleClass("nav-bottom-entry-transition");
                }, 600);
            }
        });

        $(".nav-type-one-gradient-top").removeClass("nav-type-one-gradient-top-inactive");
        $(".nav-type-one-gradient-bottom").addClass("nav-type-one-gradient-bottom-inactive");
        j = 16;
    });
})