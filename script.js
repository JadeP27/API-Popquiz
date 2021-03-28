//listing variables//
var multiquest = document.querySelector("#card-text");
var questionsDiv = document.querySelector(".questionsDiv");
var next = document.querySelector("#nextBtn");
var butA = document.querySelector("#button-A");
var butB = document.querySelector("#button-B");
var butC = document.querySelector("#button-C");
var options = document.querySelector(".buttons1");
var scoreCounter = 0;
var timeEl = document.querySelector(".time");
// var secEl = document.getElementById("seconds");

var questions = [
    {
        questionText : "1,2,3,4 are examples of which datatype?",
        choices : ["A:  String", "B: Boolean", "C: Number"],
        answer: "C: Number"
    },
    {
        questionText : "Methods are functions tied to an?",
        choices : ["A: Index", "B: Object", "C: Alert"],
        answer: "B: Object"
    },
    {
        questionText : "What is the first index value of an array?",
        choices : ["A: Index 0", "B: Index 2", "C: Index 3"],
        answer: "A: Index 0"
    },
    {
        questionText : "What is the DOM?",
        choices : ["A: Dominant Object Modal", "B: Document Object Model", "C: Document Objective Modualarity"],
        answer: "B: Document Object Model"
    },
    {
        questionText : "Which equal sign's only use is to assign value?",
        choices : ["A: == ", "B: === ", "C: = "],
        answer: "C: = "
    }
]

var theNumber = 0;

next.addEventListener("click", function () {
    for (i = 0; i < questions.length; i++) {
    populateQuestion(i+1);
    }
});

function populateQuestion(theNumber) {
        multiquest.textContent = questions[theNumber].questionText
        butA.textContent = questions[theNumber].choices[0];
        butB.textContent = questions[theNumber].choices[1];
        butC.textContent = questions[theNumber].choices[2];  
}
var timeEl = document.querySelector(".time");

var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "seconds until times up";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTime();

function start(){
    populateQuestion(theNumber);
  
}

start();


