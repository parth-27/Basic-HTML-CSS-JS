import { handleResult } from './handlers';    // don't need .js at because we are using parcel for hosting.
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      color =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background: ${color};">${color}</span>`
    )
    .join('');
}

// for speech recognition.
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if their browser supports this
  // checking if property named SpeechRecognition is present in window or not.
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco. ');
    return;
  }

  // it does work
  console.log('Starting...');
  
  // make a new speech reco
  const recognition = new SpeechRecognition();
  recognition.continuous = true;    // whether look for continous speech recognition or look for continous speech recognition.
  recognition.interimResults = true;    //  will give the results while we are speking.
  recognition.onresult = handleResult;  //  event listener.
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
