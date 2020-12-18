(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
            console.log(translatedAudio);
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


},{"fs":1}]},{},[2]);
