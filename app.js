var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output")

btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        // .then(json => console.log(json.contents.translated))---> puts the output on console..but we want it on output box.
        // here in the 2nd then json is just a var name you can use anything like abcd in place of json
        .catch(errorHandler)
    // look below for you we didnt pass error arg to errorHandler fnc
}


var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslationURL(text) {
    return serverURL + "?text=" + text ;
}

function errorHandler(error) {
    console.log("error ocuured", error);
    alert('Something wrong with server, Please try again after sometime');
}

// var fs = require('fs'); // reqire fileSystem node module
// fs.writeFile("pathToFile", "Content", function(err) {
//   if(err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });