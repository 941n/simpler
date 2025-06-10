const pads = document.querySelectorAll('.pad');

/** audioCtx() */
const audioCtx = new AudioContext();

/** samplePaths() */
const samplePaths = new Map();

/** sampleStates() */
const sampleStates = new Map();

async function loadSample(samplePath) {
  const res = await fetch(samplePath);
  console.log(`Fetching sample from: ${samplePath}`);
  const arraySample = await res.arrayBuffer();
  console.log(`Sample fetched, decoding audio data for: ${samplePath}`);
  return audioCtx.decodeAudioData(arraySample);
}

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    await audioCtx.resume();
  },
  { once: true }
);

pads.forEach(pad => {
  const samplePath = pad.dataset.samplepath;

  if (samplePath) {
    loadSample(samplePath).then(sample => {
      samplePaths.set(pad, sample);
    });
  }

  pad.addEventListener('click', () => {
    const currentSample = sampleStates.get(pad);

    if (pad.id === 'pause-pad') {
      sampleStates.forEach(sample => {
        sample.stop(0);
      });
      sampleStates.clear();
    } else if (currentSample) {
      currentSample.stop(0);
    }

    const sample = audioCtx.createBufferSource();
    sample.buffer = samplePaths.get(pad);
    sample.connect(audioCtx.destination);
    sample.start(0);
    sampleStates.set(pad, sample);
  });
});
