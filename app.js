const secretNumber = Math.ceil(Math.random() * 100);
let user = prompt("Please enter your name");
let secondUser = null;
let correctGuess = false;
let numberOfGuesses = 0;
let guesses = [];

// function startNewGame() {
//   user = prompt("Please enter your name");
//   correctGuess = false;
//   numberOfGuesses = 0;
//   guesses = [];
// }

function checkGuess(guess) {
  if (guess === secretNumber) {
    correctGuess = true;
    if (numberOfGuesses === 1) {
      alert(`Correct ${user}! It only took you ${numberOfGuesses} try!`);
    } else {
      alert(`Correct ${user}! It only took you ${numberOfGuesses} tries!`);
    }
    alert(`Your guesses were ${guesses.join(", ")}.`);
    //playAgain();
  } else if (guess > secretNumber) {
    alert(`Sorry ${user}, Guess Lower`);
  } else if (guess < secretNumber) {
    alert(`Sorry ${user}, Guess Higher`);
  } else {
    alert("ERROR: Please input a number");
  }
}

while (!correctGuess) {
  let userGuess = Number(prompt("Guess a number between 1-100."));
  console.log(userGuess);
  numberOfGuesses++;
  guesses.push(userGuess);
  checkGuess(userGuess);
}

// function playAgain() {
//   let ans = prompt("Would you like to play again?");
//   if (ans) {
//     startNewGame();
//   }
// }