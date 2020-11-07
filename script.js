//listing variables//
var multiquest = document.querySelector("#card-text");
var next = document.querySelector("#nextBtn");
var butA = document.querySelector("#button-A");
var butB = document.querySelector("#button-B");
var butC = document.querySelector("#button-C");
var options = document.querySelector(".buttons1");
var scoreCounter = 0;
var startBtn = document.querySelector("#button-start");
var countDownTime = document.querySelector(".time");

//conditional statements//

//function start quiz
function startQuiz() {
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
    // start the timer
    function timeFunc() {
        setTimeout (myTimeout, 60000)
    }
    function myTimeout() {
      countDownTime = (3000)
    }

    // display first question, with possible choices
    console.log("questions", questions)
    console.log("questionText", questions[0].questionText)
    multiquest.textContent = questions[0].questionText
    butA.textContent = questions[0].choices[0];
    butB.textContent = questions[0].choices[1];
    butC.textContent = questions[0].choices[2];
    multiquest.textContent = questions[1].questionText
    butA.textContent = questions[1].choices[0];
    butB.textContent = questions[1].choices[1];
    butC.textContent = questions[1].choices[2];
    multiquest.textContent = questions[2].questionText
    butA.textContent = questions[2].choices[0];
    butB.textContent = questions[2].choices[1];
    butC.textContent = questions[2].choices[2];
    multiquest.textContent = questions[3].questionText
    butA.textContent = questions[3].choices[0];
    butB.textContent = questions[3].choices[1];
    butC.textContent = questions[3].choices[2];
    multiquest.textContent = questions[4].questionText
    butA.textContent = questions[4].choices[0];
    butB.textContent = questions[4].choices[1];
    butC.textContent = questions[4].choices[2];
    
    // and when you click on a choice
    for (var i = 0; i < questions.length; i++) {
    }

    // check if choice is correct answer or not, add of subtract from score
    butA.onclick = console.log(butA.textContent);
    butB.onclick = console.log(butB.textContent);
    butC.onclick = console.log(butC.textContent);
    // then go to next question, When out of questions or out of time, quiz stops
    // question[i +1]
}

//for loop
//for (var i = 0; i < questions.length; i++) {
    //var response = questions[i].answer
    //    if (response === questions[i].answer) {
    //    scoreCounter++
    //    alert("great answer!")
    //    }
    //    else alert("wrong answer!")
     //   }


startBtn.onclick = startQuiz()
startBtn.onclick = timeFunc()
options.onclick = localStorage.choices
next.onclick = [questions]

// next.addEventListener("click", function(event) {
    

