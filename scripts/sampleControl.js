async function sampleControl(e) {
  const pad = e.target;
  if (!pad.dataset.samplepath) {
    console.log(`empty sample`);
  }
  console.log(`${pad.dataset.samplepath}`);

  const samplePath = pad.dataset.samplepath;

  const audio = pad.querySelector('audio');
  const audios = document.querySelectorAll('audio');

  if (!samplePath) {
    return;
  } else if (pad.id === 'pause') {
    audios.forEach(audio => {
      audio.pause();
    });
    return;
  }
  audio.src = samplePath;
  audio.play();
}
