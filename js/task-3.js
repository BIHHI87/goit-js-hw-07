const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  if (inputValue && inputValue != '') {
    output.textContent = inputValue;
  } else {
    output.textContent = 'Anonymous';
  }
});
