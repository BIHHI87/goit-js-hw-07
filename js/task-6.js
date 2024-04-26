const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  // Clear the boxes container
  boxes.innerHTML = '';

  const amount = input.value;
  let boxSize = 30;
  let boxMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    boxMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
  }

  if (amount < 1 || amount > 100) {
    alert('Please enter a valid number between 1 and 100.');
  } else {
    boxes.insertAdjacentHTML('beforeend', boxMarkup);
    input.value = '';
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
