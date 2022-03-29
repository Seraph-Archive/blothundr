var scoreSheet = document.querySelector("#scores");
var hsName = localStorage.getItem("name", JSON.parse(nameSave))
var hsScore = localStorage.getItem("score", score)

scoreSheet.innerHTML("Name: " + hsName + " Score: " + hsScore)