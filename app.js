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
            console.log("output = "+translatedAudio);
            fs.writeFile('morse-output.wav', translatedAudio, (err) => {
                // In case of a error throw err. 
                if (err) throw err;
            })
            console.log("The file was saved!");
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

// var fs = require('fs'); // reqire fileSystem node module
// fs.writeFile("pathToFile", "Content", function(err) {
//   if(err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });