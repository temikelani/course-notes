/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === 'none') {
    domElement.style.display = 'block';
  } else {
    domElement.style.display = 'none';
  }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

// export one by one
// export { toggleHiddenElement, changeToFunkyColor, changeText };
// import one by one
// import { changeText, changeToFunkyColor } from '../modules/dom-functions.js';

const resources = {
  toggleHiddenElement,
  changeToFunkyColor,
  changeText
}

// export all as default
export default resources // OR export {resources as default}

// import {default as domFunctions} from '../modules/dom-functions.js';
// OR
// import domFunctions from '../modules/dom-functions.js';
// domFuction is just a name


// the default export is an object, the values inside cannot be extracted until after the object is imported, like so: AKA specify what you wanna import

// import domFunctions from '../modules/dom-functions.js';
// const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

// import domFunctions from '../modules/dom-functions.js';
// const { changeText, changeToFunkyColor } = domFunctions;


// rename on import
// import { exportedResource as newlyNamedResource } from '/path/to/module'

// -------------------------------

// for node.js

// module.exports =
// and require() 
// for node


// -------------------------------

// let Planets = {};
// Planets.calculateVolume = (radius) => {
//   let volume = 4 / 3 * Math.pi * Math.pow(radius, 3)
//   return volume;
// }

// Planets is an object and calculateVolume is a item in the object.. 
// export default Planets
