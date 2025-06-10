const backdrop = document.querySelector('#backdrop');
const configOverlay = document.querySelector('#config-overlay');

document.addEventListener('click', () => {
  backdrop.style.display = 'none';
  configOverlay.style.display = 'none';
});
