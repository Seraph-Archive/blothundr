var scoreSheet = document.querySelector("#scores");

var allScores = localStorage.getItem("allScores");
allScores= JSON.parse(allScores);

if (allScores !== null) {
    for (i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.innerHTML = allScores[i].name + " " + allScores[i].score;
        scoreSheet.appendChild(createLi);
    }
};