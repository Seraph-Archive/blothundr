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
        questionName: "Do i love my girlfriend?",
        answerChoices: [
            { text: "with everything i have", correct: true },
            { text :  "yeah", correct: false }, 
            { text: "nah", correct: false},
            { text: "girlfriend?", correct: false}]
    },
    {
        questionName: "Greatest gamer in the world",
        answerChoices: [
            { text: "big boss", correct: true },
            { text :  "what?", correct: false }, 
            { text: "nah", correct: false},
            { text: "huh?", correct: false}]

    },
    {
        questionName: "Do i love my girlfriend?",
        answerChoices: [
            { text: "with everything i have", correct: true },
            { text :  "yeah", correct: false }, 
            { text: "nah", correct: false},
            { text: "girlfriend?", correct: false}]
    },
    {
        questionName: "Do i love my girlfriend?",
        answerChoices: [
            { text: "with everything i have", correct: true },
            { text :  "yeah", correct: false }, 
            { text: "nah", correct: false},
            { text: "girlfriend?", correct: false}]
    },
    {
        questionName: "you do not recognize the bodies in the water",
        answerChoices: [
            { text: "you do not recognize the bodies in the water", correct: true },
            { text :  "you do not recognize the bodies in the water", correct: true }, 
            { text: "you do not recognize the bodies in the water", correct: true},
            { text: "you do not recognize the bodies in the water", correct: true}]
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

    currentQuestion.answerChoices.forEach(answerChoices => {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("class", ".question-button");
        questionButton.innerHTML = answerChoices.text;
        answerArea.appendChild(questionButton);
        questionButton.addEventListener('click', questionAnswer);
    }
    )}

function questionAnswer(event) {
    var chosenAnswer = event.target
    var currentQuestion = questions[questionNumber];
    var answer = currentQuestion.answerChoices.correct
    console.log(event.target)
    if (chosenAnswer === answer) {
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
    formInput.removeAttribute('class', 'hidden')

    var nameSave = formInput.value
    formInput.addEventListener('submit', storeName)




    clearInterval(timeDown);

    localStorage.setItem("score", score);

    function storeName() {
        localStorage.setItem("name", JSON.stringify(nameSave))
        console.log(nameSave)
    }
    console.log("heck")
    console.log(nameSave)
}

if (timeLeft >= 0) {
    endQuiz()
}


startGame.addEventListener("click", gameStart);