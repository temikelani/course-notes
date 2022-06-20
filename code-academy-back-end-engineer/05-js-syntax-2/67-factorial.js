// Write a function factorial() that takes a number as an argument and returns the factorial of the number.

const factorial = num => {
  let fct = 1; // holds factorial
  while (num > 0){
      fct = fct * num;
      num--;
  }

  return fct
}

console.log(factorial(6))
