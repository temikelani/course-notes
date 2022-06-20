// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are 

// Write function below
const groceries = list => {
  let listString = ''

  for (let i = 0; i < list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i === list.length - 2) {
      listString += ' and ';
    }
  }

  return listString;
}