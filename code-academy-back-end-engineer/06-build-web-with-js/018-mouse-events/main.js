// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = ''
  itemTwo.style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
const increaseWidth = (event) => {
  event.target.style.width = '501px'
}

function colorValue() {
  return Math.floor(Math.random() * 256);
}

const changeBackground = (event) => {
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor = randomColor
}

// function changeBackground() {
//   itemTwo.style.backgroundColor = 'green';
// }

const changeText = (event) => {
  event.target.innerHTML = 'The mouse has left the element'
}

const showItem = (event) => {
  itemFive.style.display = 'block'
}

itemOne.addEventListener('mouseover', increaseWidth)
itemTwo.addEventListener("mouseup", changeBackground)
itemThree.addEventListener("mouseleave", changeText)
itemFour.addEventListener('mousedown', showItem)

/*
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width = '500px';
}

itemOne.addEventListener('mouseover', increaseWidth);

function changeBackground(){
  itemTwo.style.backgroundColor = 'green';
}

itemTwo.addEventListener('mouseup', changeBackground);

function changeText(){
  itemThree.innerHTML = 'The mouse has left the element';
}

itemThree.addEventListener('mouseout', changeText);

function showItem(){
  itemFive.style.display = 'block';
}

itemFour.addEventListener('mousedown', showItem);
*/