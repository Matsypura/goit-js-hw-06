const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const length = input.getAttribute('data-length');
  const value = input.value;

  if (value.length === parseInt(length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});