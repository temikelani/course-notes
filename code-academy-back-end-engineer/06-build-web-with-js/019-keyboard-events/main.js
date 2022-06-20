let ball = document.getElementById('float-circle');

// Write your code below
const up = (event) => {
  ball.style.bottom = '250px'
}

const down = (event) => {
  ball.style.bottom = '50px'
}

document.addEventListener('keydown', up)
document.addEventListener('keyup', down)