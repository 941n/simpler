const padsContainer = document.querySelector('#pads');
const pads = document.querySelectorAll('#pads li');
const pausePad = document.querySelector('#pause');

pads[pads.length - 1].id = 'pause';

for (let i = 0; i < pads.length; i++) {
  pads[i].classList.add('pad');
  pads[i].innerText = `pad ${i + 1}`;
  pads[i].dataset.sound = `${i + 1}.m4a`;

  pads[i].addEventListener('click', sampleContol);
  pads[i].addEventListener('keydown', sampleContol);
}
