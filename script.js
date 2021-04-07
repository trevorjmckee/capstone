var div = document.getElementsByClassName("question-slide");

window.addEventListener(
    "mousemove", function (e) {
        x = e.clientX;
        width = document.body.offsetWidth;

        position = (x / width) * 100;

        // console.log(x);
        // console.log(width);
        // console.log(position);

        div[0].style.backgroundPosition = position + "% 50%";
        div[1].style.backgroundPosition = position + "% 50%";
        div[2].style.backgroundPosition = position + "% 50%";
        div[3].style.backgroundPosition = position + "% 50%";
        div[4].style.backgroundPosition = position + "% 50%";
        div[5].style.backgroundPosition = position + "% 50%";
        div[6].style.backgroundPosition = position + "% 50%";
    }
);

var qsOne = document.getElementsByClassName("question-slide-one");

var qsTwoA = document.getElementsByClassName("question-slide-two-a");
var qsTwoB = document.getElementsByClassName("question-slide-two-b");

var qsThreeA = document.getElementsByClassName("question-slide-three-a");
var qsThreeB = document.getElementsByClassName("question-slide-three-b");

var qsFourA = document.getElementsByClassName("question-slide-four-a");
var qsFourB = document.getElementsByClassName("question-slide-four-b");

// SLIDE ONE
function q1aa() {
    qsOne[0].classList.toggle("translate-right-100vw");
    qsTwoA[0].classList.toggle("translate-left-100vw");
}

function q1ab() {
    qsOne[0].classList.toggle("translate-left-100vw");
    qsTwoB[0].classList.toggle("translate-right-100vw");
}

// SLIDE TWO
function q2s1aa() {
    qsTwoA[0].classList.toggle("translate-right-100vw");
    qsThreeA[0].classList.toggle("translate-left-100vw");
}

function q2s1ab() {
    qsTwoA[0].classList.toggle("translate-left-100vw");
    qsThreeB[0].classList.toggle("translate-right-100vw");
}

function q2s2aa() {
    qsTwoB[0].classList.toggle("translate-right-100vw");
    qsThreeA[0].classList.toggle("translate-left-100vw");
}

function q2s2ab() {
    qsTwoB[0].classList.toggle("translate-left-100vw");
    qsThreeB[0].classList.toggle("translate-right-100vw");
}

// SLIDE THREE
function q3s1aa() {
    qsThreeA[0].classList.toggle("translate-right-100vw");
    qsFourA[0].classList.toggle("translate-left-100vw");
}

function q3s1ab() {
    qsThreeA[0].classList.toggle("translate-left-100vw");
    qsFourB[0].classList.toggle("translate-right-100vw");
}

function q3s2aa() {
    qsThreeB[0].classList.toggle("translate-right-100vw");
    qsFourA[0].classList.toggle("translate-left-100vw");
}

function q3s2ab() {
    qsThreeB[0].classList.toggle("translate-left-100vw");
    qsFourB[0].classList.toggle("translate-right-100vw");
}