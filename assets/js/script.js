function getPlayerChoice(){
    
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
        return 'lizzard';
    } else if (comChoice == 4) {
        return 'spock'
    }
}



let rock = document.getElementById("player-rock").textContent;
let paper = document.getElementById("player-paper").textContent;
let scissors = document.getElementById("player-scissors").textContent;
let lizzard = document.getElementById("player-lizzard").textContent;
let spock = document.getElementById("player-spock").textContent;





switch (true) {
    case playerChoice === computerChoice:
        alert("It's a Draw, Try again!");
        break;
    case playerChoice === scissors && computerChoice === paper:
        alerts("Scissors cuts Paper");
        break;
    case playerChoice === paper && computerChoice === rock:
        alerts("Paper covers Rock");
        break;
    case playerChoice === rock && computerChoice === lizzard:
        alerts("Rock crushes Lizard");
        break;
    case playerChoice === lizzard && computerChoice === spock:
        alerts("Lizard poisons Spock")
        break;
    case playerChoice === spock && computerChoice === scissors:
        alerts("Spock smashes Scissors");
        break;
    case playerChoice === scissors && computerChoice === lizzard:
        alerts("Scissors decapitates Lizard");
        break;
    case playerChoice === lizzard && computerChoice === paper:
        alerts("Lizard eats Paper");
        break;
    case playerChoice === paper && computerChoice === spock:
        alerts("Paper disproves Spock");
        break;
    case playerChoice === spock && computerChoice === rock:
        alerts("Spock vaporizes Rock");
        break;
    case playerChoice === rock && computerChoice === scissors:
        alerts("Rock crushes Scissors");
        break;
}