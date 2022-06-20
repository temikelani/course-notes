// import { changeText, changeToFunkyColor } from '../modules/dom-functions.js';

import domFunctions from '../modules/dom-functions.js';
const { changeText, changeToFunkyColor } = domFunctions;


const header = document.getElementById("header");

// uncomment to see effect
// changeText(header, 'I did it!')

setInterval(() => {
  // uncomment to see effect
  changeToFunkyColor(header)

}, 200);