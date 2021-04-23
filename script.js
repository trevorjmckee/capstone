function transitionStarter() {
    // text
    let elemOne = document.getElementsByClassName("question");
    elemOne[0].classList.toggle("question-show");

    let elemTwo = document.getElementsByClassName("question-one-answer-a");
    elemTwo[0].classList.toggle("answer-a-show");

    let elemThree = document.getElementsByClassName("question-one-answer-b");
    elemThree[0].classList.toggle("answer-b-show");

    // gradients
    let elemFour = document.getElementsByClassName("gradient-one");
    elemFour[0].classList.toggle("gradient-one-a");

    let elemFive = document.getElementsByClassName("gradient-two");
    elemFive[0].classList.toggle("gradient-two-a");

    // vertical line
    setTimeout(() => makeLineActive(), 500)
}

function makeLineActive() {
    let elemSix = document.getElementsByClassName("vertical-line");
    elemSix[0].classList.toggle("vertical-line-active");
}

var i = 0;
var code = "";

function answerA() {
    if (i == 0) {
        answerOne();
        i++;
    } else if (i == 1) {
        answerTwo();
        i++;
        code += "1";
    } else if (i == 2) {
        answerThree();
        i++;
        code += "1";
    } else if (i == 3) {
        answerFour();
        i++;
        code += "1";
    } else if (i == 4) {
        code += "1";
        navigateToIndex();
    }
}

function answerB() {
    if (i == 0) {
        window.location.href = "generic.html";
    } else if (i == 1) {
        answerTwo();
        i++;
        code += "2";
    } else if (i == 2) {
        answerThree();
        i++;
        code += "2";
    } else if (i == 3) {
        answerFour();
        i++;
        code += "2";
    } else if (i == 4) {
        code += "2";
        navigateToIndex();
    }
}

function navigateToIndex() {
    if (code == "1111") {
        window.location.href = "story-fight-playful-classic.html";
    } else if (code == "1112") {
        window.location.href = "story-fight-playful-modern.html";
    } else if (code == "1121") {
        window.location.href = "story-fight-immersive-classic.html";
    } else if (code == "1211") {
        window.location.href = "story-explore-playful-classic.html";
    } else if (code == "2111") {
        window.location.href = "challenge-fight-playful-classic.html";
    } else if (code == "1122") {
        window.location.href = "story-fight-immersive-modern.html";
    } else if (code == "1221") {
        window.location.href = "story-explore-immersive-classic.html";
    } else if (code == "2211") {
        window.location.href = "challenge-explore-playful-classic.html";
    } else if (code == "2112") {
        window.location.href = "challenge-fight-playful-modern.html";
    } else if (code == "1212") {
        window.location.href = "story-explore-playful-modern.html";
    } else if (code == "2121") {
        window.location.href = "challenge-fight-immersive-classic.html";
    } else if (code == "1222") {
        window.location.href = "story-explore-immersive-modern.html";
    } else if (code == "2122") {
        window.location.href = "challenge-fight-immersive-modern.html";
    } else if (code == "2212") {
        window.location.href = "challenge-explore-playful-modern.html";
    } else if (code == "2221") {
        window.location.href = "challenge-explore-immersive-classic.html";
    } else {
        window.location.href = "challenge-explore-immersive-modern.html";
    }
}

// answer one
function answerOne() {
    // hide elements
    let elemOne = document.getElementsByClassName("question-one-answer-a");
    elemOne[0].classList.toggle("answer-a-show");

    let elemTwo = document.getElementsByClassName("question-one-answer-b");
    elemTwo[0].classList.toggle("answer-b-show");

    let elemThree = document.getElementsByClassName("question");
    elemThree[0].classList.toggle("question-hide");

    // show elements
    setTimeout(() => answerOneShow(), 1000)

    // gradients
    let elemSeven = document.getElementsByClassName("gradient-one");
    elemSeven[0].classList.toggle("gradient-one-a");
    elemSeven[0].classList.toggle("gradient-one-b");

    let elemEight = document.getElementsByClassName("gradient-two");
    elemEight[0].classList.toggle("gradient-two-a");
    elemEight[0].classList.toggle("gradient-two-b");

    // vertical line
    let elemNine = document.getElementsByClassName("vertical-line");
    elemNine[0].classList.toggle("vertical-line-active");
}

function answerOneShow() {
    let elemFour = document.getElementsByClassName("question-two-answer-a");
    elemFour[0].classList.toggle("answer-a-show");

    let elemFive = document.getElementsByClassName("question-two-answer-b");
    elemFive[0].classList.toggle("answer-b-show");

    let elemSix = document.getElementsByClassName("question");
    elemSix[1].classList.toggle("question-show");
}

