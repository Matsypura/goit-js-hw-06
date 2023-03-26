const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', () => {
  text.style.fontSize = range.value + 'px';
});
