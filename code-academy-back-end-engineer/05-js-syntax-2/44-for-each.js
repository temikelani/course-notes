const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`)
})

// -------------------------------

fruits.forEach(function (fruit) {
  console.log(`I want to eat a ${fruit}`)
})

// -------------------------------

printFruits = (fruit) => {
  console.log(`I want to eat a ${fruit}`)
}

fruits.forEach(printFruits)