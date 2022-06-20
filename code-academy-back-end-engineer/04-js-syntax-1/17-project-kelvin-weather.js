//  todays's weather forecast in kelvin
const kelvin = 283;

// convert kelvin to celsius
const celsius = kelvin - 273;

// convert celsius to fahrenheit to the nearest integer
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)