// answer two
function answerTwo() {
    // hide elements
    let elemOne = document.getElementsByClassName("question-two-answer-a");
    elemOne[0].classList.toggle("answer-a-show");

    let elemTwo = document.getElementsByClassName("question-two-answer-b");
    elemTwo[0].classList.toggle("answer-b-show");

    let elemThree = document.getElementsByClassName("question");
    elemThree[1].classList.toggle("question-hide");

    // show elements
    setTimeout(() => answerTwoShow(), 1000)

    // gradients
    let elemSeven = document.getElementsByClassName("gradient-one");
    elemSeven[0].classList.toggle("gradient-one-b");
    elemSeven[0].classList.toggle("gradient-one-c");

    let elemEight = document.getElementsByClassName("gradient-two");
    elemEight[0].classList.toggle("gradient-two-b");
    elemEight[0].classList.toggle("gradient-two-c");
}

function answerTwoShow() {
    let elemFour = document.getElementsByClassName("question-three-answer-a");
    elemFour[0].classList.toggle("answer-a-show");

    let elemFive = document.getElementsByClassName("question-three-answer-b");
    elemFive[0].classList.toggle("answer-b-show");

    let elemSix = document.getElementsByClassName("question");
    elemSix[2].classList.toggle("question-show");
}

// answer three
function answerThree() {
    // hide elements
    let elemOne = document.getElementsByClassName("question-three-answer-a");
    elemOne[0].classList.toggle("answer-a-show");

    let elemTwo = document.getElementsByClassName("question-three-answer-b");
    elemTwo[0].classList.toggle("answer-b-show");

    let elemThree = document.getElementsByClassName("question");
    elemThree[2].classList.toggle("question-hide");

    // show elements
    setTimeout(() => answerThreeShow(), 1000)

    // gradients
    let elemSeven = document.getElementsByClassName("gradient-one");
    elemSeven[0].classList.toggle("gradient-one-c");
    elemSeven[0].classList.toggle("gradient-one-d");

    let elemEight = document.getElementsByClassName("gradient-two");
    elemEight[0].classList.toggle("gradient-two-c");
    elemEight[0].classList.toggle("gradient-two-d");
}

function answerThreeShow() {
    let elemFour = document.getElementsByClassName("question-four-answer-a");
    elemFour[0].classList.toggle("answer-a-show");

    let elemFive = document.getElementsByClassName("question-four-answer-b");
    elemFive[0].classList.toggle("answer-b-show");

    let elemSix = document.getElementsByClassName("question");
    elemSix[3].classList.toggle("question-show");
}

// answer four
function answerFour() {
    // hide elements
    let elemOne = document.getElementsByClassName("question-four-answer-a");
    elemOne[0].classList.toggle("answer-a-show");

    let elemTwo = document.getElementsByClassName("question-four-answer-b");
    elemTwo[0].classList.toggle("answer-b-show");

    let elemThree = document.getElementsByClassName("question");
    elemThree[3].classList.toggle("question-hide");

    // show elements
    setTimeout(() => answerFourShow(), 1000)

    // gradients
    let elemSeven = document.getElementsByClassName("gradient-one");
    elemSeven[0].classList.toggle("gradient-one-d");
    elemSeven[0].classList.toggle("gradient-one-e");

    let elemEight = document.getElementsByClassName("gradient-two");
    elemEight[0].classList.toggle("gradient-two-d");
    elemEight[0].classList.toggle("gradient-two-e");
}

function answerFourShow() {
    let elemFour = document.getElementsByClassName("question-five-answer-a");
    elemFour[0].classList.toggle("answer-a-show");

    let elemFive = document.getElementsByClassName("question-five-answer-b");
    elemFive[0].classList.toggle("answer-b-show");

    let elemSix = document.getElementsByClassName("question");
    elemSix[4].classList.toggle("question-show");
}

let isNavOneOn = true;
let isAboutOpen = false;
let isNavOpen = true;

// INDEX NAVIGATION !!!
function openAboutSection() {
    elemOne = document.getElementsByClassName("about-container");

    if (isAboutOpen) {
        elemOne[0].classList.toggle("about-container-show");
        setTimeout(() => hideAbout(), 300);
        isAboutOpen = false;
    } else {
        hideAbout();
        isAboutOpen = true;
        setTimeout(() => showAboutContainer(), 100);
    }
}

function hideAbout() {
    elemOne = document.getElementsByClassName("about-container");
    elemOne[0].classList.toggle("about-container-display-none");
}

function showAboutContainer() {
    elemOne = document.getElementsByClassName("about-container");
    elemOne[0].classList.toggle("about-container-show");
}

function pressNavMain() {
    elemOne = document.getElementsByClassName("nav");
    elemOne[0].classList.toggle("nav-transition");

    elemTwo = document.getElementsByClassName("game-container");
    elemTwo[0].classList.toggle("game-container-transition");
}