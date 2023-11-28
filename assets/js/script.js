
function checkRules() {

    let comChoice = getComputerChoice();
    console.log(getComputerChoice());

    let playChoice = document.getElementById("hidden").value;
    console.log(playChoice);

    switch (true) {
        case playChoice === comChoice:
            alert("It's a Draw, Try again!");
            break;
        case playChoice === 'scissors' && comChoice === 'paper':
            alert("Scissors cuts Paper");
            break;
        case playChoice === 'paper' && comChoice === 'rock':
            alert("Paper covers Rock");
            break;
        case playChoice === 'rock' && comChoice === 'lizard':
            alert("Rock crushes Lizard");
            break;
        case playChoice === 'lizard' && comChoice === 'spock':
            alert("Lizard poisons Spock");
            break;
        case playChoice === 'spock' && comChoice === 'scissors':
            alert("Spock smashes Scissors");
            break;
        case playChoice === 'scissors' && comChoice === 'lizard':
            alert("Scissors decapitates Lizard");
            break;
        case playChoice === 'lizard' && comChoice === 'paper':
            alert("Lizard eats Paper");
            break;
        case playChoice === 'paper' && comChoice === 'spock':
            alert("Paper disproves Spock");
            break;
        case playChoice === 'spock' && comChoice === 'rock':
            alert("Spock vaporizes Rock");
            break;
        case playChoice === 'rock' && comChoice === 'scissors':
            alert("Rock crushes Scissors");
            break;
        case comChoice === 'scissors' && playChoice === 'paper':
            alert("Scissors cuts Paper");
            break;
        case comChoice === 'paper' && playChoice === 'rock':
            alert("Paper covers Rock");
            break;
        case comChoice === 'rock' && playChoice === 'lizard':
            alert("Rock crushes Lizard");
            break;
        case comChoice === 'lizard' && playChoice === 'spock':
            alert("Lizard poisons Spock");
            break;
        case comChoice === 'spock' && playChoice === 'scissors':
            alert("Spock smashes Scissors");
            break;
        case comChoice === 'scissors' && playChoice === 'lizard':
            alert("Scissors decapitates Lizard");
            break;
        case comChoice === 'lizard' && playChoice === 'paper':
            alert("Lizard eats Paper");
            break;
        case comChoice === 'paper' && playChoice === 'spock':
            alert("Paper disproves Spock");
            break;
        case comChoice === 'spock' && playChoice === 'rock':
            alert("Spock vaporizes Rock");
            break;
        case comChoice === 'rock' && playChoice === 'scissors':
            alert("Rock crushes Scissors");
            break;
        default:
            break;
    }
}

/**
 * Get the users input by logging the value to a hidden field. Also, Clears the 
 * field of any buttons already pressed. 
 */
function getPlayerChoice(value) {

    document.getElementById("hidden").value = "";

    switch (value) {
        case "rock":
            document.getElementById("hidden").value = "rock";
            break;
        case "paper":
            document.getElementById("hidden").value = "paper";
            break;
        case "scissors":
            document.getElementById("hidden").value = "scissors";
            break;
        case "lizard":
            document.getElementById("hidden").value = "lizard";
            break;
        case "spock":
            document.getElementById("hidden").value = "spock";
            break;
        default:
            alert("No selection has been made!");
            break;
    }
}

/**
 * Picks a number by between 1-5 then pulls a value from the array matching that number
 */
function getComputerChoice() {

    let comChoice = Math.floor(Math.random() * 5);
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
