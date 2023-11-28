function runGame();



function chackPlayerChoice();



function checkomputerChoice();



function addPlayerScore() {

    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("win").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}



function addComputerScore() {

    // Gets the current tally of incorrect answers from the DOM and increments it

    let oldScore = parseInt(document.getElementById("lose").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}