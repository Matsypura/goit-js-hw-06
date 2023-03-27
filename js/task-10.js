
const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtnEl = controlsEl.querySelector('[data-create]');
const destroyBtnEl = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${boxSize + i * 10}px`;
    boxEl.style.height = `${boxSize + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(boxEl);
  }

  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', destroyBoxes);