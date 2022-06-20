let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// console.log(generateTarget())

const compareGuesses = (userGuess, computerGuess, secret) => {
  // console.log(userGuess, computerGuess, secret);
  userGuess = Math.abs(secret - userGuess);
  computerGuess = Math.abs(secret - computerGuess);

  if (userGuess === computerGuess) {
    return true;
  } if (userGuess < computerGuess) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareGuesses(generateTarget(), generateTarget(), generateTarget()))

const updateScore = winner => {
  // console.log(winner)
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

// console.log(updateScore(compareGuesses(generateTarget(), generateTarget(), generateTarget()) ? 'human' : 'computer'))
// console.log(humanScore, computerScore)

const advanceRound = () => {
  currentRoundNumber += 1;
}

// console.log(advanceRound());
// console.log(currentRoundNumber)