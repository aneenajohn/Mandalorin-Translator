var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output")

btnTranslate.addEventListener("click", clickHandler)


const fs = require('fs');

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedAudio = json.contents.translated.audio;
            fs.writeFile('morse-output.wav', translatedAudio, (err) => {
                // In case of a error throw err. 
                if (err) throw err;
            })
            // outputDiv.innerText = translatedText;
            // console.log(translatedText);
            var translatedAudioElement = new Audio('morse-output.wav');
            translatedAudioElement.play();
        })
}



var serverURL = "http://api.funtranslations.com/translate/morse/audio.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text + "&speed=7&tone=700";
}

