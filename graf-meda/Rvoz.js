const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const btnPlayText = document.getElementById('playText');



let recognition = new webkitSpeechRecognition();
recognition.lang ='es-ESP'
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
  const results = event.results;
  const sentence = results[results.length - 1] [0].transcript;
  text.value += sentence;
}

recognition.onend = (event) => {
  console.log('the microphone stops listening');
}

recognition.onerror = (event) => {
  console.log(event.error)
}

btnStartRecord.addEventListener('click',() => {
  recognition.start();
});

btnStopRecord.addEventListener('click',() => {
  recognition.abort();
})

btnPlayText.addEventListener('click',() => {
  readText(text.value);
});

function readText(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
