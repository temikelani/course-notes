// Write your code here:

const greetAliens = (array) => {
  for  (const item of array){
    console.log(`Oh powerful ${item}, we humans offer our unconditional surrender!`)
  }
}


// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];


greetAliens(aliens);

// Using forEach()

aliens.forEach(alien => {
  console.log(`Oh powerful ${alien}, we mortals offer our unconditional surrender! `)
})

