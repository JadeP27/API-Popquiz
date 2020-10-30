//listing variables//
var multiquest = document.querySelector("#card-text");
var next = document.querySelector("#nextBtn");
var butA = document.querySelector("#buttonA");
var butB = document.querySelector("#buttonB");
var butC = document.querySelector("#buttonC");
var answers = 
var correctCounter = 0
var incorrectCounter = 0

//prompts//
multiquest = questions
var questions = [
    prompt("1,2,3,4 are examples of which datatype? A:  String B: Boolean C: Number"),
    prompt("Methods are functions tied to an?  A: Index B: Object C: Alert"),
    prompt("What is the first index value of an array?  A: Index 0 B: Index 2 C: Index 3"),
    prompt("What is a DOM?  A: Dominant Object Modal B: Document Object Model C: Document Objective Modualarity"),
    prompt("Which equal sign's only use is to assign value?  A: ==  B: ===  C: =")
];

//conditional statements//


//for loop//
for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt)
    if (response === questions[i].answers) {
        correctCounter++
        alert("great answer!")
    }
    else {incorrectCounter--
        alert("wrong answer!")
    }
}


next.addEventListener("click", function(event) {
    
  }
});
