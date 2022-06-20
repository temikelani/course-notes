const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch (e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.

function capAllElements(arr) {
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch (e) {
    console.log(e);
  }

}

capAllElements('Incorrect argument');


// if there is no catch statement the error thrown is uncaught and anything after wont run