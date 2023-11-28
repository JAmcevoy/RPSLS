switch (true) {
    case computerChoice === playerChoice:
        alert("It's a Draw, Try again!");
        break;
    case computerChoice === scissors && playerChoice === paper:
        alerts("Scissors cuts Paper");
        break;
    case computerChoice === paper && playerChoice === rock:
        alerts("Paper covers Rock");
        break;
    case computerChoice === rock && playerChoice === lizzard:
        alerts("Rock crushes Lizard");
        break;
    case computerChoice === lizzard && playerChoice === spock:
        alerts("Lizard poisons Spock")
        break;
    case computerChoice === spock && playerChoice === scissors:
        alerts("Spock smashes Scissors");
        break;
    case computerChoice === scissors && playerChoice === lizzard:
        alerts("Scissors decapitates Lizard");
        break;
    case computerChoice === lizzard && playerChoice === paper:
        alerts("Lizard eats Paper");
        break;
    case computerChoice === paper && playerChoice === spock:
        alerts("Paper disproves Spock");
        break;
    case computerChoice === spock && playerChoice === rock:
        alerts("Spock vaporizes Rock");
        break;
    case computerChoice === rock && playerChoice === scissors:
        alerts("Rock crushes Scissors");
        break;
}