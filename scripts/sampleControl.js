function sampleContol(event) {
  const pad = event.target;

  if (pad === pausePad) {
    sound.pause();
  }
  sound.src = `samples/${pad.dataset.sound}`;
  sound.play();

  /* 
  console.log(`/samples/${pad.innerText}`);
  console.dir(pad); */
}
