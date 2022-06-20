// import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

import domFunctions from '../modules/dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');


buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement);
});