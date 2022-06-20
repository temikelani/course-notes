/**
 * Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
 */


const getSleepHours = day => {
  switch(day.toLowerCase()){
      case 'monday':
          return 8;
      break;
      case 'tuesday':
          return 8;        
      break;
      case 'wednesday':
          return 8;     
      break;
      case 'thursday':
          return 8;        
      break;
      case 'friday':
          return 8;        
      break;
      case 'saturday':
          return 8;        
      break;
      case 'sunday':
          return 8;        
      break;
      default:
          return 'Enter a day of the week please'
  }
};

// test
// console.log(getSleepHours('yhu'));



// get total actual weekly sleep hours
const getActualSleepHours = () => {
  let totalSleep = 0;
  let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  for (let i = 0; i < weekdays.length; i++){
      totalSleep += getSleepHours(weekdays[i]);
  }

  return totalSleep;
}

// total ideal weekly sleep hours
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
}
//test
console.log('actual : ' + getActualSleepHours());
console.log('ideal : ' + getIdealSleepHours());

//calcualte sleep debt
const calculateSleepDebt = () => {
  let idealSleepHours = getIdealSleepHours();
  let actualSleepHours = getActualSleepHours();

  if (actualSleepHours === idealSleepHours){
      return 'You sleep enough.';
  } else if (actualSleepHours < idealSleepHours){
      return 'You need ' + (idealSleepHours - actualSleepHours) + ' hours more sleep'
  } else {
      return 'You need ' + Math.abs(idealSleepHours - actualSleepHours) + ' hours less sleep'
  }
}

console.log(calculateSleepDebt());