const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}



const fruits = ['oranges', 'apples', 'grapes'];

for (const fruit of fruits) {
  console.log(fruit);
}



const username = 'joe';

for (const char of username) {
  console.log(char);
}


let strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
  if (bird === 'Basan') {
    break;
  }
  console.log(bird);
}



strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
  if (bird === 'Cow') {
    continue;
  }
  console.log(bird);
}



const spellingWord = 'hippopotamus';

// Write your code below
for (char of spellingWord) {
    console.log(char);
}


const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (let pokemon of pokemonList){
    if (pokemon === 'Yoshi'){
        continue;
    }
    console.log(`You caught a ${pokemon}!`);
}