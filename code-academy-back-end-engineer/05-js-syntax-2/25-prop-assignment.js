let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = "glorious gold";
spaceship.numEngines = 5;
delete spaceship["Secret Mission"]





// ------------------------------------
const spaceship2 = { type: 'shuttle' };
spaceship2 = { type: 'alien' }; // TypeError: Assignment to constant variable.
spaceship2.type = 'alien'; // Changes the value of the type property
spaceship2.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'