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
    divDom.innerHTML = "<h2>La frase es: " + phrase + "</h2>";
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
    

    divDom.innerHTML = "<h2>La frase contiene las siguientes vocales: " + JSON.stringify(uniqueVowels)+"</h2>";
    
}

function deleteDuplicity(){
    phrase = inputDom.value
    const vocals = ['a','e','i','o','u'];
    let newArrayPhrase = [];
    
    for (let index = 0; index < phrase.length; index++) {        
        if (vocals.includes(phrase[index]))
        {   
            if (!newArrayPhrase.includes(phrase[index]))
                newArrayPhrase.push(phrase[index]);    
               
        }
    }
    
    divDom.innerHTML = "<h2>La frase contiene las siguientes vocales: " + JSON.stringify(newArrayPhrase)+"</h2>";
   


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

    divDom.innerHTML = "<h2>La frase contiene las siguientes vocales: " + phraseString + "</h2>";
    console.log(typeof(phraseString))

}