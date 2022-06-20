const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList) //removed first item

groceryList.unshift('popcorn');
console.log(groceryList) //add to start of list

console.log(groceryList.slice(1,4))
console.log(groceryList) //selects the 1,2,3 items

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex) //find the index of pasta