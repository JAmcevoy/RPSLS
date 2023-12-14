/* jshint esversion: 6 */

const winConditionsMap = new Map([
    ["rock", new Set(["lizard", "scissors"])],
    ["paper", new Set(["rock", "spock"])],
    ["scissors", new Set(["paper", "lizard"])],
    ["lizard", new Set(["spock", "paper"])],
    ["spock", new Set(["scissors", "rock"])],
]);

const popup = document.getElementById("popup");
const draw = document.getElementById("draw");

/**
 * Get the user's input by logging the value to a hidden field. Also, Clears the
 * field of any buttons already pressed.
 */
function getPlayerChoice(value) {
    document.getElementById("hidden").value = "";
    document.getElementById("hidden").value = value;
}

/**
 * Picks a number between 1-5 then pulls a value from the array matching that number
 */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

/**
 * Gets both values when the shoot button is clicked
 */
function checkValues() {
    const playChoice = document.getElementById("hidden").value;
    const comChoice = getComputerChoice();

    if (playChoice === "") {
        confirm("Have you made a Choice?");
        throw "No User Choice has been selected";
    } else {
        draw.classList.remove("open-draw");
        changeButtonColor(comChoice);
        compare(playChoice, comChoice);
    }
}

/**
 * Compares the Player and Computer Values.
 */
function compare(playChoice, comChoice) {
    const winningMoves = winConditionsMap.get(playChoice);

    if (playChoice === comChoice) {
        drawScore();
    } else if (winningMoves && winningMoves.has(comChoice)) {
        winScore();
    } else {
        loseScore();
    }
}

/**
 * Gets the current score from the DOM and increments it
 * then when the score gets to 7 sets back to 0 and displays an alert for a win.
 * Adds catchphrase and winning message for player.
 */
function winScore() {
    // Love Maths
    let oldScore = parseInt(document.getElementById("win").innerText);
    document.getElementById("win").innerText = ++oldScore;

    if (oldScore === 7) {
        document.getElementById("catchphrase").innerText = "Congratulations!";
        document.getElementById("winner").innerText =
            "You were the first to reach 7!";

        winPopup();
        document.getElementById("win").innerText = 0;
        document.getElementById("lose").innerText = 0;
    }
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it
 * then when the score gets to 7 sets back to 0 and displays an alert for loss.
 * Adds catchphrase and losing message for player.
 */
function loseScore() {
    // Love Math
    let oldScore = parseInt(document.getElementById("lose").innerText);
    document.getElementById("lose").innerText = ++oldScore;

    if (oldScore === 7) {
        document.getElementById("catchphrase").innerText = "BAZINGA!";
        document.getElementById("winner").innerText =
            "Sheldon has won 7 games first!";

        winPopup();
        document.getElementById("win").innerText = 0;
        document.getElementById("lose").innerText = 0;
    }
}

/**
 * Displays the draw heading if choices match*/
function drawScore() {
    draw.classList.add("open-draw");
}

/**
 * Changes the computer button color based on which value the computer picks.
 */
function changeButtonColor(comChoice) {
    ["rock", "paper", "scissors", "lizard", "spock"].forEach((choice) => {
        document.getElementById(`computer-${choice}`).style.backgroundColor = "";
    });

    document.getElementById(`computer-${comChoice}`).style.backgroundColor =
        "green";
}

/** opens a popup with the result of the game.
 */
function winPopup() {
    // YouTube Tutorial
    popup.classList.add("open-popup");
}

/**
 * closes the popup when the button is clicked.
 */
function closePopup() {
    // YouTube Tutorial
    popup.classList.remove("open-popup");
}
