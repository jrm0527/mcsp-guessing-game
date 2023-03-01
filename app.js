let secretNumber = 0;
let player = "";
let allPlayers = {};
let pastPlayer = false;
let correctGuess = true;
let numberOfGuesses = 0;
let guesses = [];

startNewGame();

//Continues running until guess is correct
do {
  let playerGuess = Number(prompt("Guess a number between 1-100."));
  numberOfGuesses++;
  guesses.push(playerGuess);
  checkGuess(playerGuess);
} while (!correctGuess);

//Starts new game
function startNewGame() {
  if (!player) {
    player = prompt("Please enter your name");
  }
  pastPlayer = checkPlayer();
  reset();
}

//Checks to see if player has played before
function checkPlayer() {
  if (allPlayers.hasOwnProperty(player)) {
    return true;
  }
  allPlayers[player] = 0;
  return false;
}

//Resets the game to start again
function reset() {
  secretNumber = Math.ceil(Math.random() * 100);
  console.log(secretNumber);
  numberOfGuesses = 0;
  guesses = [];
  correctGuess = false;
}

//Checks the players guess
function checkGuess(guess) {
  if (guess === secretNumber) {
    winner();
  } else if (guess > secretNumber) {
    alert(`Sorry ${player}, Guess Lower`);
  } else if (guess < secretNumber) {
    alert(`Sorry ${player}, Guess Higher`);
  } else {
    alert("ERROR: Please input a number");
  }
}

//Player guesses correct number
function winner() {
  correctGuess = true;
  winningMessage();
  allPlayers[player] = numberOfGuesses;
  alert(`Your guesses were ${guesses.join(", ")}.`);
  playAgain();
}

//Prompts the player if they want to play again
function playAgain() {
  let ans = prompt("Would you like to play again? Type Yes or No.");
  if (ans.toLowerCase() === "yes") {
    isLastPlayer();
  } else if (ans.toLowerCase() === "no") {
    alert("Thanks for playing!");
    return;
  } else {
    alert("Please type Yes or No");
    playAgain();
  }
}

//Check if player is the same
function isLastPlayer() {
  let ans = prompt(`Are you ${player}? Please type Yes or No.`);
  if (ans.toLowerCase() === "yes") {
    startNewGame();
  } else if (ans.toLowerCase() === "no") {
    player = "";
    startNewGame();
  } else {
    alert("Please type Yes or No");
    isLastPlayer();
  }
}

//Different messages for different winning conditions
function winningMessage() {
  if (!pastPlayer) {
    if (numberOfGuesses === 1) {
      alert(`Correct ${player}! It took you 1 try.`);
    } else {
      alert(`Correct ${player}! It took you ${numberOfGuesses} tries.`);
    }
  } else {
    if (allPlayers[player] < numberOfGuesses) {
      betterLastGame();
    } else if (allPlayers[player] > numberOfGuesses) {
      beatLastGame();
    } else {
      if (numberOfGuesses === 1) {
        alert(
          `Correct ${player}! It took you 1 try. You did the same as your last game.`
        );
      } else {
        alert(
          `Correct ${player}! It took you ${numberOfGuesses} tries. You did the same as your last game.`
        );
      }
    }
  }
}

//Messages for a better previous game
function betterLastGame() {
  let diff = numberOfGuesses - allPlayers[player];
  if (diff === 1) {
    if (numberOfGuesses === 1) {
      alert(`${correctOneTry} You did better in your last game by 1 guess.`);
      // This line is probably not needed
      console.log(
        "It actually hit numberOfGuesses === 1 but still did better last game."
      );
    } else {
      alert(
        `Correct ${player}! It took you ${numberOfGuesses} tries. You did better in your last game by 1 guess.`
      );
    }
  } else {
    if (numberOfGuesses === 1) {
      alert(
        `Correct ${player}! It took you 1 try. You did better in your last game by ${diff} guesses.`
      );
      // This line is probably not needed
      console.log(
        "It actually hit numberOfGuesses === 1 but still did better last game."
      );
    } else {
      alert(
        `Correct ${player}! It took you ${numberOfGuesses} tries. You did better in your last game by ${diff} guesses.`
      );
    }
  }
}

//Messages for beating last game
function beatLastGame() {
  let diff = allPlayers[player] - numberOfGuesses;
  if (diff === 1) {
    if (numberOfGuesses === 1) {
      alert(
        `Correct ${player}! It took you 1 try. You beat your last game by 1 guess.`
      );
    } else {
      alert(
        `Correct ${player}! It took you ${numberOfGuesses} tries. You beat your last game by 1 guess.`
      );
    }
  } else {
    if (numberOfGuesses === 1) {
      alert(
        `Correct ${player}! It took you 1 try. You beat your last game by ${diff} guesses.`
      );
    } else {
      alert(
        `Correct ${player}! It took you ${numberOfGuesses} tries. You beat your last game by ${diff} guesses.`
      );
    }
  }
}
