// Write your function here:

const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  // It is totally ok if your function used the current year directly!

  // console.log(dateToday)
  // console.log(dateToday.getDate())
  // console.log(dateToday.getDay())

  const newAge = age + (year - thisYear)
  // console.log(newAge)

  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`
  } else {
    return `You were ${newAge} in the year ${year}`
  }
}



// Once your function is written, write function calls to test your code!

console.log(howOld(27, 2025))