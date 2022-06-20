// Write your code here:

const reverseArray = array => {
  const reverse = []
  for (const item of array) {
    reverse.unshift(item)
  }
  return reverse
}

// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];



