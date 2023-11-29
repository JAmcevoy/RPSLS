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

    const randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else if (randomNumber == 2) {
        return 'scissors';
    } else if (randomNumber == 3) {
        return 'lizard';
    } else if (randomNumber == 4) {
        return 'spock';
    }
}

/**
 * Checks switch for matching values
 * displays an alerts with win or loose and the rules as to why. */
function checkRules() {

    let playChoice = document.getElementById("hidden").value;
    console.log(playChoice);

    let comChoice = getComputerChoice();
    console.log(comChoice);

    switch (true) {
        case playChoice === comChoice:
            alert("It's a Draw, Try again!");
            break;
        case playChoice === 'scissors' && comChoice === 'paper':
            alert("You Win! Scissors cuts Paper");
            break;
        case playChoice === 'paper' && comChoice === 'rock':
            alert("You Win! Paper covers Rock");
            break;
        case playChoice === 'rock' && comChoice === 'lizard':
            alert("You Win! Rock crushes Lizard");
            break;
        case playChoice === 'lizard' && comChoice === 'spock':
            alert("You Win! Lizard poisons Spock");
            break;
        case playChoice === 'spock' && comChoice === 'scissors':
            alert("You Win! Spock smashes Scissors");
            break;
        case playChoice === 'scissors' && comChoice === 'lizard':
            alert("You Win! Scissors decapitates Lizard");
            break;
        case playChoice === 'lizard' && comChoice === 'paper':
            alert("You Win! Lizard eats Paper");
            break;
        case playChoice === 'paper' && comChoice === 'spock':
            alert("You Win! Paper disproves Spock");
            break;
        case playChoice === 'spock' && comChoice === 'rock':
            alert("You Win! Spock vaporizes Rock");
            break;
        case playChoice === 'rock' && comChoice === 'scissors':
            alert("You Win! Rock crushes Scissors");
            break;
        case comChoice === 'scissors' && playChoice === 'paper':
            alert("You Loose! Scissors cuts Paper");
            break;
        case comChoice === 'paper' && playChoice === 'rock':
            alert("You Loose! Paper covers Rock");
            break;
        case comChoice === 'rock' && playChoice === 'lizard':
            alert("You Loose! Rock crushes Lizard");
            break;
        case comChoice === 'lizard' && playChoice === 'spock':
            alert("You Loose! Lizard poisons Spock");
            break;
        case comChoice === 'spock' && playChoice === 'scissors':
            alert("You Loose! Spock smashes Scissors");
            break;
        case comChoice === 'scissors' && playChoice === 'lizard':
            alert("You Loose! Scissors decapitates Lizard");
            break;
        case comChoice === 'lizard' && playChoice === 'paper':
            alert("You Loose! Lizard eats Paper");
            break;
        case comChoice === 'paper' && playChoice === 'spock':
            alert("You Loose! Paper disproves Spock");
            break;
        case comChoice === 'spock' && playChoice === 'rock':
            alert("You Loose! Spock vaporizes Rock");
            result = "You Loose!";
            break;
        case comChoice === 'rock' && playChoice === 'scissors':
            alert("You Loose! Rock crushes Scissors");
            break;
        default:
            break;
    }
}

checkRules();