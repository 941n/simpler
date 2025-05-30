const pads = document.querySelectorAll('.pad');
const notePads = document.querySelectorAll('.note');
const ladiesAndGentlemen = document.querySelector('#ladies-and-gentlemen');
const lookAtYou = document.querySelector('#look-at-you');
const pausePad = document.querySelector('#pause');

const audios = document.querySelectorAll('.sample');

const noteSamplesAudio = document.querySelector('#note-audio');
const startIntroAudio = document.querySelector('#start-intro-audio');
const voiceSamplesAudio = document.querySelector('#voice-sample-audio');

pads.forEach(pad => pad.addEventListener('click', sampleContol));
pads.forEach(pad => pad.addEventListener('keydown', sampleContol));
