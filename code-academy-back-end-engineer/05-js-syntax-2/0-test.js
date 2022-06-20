// -------------------------------

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength >= minLength && stringLength <= maxLength) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));



// -------------------------------

// // Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// function doubleString(string) {
//   return string.repeat(2);
// }

// // Should return 'echoecho'
// console.log("doubleString('echo') returns: " + doubleString('echo'));

// -------------------------------

// // Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
// function getLaterFirstLetter(string1, string2) {
//   const firstLetter1 = string1.charAt(0);
//   const firstLetter2 = string2.charAt(0);
  
//   if (firstLetter1 === firstLetter2) {
//     return null;
//   } else if (firstLetter1 > firstLetter2) {
//     return string1;
//   } else {
//     return string2
//   }
// }

// // Should return "blueberry"
// console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// // Should return "zebra"
// console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// // Should return null
// console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));




// -------------------------------

// function capitalizeASingleWord(word) {
  
//   if (word.match(' ')) {
//     return null;
//   }
  
//   let firstLetter = word.charAt(0);
//   const restOfWord = word.slice(1);
  
//   firstLetter = firstLetter.toUpperCase();
  
//   return firstLetter + restOfWord;
// }

// // Should return "Hey"
// console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// // Should return null
// console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

// -------------------------------

// const GPA_BENCHMARK = 3.5;
// let students = {
//   1: {
//     name: 'Egill Vignission',
//     gpa: 3.4
//   },
//   2: {
//     name: 'Bianca Pargas',
//     gpa: 3.8
//   },
//   3: {
//     name: 'Aisling O\'Sullivan',
//     gpa: 3.4
//   },
//   4: {
//     name: 'Sameer Fares',
//     gpa: 3.9
//   }
// }

// console.log(Object.values(students))
// let honorRoll = Object.values(students).filter(student => {
//   return student.gpa >= GPA_BENCHMARK;
// });
// console.log(honorRoll);

// -------------------------------

// function isSumBigger(number1, number2, total) {
//   const numberSum = number1 + number2;
  
//   if (numberSum > total) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Should return true
// console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// // Should return false
// console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));