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