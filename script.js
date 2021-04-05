var div = document.getElementsByClassName("question-slide");

window.addEventListener(
    "mousemove", function (e) {
        x = e.clientX;
        width = document.body.offsetWidth;

        position = (x / width) * 100;

        console.log(x);
        console.log(width);
        console.log(position);

        div[0].style.backgroundPosition = position + "% 50%";
    }
);

// var q1ab = document.getElementById("question-one-answer-b")[0];

// q1ab.addEventListener(
//     "click", function (e) {
//         document.getElementsByClassName("question-slide-one")[0].classList.remove("left-0");
//         document.getElementsByClassName("question-slide-one")[0].classList.add("right-100vw");

//         document.getElementsByClassName("question-slide-two")[0].classList.remove("left-100vw");
//         document.getElementsByClassName("question-slide-two")[0].classList.add("left-0");
//     }
// );