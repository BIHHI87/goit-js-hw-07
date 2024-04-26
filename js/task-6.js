const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxes.innerHTML = '';

  const amount = input.value;
  const boxElements = []; 
  let boxSize = 30;

  if (amount < 1 || amount > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return; 
  }

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box); 
    boxSize += 10;
  }

  boxElements.forEach(box => {
    boxes.appendChild(box);
  });

  input.value = ''; 
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
