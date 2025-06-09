function sampleControl(e) {
  const pad = e.currentTarget;
  const sample = pad.querySelector('audio');
  const samples = document.querySelectorAll('audio');

  if (pad.id === 'pause-pad') {
    samples.forEach(sample => {
      sample.pause();
      sample.currentTime = 0; // Reset all samples to the beginning
    });

    return;
  }

  sample.pause();
  sample.currentTime = 0; // Reset to the beginning
  sample.play();
}
