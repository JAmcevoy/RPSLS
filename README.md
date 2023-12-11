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

# Planning

- Before I could start this project I first need to get the planned layout, process or flow of the game, and most importantly the rules.

## Planned Design.

- Firstly how did I want the site to look where did I want what and placement on smaller screens so using wireframe I created my layout

### Large Screen Layout.
![Large Screen](docs/images/pcscreen_layout.JPG)
### Types of Elements.
![Types Layout](docs/images/layout_of_divs_and_types.JPG)
### Small Screen Layout.
![Small Screen](docs/images/phone_screen_planned_layout.JPG)

## Game Flow and Possible Functions

- Then I need to map the flow of the game. Which involed many questions.
  - When does the game start?
  - how does the user pick?
  - how does the computer pick?
  - What will add the score?
  - how can I apply these parameters to functions

![Process Flow](docs/images/process_flow.JPG)

- So I wrote out how Imagined the game running then used this as a locical wireframe of the game.

## Rules 

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

- I orginally used a switch to check the rule but it ended up being very long, messy, and repetitive.

![Check Rule Switch](docs/images/switch.JPG)

- So I split the check rule and made a new function compare() and a map of the values and what they beat. This allowed me to minimize the lines used and make the code more readable.

![Compare](docs/images/compare.JPG)
![Map](docs/images/map_for_compare.JPG)

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

- If I was to add more features to this game would probably be some animations depending on weather you won or lost.
- I think the game has potienal to Play Player vs, Player but I think this require a lot more work and configuration.
- I wanted to add a popup where it displays each win based on the values, for example paper covers rock. However, using alerts didnt seem to convenient for the user.
- I think some audio would make the game more interactive, Like if sheldon wins maybe play a audio clip of his famous catchphrase.

## Testing

- I tested that this page works in different browsers: Chrome, Firefox, Microsoft Edge, and Safari.

![Chrome](docs/images/chrome.JPG)

![Firefox](docs/images/firefox.JPG)

![Microsoft Edge](docs/images/edge.JPG)

![Safari](docs/images/safari.jpg)

- I confirmed the site was responsive using the Chrome dev tools device toolbar.
- I have asked some family and friends to try the game on a PC, laptop, and mobile phone (Andriod and iPhone).
- Using console.log function and alerts I tested if the computer was outputting correct vaults on the devtools console.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
    ![html vidator](docs/images/html_val.JPG)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
    ![css vidator](docs/images/css_val.JPG)
<!-- - JavaScript 
  - no errors were found.
    [JavaScript validator]()
    ![[JavaScript validator]() -->

### Bugs I Faced Along The Way

- I didnt facemany bugs in the creation of this game, One issue I did have was changing of the background color on the button selected by the user and the pc. I tried to use the one function for each side but this prevented the game for running when I hit submit so instead, I used JavaScript for the computer choice using the changeButtonColor() and used css pseudo class for the playerChoice.
- Using the alerts to display the end game winner made for a bad user experiences, So I decided to use a popup instead. I wasnt sure how I oculd do this so I reasearch possible solutions online and I found a tutorial online on how to create one so I changed the style and a bit and added my own text and using spans I displayed the winners chatchpharse and a little text displaying *name* has won 7 games first!.

### Bugs I did not get to fix

- I couldnt think of a way to display draws without using alerts. I though maybe another pop up but I feared this would make the code and display a bit messy and repetitive as I would need to use the same styles and functions as the end game pop up.
- I wanted the users choice to display along side the computers choice each round but because I used the focus class for the users choice the color drops once the submit button is selected. I would need more time a research to look into possible solutions that wouldnt effect the running of the game.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <h<https://jamcevoy.github.io/R.P.S.L.S/>>

## Credits

### Design

- All the design screenshots  from above came from [Wirframe](https://wireframe.cc/)

### Code

- How to Select a random item from an array - [Geeks For Geeks](<https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/>)
- How to print value of button to input box onclick function- [Stack overflow](https://stackoverflow.com/questions/67653377/how-to-print-value-of-button-to-input-box-onclick-function)
- Used for inspiration [Git Hub](https://github.com/TomZebra/Rock-Paper-Scissors-Spock-Lizzard/blob/main/app.js)
- How to set a html value back to zero [Stack overflow](https://stackoverflow.com/questions/37580280/how-to-reset-a-counter-back-to-0-with-a-button-in-javascript)
- End of game pop up [Youtube](https://youtu.be/AF6vGYIyV8M?feature=shared)
- The Scores Section was based on the Love Maths Project [Love Maths](https://github.com/JAmcevoy/LoveMaths)

### Content

- Because of the origin of this game names, rules, and catch phrases were all taken from the tv Show The Big Bang Theory.