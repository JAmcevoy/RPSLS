# Rock, Paper, Scissors, Lizard, Spock.

[R.P.S.L.S](https://jamcevoy.github.io/R.P.S.L.S/)

R.P.S.L.S is my spin on the sitcom favourite game of Rock, Paper, Scissors, Lizard, Spock.

My aims for this game is that it will be accessavle to mulitple ages groups with a easy to understand design and fun little throw back to the show. Like for example your opponent is the mighty Sheldon Cooper.

![Responsice Mockup](docs/images/response.JPG)

# User Needs

- I would want the game to be accessible from different devices (Phone, Laptop, PC, Tablet).
- It would need to be responsive to all screens, ensuring the information is readable and understandable.
- As a user, I would want to see easy to understand control, with good use of white space.
- I would need a section where the rule would be displayed at all times.
- Somewhere to keep score.

# Rules 

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- Rock crushes Scissors

# Planned Design.

### Large Screen Layout.
![Large Screen](docs/images/pcscreen_layout.JPG)
### Types of Elements.
![Types Layout](docs/images/layout_of_divs_and_types.JPG)
### Small Screen Layout.
![Small Screen](docs/images/phone_screen_planned_layout.JPG)

# Features

### Existing Features

#### Player Choices

- The users buttons is where the player can select which option they choose. This then copies the value to a hidden field to be used in the game.
- Each click resets the hidden field to blank to stop from any mistakes.
- The button stays green once click to let the user know the option which will be played.

![Player Choices](docs/images/user.JPG)

#### Computer Choices

- The computer choices are button like the user, However they dont have any function when clicked.
- I kept the user choices to a red background colour to stay with theme of the big bang theory, Sheldons flash t-shirt. 
- Once the random number is generated in the background it will change the background color to green as it does with the user chocies. They reset each turn using a function.

![Computer Choices](docs/images/computer.JPG)

#### Score and Shoot! 

- This sections is where the main functionality of the game is. 
- Here the score is kept each round starts with player 0 - Sheldon 0 and is reset after 7 wins have been achieved from either side.
- The Submit button is used to run the game once this button is clicked it will call the checkRules function which brings the user and computer to a map and picks a winner off this rules.

![Score and Shoot!](docs/images/score_and_play_btns.JPG)

#### Rules 

- The rules sections is a qoute taking directly from the show! By sheldon himself!
- Again bring the origin of the game back to the show. 

![Rules](docs/images/rules.JPG)

#### Game Over 

- Once a player or Computer wins 7 games it calls a function openPopup which displays the box below the text is different based on weather the player won of the user won.
- When the computer wins you will see another nod to the bing bang theory being that Sheldons catchphrase is displayed.
- If the user wins you get a simple congratulations!
- The Close button on the popup calls a closePopup Function so we can close the pop up and try again.

![Game Over](docs/images/game_over.JPG)

### Features Left to Implement

## Testing

- I tested that this page works in different browsers: Chrome, Firefox, Microsoft Edge, and Safari.

![Chrome]()

![Firefox]()

![Microsoft Edge]()

![Safari]()

- I confirmed the site was responsive using the Chrome dev tools device toolbar.
- I can confirm that the nav and social links are reliable and easy to understand, Also the social links open in a new tab and open apps on mobile phones.
- I have confirmed the forms work, required entries in every field, the Radio button requires at least one to be selected, only accepts an email in the email field, and the submit button works.
- I have asked some family and friends to try the websites on a PC, laptop, and mobile phone (Andriod and iPhone).

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator]()
    ![html vidator]()
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator]()
    ![css vidator]()

### Bugs I Faced Along The Way

-

### Bugs I did not get to fix

- 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <h<https://jamcevoy.github.io/R.P.S.L.S/>>

## Credits

### Code

- 

### Content

- 


