let words = ["barcelona", "tarragona", "valencia", "girona", "puigcerda", "pamplona", "castelldefels"];
let correctWord = "";
let shuffedWord = "";
let score = 0;

const refreshButt = document.getElementById("refreshButt");
const checkWord = document.getElementById("checkWord");
const wordMixed = document.getElementById("wordMixed");
const inputWord = document.getElementById("inputWord");
const scoreElem = document.getElementById("scoreElem");

refreshButt.addEventListener("click", makeWords);
checkWord.addEventListener("click", checkWordFn);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}   

// Generar una nueva palabra
function makeWords(event) {
    if(event) event.preventDefault(); 

    correctWord = words[Math.floor(Math.random() * words.length)];

    let wordsArray = correctWord.split("");
    let wordsArrayShuff = [...wordsArray]; 
    shuffle(wordsArrayShuff);
    
    while (wordsArrayShuff.join("") === correctWord && correctWord.length > 1) {
        shuffle(wordsArrayShuff);
    }
    
    shuffedWord = wordsArrayShuff.join("");

    wordMixed.textContent = shuffedWord;
    inputWord.value = ""; 
}

function checkWordFn(event) {
    let newWord = inputWord.value.toLowerCase().trim();
    
    if (!newWord) {
        alert("Please enter a word to check!");
        return;
    }

    if (newWord === correctWord) {
        alert("¡Enhorabuena! Has acertado.");
        score++; 
        scoreElem.textContent = score; 
        makeWords(); 
    } else {
        alert("Uy, esa no es. ¡Prueba de nuevo!");
    }
}


makeWords();