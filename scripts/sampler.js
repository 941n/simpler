const audioCtx = new AudioContext();
const sampleMap = new Map();
const activeSources = new Map(); // pad별 재생 상태

document.addEventListener('DOMContentLoaded', () => {
  const pads = document.querySelectorAll('.pad');

  document.body.addEventListener(
    'click',
    async () => {
      if (audioCtx.state !== 'running') {
        await audioCtx.resume();
        console.log('AudioContext resumed!');
      }
    },
    { once: true }
  );

  pads.forEach(pad => {
    const samplePath = pad.dataset.samplepath;
    if (samplePath) {
      loadSample(samplePath).then(audioBuffer => {
        sampleMap.set(pad, audioBuffer);
      });
    }

    pad.addEventListener('click', () => {
      // 긴급 정지 패드
      if (pad.id === 'pause-pad') {
        activeSources.forEach(source => {
          try {
            source.stop(0);
          } catch (e) {
            console.warn('stop 실패:', e);
          }
        });
        activeSources.clear();
        return;
      }

      const buffer = sampleMap.get(pad);
      if (!buffer) {
        console.warn('샘플 안 불러왔음!');
        return;
      }

      // 동일한 pad에서 이미 재생 중이면 stop()
      const currentSource = activeSources.get(pad);
      if (currentSource) {
        try {
          currentSource.stop(0);
        } catch (e) {
          console.warn('이미 멈춘 소스:', e);
        }
      }

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.start(0);

      activeSources.set(pad, source);

      // 재생이 끝나면 자동 제거
      source.onended = () => {
        if (activeSources.get(pad) === source) {
          activeSources.delete(pad);
        }
      };
    });
  });
});

// 샘플 불러오기
async function loadSample(url) {
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  return await audioCtx.decodeAudioData(arrayBuffer);
}
