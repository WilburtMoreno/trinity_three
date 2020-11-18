const hangman = document.querySelectorAll('.corpse');
const mistakeLetters = document.getElementById('mistake-letters');
const letters = document.querySelectorAll('letter');
const notification = document.getElementById('notification-container');
const popup = document.getElementById('popup-container');
const wordContainer = document.getElementById('words-container');

const words = ['pride', 'lust', 'greed', 'sloth', 'envy', 'wrath'];
const wordSelect = words[Math.floor(Math.random() * words.length)];
let letter = [];

// function
function letterSplit(letters) {
    for(let i = 0; i < letters.length ; i++ ){
        wordContainer.innerHTML += `<div class="letter">${letters.charAt(i)}</div>`;
    }
}
function reset() {
    while(wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
}
function init() {
    reset();
    letterSplit(wordSelect);
}

// letters.forEach(e => {
//     e.addEventListener('keyUp', (e) => {
//         console.log(e.key);
//         if(e.key == 's') {
//             console.log('i');
//         }
//     });
// });
window.addEventListener('keyup', (e) => {
    console.log(e.key);
    if(e.key == 'a') {
        console.log('aaaaaa');
    }
});
console.log(window);
init();

