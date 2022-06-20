// use bracket notation int functions not dot notation
// use bracket notation when in doubt lol

let spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

let returnAnyProp = (objectName, propName) => objectName[propName];
let returnAnyProp2 = (objectName, propName) => objectName.propName;

console.log(returnAnyProp(spaceship2, 'homePlanet')); // Returns 'Earth'
console.log(returnAnyProp2(spaceship2, 'homePlanet')); // Returns 'Earth'

// -------------------------------------------------------------------------

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  homePlanet: 'Earth',
  numCrew: 5
};

let propName = 'Active Mission';

// Write your code below
let isActive = spaceship["Active Mission"];
console.log(isActive)