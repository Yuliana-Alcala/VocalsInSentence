let inputDom = document.getElementById("inputId");
let btnShowDom = document.getElementById("btnShowId");
let divDom = document.getElementById("divId");
let btnSearchDom = document.getElementById("btnSearchId");

btnShowDom.addEventListener("click", getSentence);
btnSearchDom.addEventListener("click", searchVocals);


function getSentence() {    
    phrase = inputDom.value
    divDom.innerHTML = "La frase es: " + phrase
}


function searchVocals(){
    phrase = inputDom.value
    const vocals = ['a','e','i','o','u'];
    let newArrayPhrase = [];
    for (index = 0; index < phrase.length; index++) {
        
        if (vocals.includes(phrase[index]))
        {
            newArrayPhrase += phrase[index];            
        }
    }
    divDom.innerHTML = "La frase contiene las siguientes vocales: " + newArrayPhrase
}