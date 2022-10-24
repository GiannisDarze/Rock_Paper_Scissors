const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

// Array for random Bot pick
const GAME_CHOICES = [ROCK, PAPER, SCISSORS];

let gameHasEnded = false;

// Choice of User
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`);
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    let selection = Math.floor(Math.random() * GAME_CHOICES.length);
    selection = GAME_CHOICES[selection];
    alert(`Not a valid answer. We have selected ${selection} for you!`);
    return selection;
  }
  alert(`You chose ${selection}`);
  return selection;
};

// Choice of Bot
const getBotChoice = () => {
  let selection = Math.floor(Math.random() * GAME_CHOICES.length);
  selection = GAME_CHOICES[selection];
  alert(`The bot chose ${selection}`);
  return selection;
};

// Printing of both choices
startGameBtn.addEventListener("click", () => {
  if (gameHasEnded) {
    return;
  }
  gameHasEnded = true;
  console.log("The game is starting...");
  const playerSelection = getPlayerChoice();
  const botSelection = getBotChoice();
  console.log(playerSelection);
  console.log(botSelection);

  // Result checker
  if (playerSelection === botSelection) {
    console.log("It's a draw!");
  } else if (
    (playerSelection === ROCK && botSelection === SCISSORS) ||
    (playerSelection === SCISSORS && botSelection === PAPER) ||
    (playerSelection === PAPER && botSelection === ROCK)
  ) {
    console.log("You win!");
  } else {
    console.log("You lose :(");
  }
});
