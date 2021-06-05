let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

var score = 0;
var Index = 0;



var currentTime = document.getElementById("currentTime");
var timer = document.getElementById("startTime");
var questionsDiv = document.getElementById("questionsDiv");
var container = document.getElementById("container");


var secondsLeft = 10;
var holdInterval = 0;


var ulEl = document.createElement("ul");

timer.addEventListener("click", eventhandler);

function eventhandler(){
    if (holdInterval === 0) {
        holdInterval = setInterval(timeController, 1000);
        console.log("hold" + holdInterval);
        function timeController(){
        {
        secondsLeft = secondsLeft -1;
        currentTime.textContent = "Remaining Second is: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
                    currentTime.textContent = "Time's up!";
                    finish();
            }
        }
    }
    conductTest(Index);
}};

function conductTest(Index) {

    questionsDiv.innerHTML = "";
    ulEl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[Index].title;
        var userChoices = questions[Index].choices;
        questionsDiv.textContent = userQuestion;
    }
 
    userChoices.forEach(choices);
}

function choices(element){
    var listItem = document.createElement("li");
    listItem.textContent = element;
    questionsDiv.appendChild(ulEl);
    ulEl.appendChild(listItem);
    listItem.addEventListener("click", (result));
}



function result(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
    
        if (element.textContent == questions[Index].answer) {
            score++;
            createDiv.textContent = "You are Correct! The answer is:  " + questions[Index].answer;

        } else {
            createDiv.textContent = "You are Wrong! The correct answer is:  " + questions[Index].answer;
        }

    }
  
    Index = Index + 1;

    if (Index >= questions.length) {
        finish();
    
    } else {
        conductTest(Index);
    }
    questionsDiv.appendChild(createDiv);

};

function finish(){
    var endDiv = document.createElement("div");
    endDiv.setAttribute("id", "EndDiv");

    currentTime.textContent = "";    
    questionsDiv.textContent = "";
    endDiv.textContent = "Your score is " + score + "/" + questions.length + " Correct!";
    questionsDiv.appendChild(endDiv);
};
