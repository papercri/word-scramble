
//1. selecciona una palabra del array words al azar, y guardala en la variable "correctWord"

//2. shuffle la palabra
//2.1 creo array de letras de la palabra  --> split("")
//2.2 mezclar posiciones del array
//2.3 vuelvo a juntar las letras para crear la palabra mezclada --> join("")

//3. wordText.innerHTML = palabraMezclada

//4. añadir click event listener a boton CheckWord, conectar con callback que en cuando se clique haz lo siguiente:

//4.1 acceder al input para captar palabra de usuario ---> let palabraUsuario = inputField.value
//4.2 comparar con palabra seleccionada
//4.3 si correcto, alert enhorabuena  ---> resetear el juego
//4.4 si no, dile que pruebe mas



let words = ["barcelona", "tarragona", "valencia", "girona", "puigcerda", "pamplona", "castelldefels"];
let correctdWord = null;
let shuffedWord = null;
let newWord = null;

const refreshButt = document.getElementById("refreshButt");
const checkWord = document.getElementById("checkWord");

const wordMixed = document.getElementById("wordMixed");
const inputWord = document.getElementById("inputWord");


refreshButt.addEventListener("click", makeWords);
checkWord.addEventListener("click", checkWordFn);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}   


function makeWords(event){
    event.preventDefault();
    for (let word of words){
        let correctWord = words[Math.floor(Math.random() * words.length)];
        let wordsArray = correctWord.split("");
        wordsArrayShuff = [...wordsArray];
        shuffle(wordsArrayShuff);
        shuffedWord = wordsArrayShuff.join("");
        correctdWord = wordsArray.join("");
    }
    wordMixed.textContent = shuffedWord;
}
function checkWordFn(event){
    newWord = inputWord.value;
    if(newWord===correctdWord){
        console.log("bien");
    }else{
        console.log("mal");
    }
}
