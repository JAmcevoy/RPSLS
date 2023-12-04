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
            winScore();
            break;
        case playChoice === 'paper' && comChoice === 'rock':
            alert("You Win! Paper covers Rock");
            winScore();
            break;
        case playChoice === 'rock' && comChoice === 'lizard':
            alert("You Win! Rock crushes Lizard");
            winScore();
            break;
        case playChoice === 'lizard' && comChoice === 'spock':
            alert("You Win! Lizard poisons Spock");
            winScore();
            break;
        case playChoice === 'spock' && comChoice === 'scissors':
            alert("You Win! Spock smashes Scissors");
            winScore();
            break;
        case playChoice === 'scissors' && comChoice === 'lizard':
            alert("You Win! Scissors decapitates Lizard");
            winScore();
            break;
        case playChoice === 'lizard' && comChoice === 'paper':
            alert("You Win! Lizard eats Paper");
            winScore();
            break;
        case playChoice === 'paper' && comChoice === 'spock':
            alert("You Win! Paper disproves Spock");
            winScore();
            break;
        case playChoice === 'spock' && comChoice === 'rock':
            alert("You Win! Spock vaporizes Rock");
            winScore();
            break;
        case playChoice === 'rock' && comChoice === 'scissors':
            alert("You Win! Rock crushes Scissors");
            winScore();
            break;
        case comChoice === 'scissors' && playChoice === 'paper':
            alert("You Loose! Scissors cuts Paper");
            loseScore();
            break;
        case comChoice === 'paper' && playChoice === 'rock':
            alert("You Loose! Paper covers Rock");
            loseScore();
            break;
        case comChoice === 'rock' && playChoice === 'lizard':
            alert("You Loose! Rock crushes Lizard");
            loseScore();
            break;
        case comChoice === 'lizard' && playChoice === 'spock':
            alert("You Loose! Lizard poisons Spock");
            loseScore();
            break;
        case comChoice === 'spock' && playChoice === 'scissors':
            alert("You Loose! Spock smashes Scissors");
            loseScore();
            break;
        case comChoice === 'scissors' && playChoice === 'lizard':
            alert("You Loose! Scissors decapitates Lizard");
            loseScore();
            break;
        case comChoice === 'lizard' && playChoice === 'paper':
            alert("You Loose! Lizard eats Paper");
            loseScore();
            break;
        case comChoice === 'paper' && playChoice === 'spock':
            alert("You Loose! Paper disproves Spock");
            loseScore();
            break;
        case comChoice === 'spock' && playChoice === 'rock':
            alert("You Loose! Spock vaporizes Rock");
            loseScore();
            result = "You Loose!";
            break;
        case comChoice === 'rock' && playChoice === 'scissors':
            alert("You Loose! Rock crushes Scissors");
            loseScore();
            break;
        default:
            break;
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