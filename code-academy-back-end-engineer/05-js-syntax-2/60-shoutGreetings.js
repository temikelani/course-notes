// Write your code here:

const shoutGreetings = (array) => {
  const shout = []
  array.forEach(element => shout.push(element.toUpperCase() + `!`))
  return shout;
}




// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
