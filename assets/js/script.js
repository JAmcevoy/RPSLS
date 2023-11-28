
/**
 * Get the users input by logging the value to a hidden field. Also, Clears the 
 * field of any buttons already pressed. 
 */
function getPlayerChoice(value) {

    if (value === "rock") {

        document.getElementById("hidden").value = "";
        let rock = document.getElementById("player-rock");
        document.getElementById("hidden").value += "rock";

    } else if (value === "paper") {

        document.getElementById("hidden").value = "";
        let paper = document.getElementById("player-paper");
        document.getElementById("hidden").value += "paper";

    } else if (value === "scissors") {

        document.getElementById("hidden").value = "";
        let scissors = document.getElementById("player-scissors");
        document.getElementById("hidden").value += "scissors";

    } else if (value === "lizard") {

        document.getElementById("hidden").value = "";
        let lizard = document.getElementById("player-lizard");
        document.getElementById("hidden").value += "lizard";

    } else if (value === "spock") {

        document.getElementById("hidden").value = "";
        let spock = document.getElementById("player-spock");
        document.getElementById("hidden").value += "spock";

    } else {
        alert("No selection has been made!");
    }

}



/**
 * Picks a number by between 1-5 then pulls a value from the array matching that number
 */
function getComputerChoice() {
    let comChoice = Math.floor(Math.random() * 4);
    if (comChoice == 0) {
        return 'rock';
    } else if (comChoice == 1) {
        return 'paper';
    } else if (comChoice == 2) {
        return 'scissors';
    } else if (comChoice == 3) {
        return 'lizard';
    } else if (comChoice == 4) {
        return 'spock';
    }
}






switch (true) {
    case getPlayerChoice === getComputerChoice:
        alert("It's a Draw, Try again!");
        break;
    case getPlayerChoice === scissors && getComputerChoice === paper:
        alerts("Scissors cuts Paper");
        break;
    case getPlayerChoice === paper && getComputerChoice === rock:
        alerts("Paper covers Rock");
        break;
    case getPlayerChoice === rock && getComputerChoice === lizard:
        alerts("Rock crushes Lizard");
        break;
    case getPlayerChoice === lizard && getComputerChoice === spock:
        alerts("Lizard poisons Spock");
        break;
    case getPlayerChoice === spock && getComputerChoice === scissors:
        alerts("Spock smashes Scissors");
        break;
    case getPlayerChoice === scissors && getComputerChoice === lizard:
        alerts("Scissors decapitates Lizard");
        break;
    case getPlayerChoice === lizard && getComputerChoice === paper:
        alerts("Lizard eats Paper");
        break;
    case getPlayerChoice === paper && getComputerChoice === spock:
        alerts("Paper disproves Spock");
        break;
    case getPlayerChoice === spock && getComputerChoice === rock:
        alerts("Spock vaporizes Rock");
        break;
    case getPlayerChoice === rock && getComputerChoice === scissors:
        alerts("Rock crushes Scissors");
        break;
}