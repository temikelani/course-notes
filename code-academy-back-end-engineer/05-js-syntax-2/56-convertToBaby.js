// Write your code here:

const convertToBaby = (array) => {
  const baby = []
  for (const item of array){
    baby.push(`baby ${item}`)
  }
  return baby
}

// When you're ready to test your code, uncomment the below and run:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


// Using map

const babyAnimals = animals.map(animal => {
  return `baby ${animal}`
})

console.log((babyAnimals))
