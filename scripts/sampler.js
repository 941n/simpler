const pads = document.querySelectorAll('.pad');
const pausePad = document.querySelector('#pause-pad');

pads.forEach(pad => {
  if (pad.dataset.samplepath) {
    pad.innerHTML = `<audio src="${pad.dataset.samplepath}" preload="auto"></audio>`;
  }
  pad.addEventListener('click', sampleControl);
});
