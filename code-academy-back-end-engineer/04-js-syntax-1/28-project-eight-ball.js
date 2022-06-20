// collect username
let username = '';

//greet user
console.log(username ? 'Hello, ' + username : 'Hello! Stranger!');  

// Question for 8 ball 
let userQuestion = 'Will it rain tomorrow?';
console.log('Question: ' + userQuestion);

// generate a random number btw 0 and 7
let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not cout on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}

// print eightball answer
console.log('Answer: ' + eightBall);