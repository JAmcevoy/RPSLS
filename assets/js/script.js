function runGame();



function playerChoice();



function computerChoice();



function playerScore() {

    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("win").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}



function computerScore() {

    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("lose").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}