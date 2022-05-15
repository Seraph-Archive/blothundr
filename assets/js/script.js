//variables
var timer = document.querySelector('.timer');
var startGame = document.querySelector(".start-button");
var timeLeft;
var questionArea = document.querySelector("#questions");
var questionName = document.querySelector(".question-name")
var answerArea = document.querySelector('#answer-area')
var questionNumber = 0;
var score = 0
var endGame = document.querySelector("#end-game")
var nameInput = document.querySelector("#name")
var submitButton = document.querySelector('#submit')


//Questions Start
var questions = [
    {
        questionName: "How dangerous is Faustian burn?",
        choices: ["Extremely", "Moderately", "Not at all", "Its good actually"],
        answer: "Extremely"
    },
    {
        questionName: "What is the funniest number?",
        choices: ["420", "666", "76", "69"],
        answer: "69"

    },
    {
        questionName: "Why did we learn baseline html if we're never going to use it?",
        choices: ["The basics are important conceptually", "We shouldn't have", "Jung hates us", "GT hates us"],
        answer: "The basics are important conceptually"
    },
    {
        questionName: "Why wasn't this a coding quiz?",
        choices: ["I could not care less about finding mediocre coding questions.", "I'm cringe", "Your mother", "I can't code"],
        answer: "I can't code"
    },
    {
        questionName: "you do not recognize the bodies in the water",
        choices: ["you do not recognize the bodies in the water", "you do not recognize the bodies in the water", "you do not recognize the bodies in the water", "you do not recognize the bodies in the water"],
        answer: "you do not recognize the bodies in the water"
        }
    ];
//Questions end

function gameStart () {
    console.log("wow");
    timeLeft = 60;

    timeDown = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second left';
            timeLeft--;
        } else {
            timer.textContent = timeLeft + ' seconds left';
            clearInterval(timeDown);
        }
    
    }, 1000);

    startGame.setAttribute("class", "hidden");
    questionArea.removeAttribute("class")
    questioning();
}

function questioning () {
    var currentQuestion = questions[questionNumber];

    questionName.innerHTML = currentQuestion.questionName;

    currentQuestion.choices.forEach(choices => {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("class", ".question-button");
        questionButton.innerHTML = choices;
        answerArea.appendChild(questionButton);
        questionButton.addEventListener('click', questionAnswer);
    }
    )}

function questionAnswer(event) {
    var chosenAnswer = event.target
    var currentQuestion = questions[questionNumber];
    var answer = currentQuestion.answer
    console.log(event.target)
    if (chosenAnswer.textContent !== answer) {
        timeLeft -= 20;
        questionNumber++;
    } else {
        questionNumber++;
        score ++;
    }

    if (questionNumber === questions.length) {
        endQuiz();
    } else {
        clearButtons();
    }
}

function clearButtons() {
    questionName.innerHTML = '';
    answerArea.innerHTML = '';
    
    questioning();
}

function endQuiz() {
    questionName.innerHTML = '';
    answerArea.innerHTML = '';
    var formInput = document.querySelector('#form')
    var nameInput = document.querySelector('#name')
    formInput.removeAttribute('class', 'hidden')

    formInput.addEventListener('submit', storeName)

    clearInterval(timeDown);

    function storeName() {
        var nameSave = nameInput.value
        var storage = {
            name: nameSave,
            score: score
        }

        var allScores = localStorage.getItem("allScores");
        if (allScores === null){
            allScores = [];
        } else {
            allScores = JSON.parse(allScores)
        }

        allScores.push(storage);
        var newScores = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScores);
        }
    }

if (timeLeft >= 0) {
    endQuiz()
}

startGame.addEventListener("click", gameStart);