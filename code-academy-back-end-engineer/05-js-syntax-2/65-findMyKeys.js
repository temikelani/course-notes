// Write your code here:

const findMyKeys = (arrayOfStr) => {
  let keyword = 'keys'
  if (arrayOfStr.includes(keyword)){
    return arrayOfStr.indexOf(keyword)
  } else {
    return -1
  }
}


// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
