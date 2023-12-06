const winConditionsMap = new Map([
    ['rock', new Set(['lizard', 'scissors'])],
    ['paper', new Set(['rock', 'spock'])],
    ['scissors', new Set(['paper', 'lizard'])],
    ['lizard', new Set(['spock', 'paper'])],
    ['spock', new Set(['scissors', 'rock'])],
]);

/**
 * Get the users input by logging the value to a hidden field. Also, Clears the 
 * field of any buttons already pressed. 
 */
function getPlayerChoice(value) {

    document.getElementById("hidden").value = "";
    document.getElementById("hidden").value = value;


}

/**
 * Picks a number by between 1-5 then pulls a value from the array matching that number
 */
function getComputerChoice() {

    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];

}

/**
 * Gets both values when the shoot button is clicked
 */
function checkValues() {

    let playChoice = document.getElementById("hidden").value;
    console.log(playChoice);

    let comChoice = getComputerChoice();
    changeButtonColor(comChoice);
    console.log(comChoice);

    compare(playChoice, comChoice);

}

/**
 * Compares the Player and Computer Values.
 */
function compare(playChoice, comChoice) {

    let winningMoves = winConditionsMap.get(playChoice);

    if (winningMoves && winningMoves.has(comChoice)) {
        // alert(`You Win! ${playChoice} beats ${comChoice}`);
        winScore();
    } else if (playChoice === comChoice) {

        alert("It's a Draw, Try again!");

    } else {
        // alert(`You Loose! ${comChoice} beats ${playChoice}`);
        loseScore();
    }

}

/**
 * Gets the current score from the DOM and increments it
 * then when score gets to 7 sets back to 0 and displays alert for win
 */
function winScore() {

    let oldScore = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++oldScore;

    if (oldScore === 7) {

        alert("Congratulations! You have won 7 games first!");
        document.getElementById("win").innerText = 0;
        document.getElementById("lose").innerText = 0;

    }

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it
 * then when score gets to 7 sets back to 0 and displays alert for lose
 */
function loseScore() {

    let oldScore = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++oldScore;

    if (oldScore === 7) {

        alert("BAZINGA! Sheldon has won 7 games first!");
        document.getElementById("win").innerText = 0;
        document.getElementById("lose").innerText = 0;

    }

}

function changeButtonColor(comChoice, playChoice) {

    document.getElementById("computer-rock").style.backgroundColor = "";
    document.getElementById("computer-paper").style.backgroundColor = "";
    document.getElementById("computer-scissors").style.backgroundColor = "";
    document.getElementById("computer-lizard").style.backgroundColor = "";
    document.getElementById("computer-spock").style.backgroundColor = "";


    if (comChoice === 'rock') {
        document.getElementById("computer-rock").style.backgroundColor = "green";
    } else if (comChoice === 'paper') {
        document.getElementById("computer-paper").style.backgroundColor = "green";
    } else if (comChoice === 'scissors') {
        document.getElementById("computer-scissors").style.backgroundColor = "green";
    } else if (comChoice === 'lizard') {
        document.getElementById("computer-lizard").style.backgroundColor = "green";
    } else if (comChoice === 'spock') {
        document.getElementById("computer-spock").style.backgroundColor = "green";
    }

    document.getElementById("player-rock").style.backgroundColor = "";
    document.getElementById("player-paper").style.backgroundColor = "";
    document.getElementById("player-scissors").style.backgroundColor = "";
    document.getElementById("player-lizard").style.backgroundColor = "";
    document.getElementById("player-spock").style.backgroundColor = "";


    if (playChoice === 'rock') {
        document.getElementById("player-rock").style.backgroundColor = "green";
    } else if (playChoice === 'paper') {
        document.getElementById("player-paper").style.backgroundColor = "green";
    } else if (playChoice === 'scissors') {
        document.getElementById("player-scissors").style.backgroundColor = "green";
    } else if (playChoice === 'lizard') {
        document.getElementById("player-lizard").style.backgroundColor = "green";
    } else if (playChoice === 'spock') {
        document.getElementById("player-spock").style.backgroundColor = "green";
    }
}

}
