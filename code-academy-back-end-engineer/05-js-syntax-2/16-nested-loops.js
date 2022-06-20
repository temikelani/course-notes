// Write your code below
let bobsFollowers = ["Janet", "Jane", "John", "James"];
let tinasFollowers = ["Tomiwa", "John", "James"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers)


