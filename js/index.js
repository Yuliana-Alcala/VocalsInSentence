let inputDom = document.getElementById("inputId");
let btnDom = document.getElementById("btnId");
let divDom = document.getElementById("divId");

btnDom.addEventListener("click", getSentence);


function getSentence() {
    div = divDom
    phrase = inputDom.value
    div.innerHTML = "La frase es: " + phrase
}

