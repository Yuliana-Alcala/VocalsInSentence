let inputDom = document.getElementById("inputId");
let btnShowDom = document.getElementById("btnShowId");
let divDom = document.getElementById("divId");
let btnSearchDom = document.getElementById("btnSearchId");
let btnDuplicityDom = document.getElementById("btnDuplicityId");
let btnGetVocalsDom = document.getElementById("btnGetVocals");

btnShowDom.addEventListener("click", getSentence);
btnSearchDom.addEventListener("click", searchVocals);
btnDuplicityDom.addEventListener("click", deleteDuplicity);
btnGetVocalsDom.addEventListener("click",  getVocals);

function getSentence() {    
    phrase = inputDom.value
    divDom.innerHTML = "La frase es: " + phrase
}


function searchVocals(){
    phrase = inputDom.value
    const vocals = ['a','e','i','o','u'];
    let newArrayPhrase = [];
    
    for (let index = 0; index < phrase.length; index++) {
        
        if (vocals.includes(phrase[index]))
        {   
            newArrayPhrase.push(phrase[index]);         
        }
    }
    let uniqueVowels = [...new Set(newArrayPhrase)];
    divDom.innerHTML = "La frase contiene las siguientes vocales: " + JSON.stringify(uniqueVowels)
    
}

function deleteDuplicity(){
    phrase = inputDom.value
    const vocals = ['a','e','i','o','u'];
    let newArrayPhrase = [];
    
    for (let index = 0; index < phrase.length; index++) {        
        if (vocals.includes(phrase[index]))
        {  
            newArrayPhrase.push(phrase[index]);    
              
        }
    }    
    divDom.innerHTML = "La frase contiene las siguientes vocales: " + JSON.stringify(newArrayPhrase)

}

function getVocals(){
    phrase = inputDom.value
    const vocals = ['a','e','i','o','u'];
    let newArrayPhrase = [];
    
    for (let index = 0; index < phrase.length; index++) {
        
        if (vocals.includes(phrase[index]))
        {   
            newArrayPhrase.push(phrase[index]);         
        }
    }
    let uniqueVowels = [...new Set(newArrayPhrase)];
    let phraseString = uniqueVowels.join(", ");

    divDom.innerHTML = "La frase contiene las siguientes vocales: " + phraseString;
    console.log(typeof(phraseString))

}