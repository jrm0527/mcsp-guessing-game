let secretNumber = Math.ceil(Math.random() * 100);
console.log(secretNumber);
let user = prompt("Please enter your name");
let users = {};
users[user] = 0;
let pastUser = false;
let correctGuess = false;
let numberOfGuesses = 0;
let guesses = [];

function startNewGame() {
  secretNumber = Math.ceil(Math.random() * 100);
  console.log(secretNumber);
  user = prompt("Please enter your name");
  correctGuess = false;
  numberOfGuesses = 0;
  guesses = [];
  checkUser(user);
}

function checkGuess(guess) {
  if (guess === secretNumber) {
    correctGuess = true;
    winningMessage();
    users[user] = numberOfGuesses;
    alert(`Your guesses were ${guesses.join(", ")}.`);
    playAgain();
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
  numberOfGuesses++;
  guesses.push(userGuess);
  checkGuess(userGuess);
}

function playAgain() {
  let ans = prompt("Would you like to play again? Type Yes or No.");
  if (ans == "Yes") {
    startNewGame();
  } else if (ans == "No") {
    return;
  } else {
    console.log(ans);
    alert("Please type Yes or No");
    playAgain();
  }
}

function checkUser(name) {
  if (users.hasOwnProperty(name)) {
    console.log("Played before");
    pastUser = true;
  } else {
    console.log("First time playing");
    users[name] = 0;
  }
}

function winningMessage() {
  if (!pastUser) {
    if (numberOfGuesses === 1) {
      alert(`Correct ${user}! It only took you ${numberOfGuesses} try!`);
    } else {
      alert(`Correct ${user}! It only took you ${numberOfGuesses} tries!`);
    }
  } else {
    if (users[user] < numberOfGuesses) {
      let diff = numberOfGuesses - users[user];
      alert(
        `Correct ${user}! You did better in your last game by ${diff} guesses.`
      );
    } else if (users[user] > numberOfGuesses) {
      let diff = users[user] - numberOfGuesses;
      alert(`Correct ${user}! You beat your last game by ${diff} guesses.`);
    } else {
      alert(`Correct ${user}! You did the same as your last game.`);
    }
  }
}