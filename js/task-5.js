const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', event => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  span.textContent = changeColor;
});
