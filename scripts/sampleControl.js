function sampleContol(event) {
  const pad = event.target;

  if (pad === pausePad) {
    console.log('pause');

    /* noteSamplesAudio.pause();
    startIntroAudio.pause();
    voiceSamplesAudio.pause(); */
    audios.pause();
    return;
  } else if (pad.classList.contains('note')) {
    noteSamplesAudio.src = `samples/${pad.dataset.path}`;
    noteSamplesAudio.play();
  } else if (pad.classList.contains('voice-sample')) {
    voiceSamplesAudio.src = `samples/${pad.dataset.path}`;
    voiceSamplesAudio.play();
  } else if ((pad.id = 'start-intro')) {
    startIntroAudio.src = `samples/${pad.dataset.path}`;
    startIntroAudio.play();
  }

  /* 
  console.log(`/samples/${pad.innerText}`);
  console.dir(pad); */
}
