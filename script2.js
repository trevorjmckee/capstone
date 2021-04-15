// function wait() {
//     setTimeout(() => {console.log("1 second has passed"); }, 3000);
// }

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

function answerA() {
    if (i == 0) {
        answerOne();
        i++;
    } else if (i == 1) {
        answerTwo();
        i++;
    } else if (i == 2) {
        answerThree();
        i++;
    } else if (i == 3) {
        answerFour();
        i++;
    } else if (i == 4) {
        answerFive();
    }
}

function answerB() {
    if (i == 0) {
        answerOne();
        i++;
    } else if (i == 1) {
        answerTwo();
        i++;
    } else if (i == 2) {
        answerThree();
        i++;
    } else if (i == 3) {
        answerFour();
        i++;
    } else if (i == 4) {
        answerFive();
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

// INDEX NAVIGATION !!!
function pressNavMain() {
    elemOne = document.getElementsByClassName("nav");
    elemOne[0].classList.toggle("nav-transition");
}

function pressNavToggle() {
    // if nav is open, toggle nav type
    // if type one is on, turn off and turn on type two
    if (isNavOneOn) {
        fadeNavOne();
        setTimeout(() => switchDisplays(), 1000);
        setTimeout(() => fadeNavTwo(), 1200);
        isNavOneOn = false;
    } else {
        fadeNavTwo();
        setTimeout(() => switchDisplays(), 1300);
        setTimeout(() => fadeNavOne(), 1500);
        isNavOneOn = true;
    }
    // fadeInNavTwo();

    // if type two is one, turn off and turn type one

    // if nav is not open, open it and set to nav-type-two
}

function fadeNavOne() {
    let elemOne = document.getElementsByClassName("nav-top-entry");
    elemOne[0].classList.toggle("nav-top-entry-transition");

    let elemTwo = document.getElementsByClassName("nav-bottom-entry");
    elemTwo[0].classList.toggle("nav-bottom-entry-transition");

    let elemThree = document.getElementsByClassName("nav-game");
    elemThree[0].classList.toggle("nav-game-transition");
}

function switchDisplays() {
    let elemOne = document.getElementsByClassName("nav-type-one");
    elemOne[0].classList.toggle("display-none");

    let elemTwo = document.getElementsByClassName("nav-type-two");
    elemTwo[0].classList.toggle("display-none");
}

function fadeNavTwo() {
    let elemOne = document.getElementsByClassName("nav-type-two-line");
    elemOne[0].classList.toggle("nav-type-two-line-transition");

    let elemTwo = document.getElementsByClassName("nav-list");
    elemTwo[0].classList.toggle("nav-list-transition");
    setTimeout(function() {elemTwo[1].classList.toggle("nav-list-transition"); }, 300);

    // let elemTwo = document.getElementsByClassName("list-item");
    // for (i = 0; i < elemTwo.length; i++) {
    //     setTimeout(function() {elemTwo[i].classList.toggle("list-item-transition"); }, i*100);
    // }
}