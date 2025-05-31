const pads = document.querySelector('#pads');
const pausePad = document.querySelector('#pause');

const audios = document.querySelectorAll('audio');

pads.addEventListener('click', sampleControl);
