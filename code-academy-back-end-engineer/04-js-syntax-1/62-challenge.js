const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor){
      return 'The shirt is your favorite color!';
  } else {
      return 'That is a nice color.';
  }
};

console.log(colorMessage('blue', 'blu'));

const isEven = number => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5))


// Create function here 
function numberDigits(x){
  if (0 <= x && x <=9){
      return `One digit: ${x}`
  } else if (10 <= x && x <=99){
      return `Two digits: ${x}`
  } else {
      return `The number is: ${x}`
  }
}

console.log(numberDigits(120))