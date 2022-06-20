//generate a random rock, paper,scissors choice
const randomChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
}

const getUserChoice = userInput => {
  // if user input is truthy, then check if user input is rock, paper or scissors. Otherwise, generate a random choice
  if (userInput) {
    // make user input lowercase
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('error: invalid parameter for userInput');
      return null;
    }
  } else {
    return randomChoice();
  }
}

// generate computers choice
const getComputerChoice = () => {
  return randomChoice();
}

//test function
// console.log(getUserChoice(''));
// console.log(getComputerChoice());

// determine winner 
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game tied';
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'User Wins';
  } else {
    return 'Computer Wins';
  }
}

//test function
// console.log(getUserChoice(''));
// console.log(getComputerChoice());
// console.log(determineWinner(getUserChoice(), getComputerChoice()));

// simulate a game
const playGame = (userChoice) => {
  userHand = getUserChoice(userChoice);
  computerHand = getComputerChoice();

  console.log('user choice is: ' + userHand);
  console.log('computer choice is: ' + computerHand);

  return determineWinner(userHand, computerHand);
}

console.log(playGame())