// create a questions array to hold your questions

// Every time you click on an answer button, the textContent of the buttons and the question title will change
function renderQuestion() {
    var q = questions[runningQuestion];
  
    question.innerHTML = q.question;
    qImg.src = q.imgSrc;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
  }

// To do the timer, look at activity 8 from week 4
var timeEl = document.querySelector(".time");


var secondsLeft = 10;

function setTime() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till to answer.";

    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    };
1000);
}

function sendMessage() {
timeEl.textContent = " ";

mainEl.appendChild(imgEl);

}

setTime();


// To do the local storage, look at activities 25 - 28 from week 4
var highScoreInput = document.querySelector("#highScore-text");
var highScoreForm = document.querySelector("#highScore-form");
var highScoreList = document.querySelector("#highScore-list");
var highScoreCountSpan = document.querySelector("#highScore-count");

var highScore = [];

init();

function renderhighScore() {
  highScoreList.innerHTML = "";
  highScoreCountSpan.textContent = highScore.length;

  for (var i = 0; i < highScore.length; i++) {
    var highScore = highScore[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    highScoreList.appendChild(li);
  }
}

function init() {
  var storedhighScore = JSON.parse(localStorage.getItem("highscores"));

  if (storedhighScore !== null) {
    highScore = storedhighScore;
  }

  renderhighScore();
}

function storehighScore() {
  localStorage.setItem("highscore", JSON.stringify(highscore));
}

highScoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var highScoreText = highScoreInput.value.trim();

  if (highScoreText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  highScore.push(highScoreText);
  highScoreInput.value = "";

  storehighScore();
  renderhighScore();
});

highScoreList.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    highScore.splice(index, 1);

    storehighScore();
    renderhighScore();
  }
});
