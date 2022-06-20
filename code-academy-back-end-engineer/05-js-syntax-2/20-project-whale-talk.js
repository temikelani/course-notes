let input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let letter = 0; letter < input.length; letter++) {
  // console.log(`----${letter}`)
  // console.log(input[letter]);

  for (let vowel = 0; vowel < vowels.length; vowel++) {
    // console.log(vowel)
    if (input[letter] === vowels[vowel]) {
      resultArray.push(vowels[vowel])
      if (input[letter] === 'e' || input[letter] === 'u') {
        resultArray.push(vowels[vowel])
      }
    }
  }
}

console.log(resultArray)
let resultString = resultArray.join('').toUpperCase()
console.log(resultString)
