const hangman = document.querySelectorAll('.corpse');
const mistakeLetters = document.getElementById('mistake-letters');
const letters = document.querySelectorAll('letter');
const notification = document.getElementById('notification-container');
const popup = document.getElementById('popup-container');
const popupMessage = document.getElementById('popup-message');
const wordContainer = document.getElementById('words-container');
const wrongLetterContainer = document.querySelector('.wrong-letters');
const playAgainBtn = document.getElementById('pop-button')

const words = ['pride', 'lust', 'greed', 'sloth', 'envy', 'wrath', 'gluttony'];

let wordSelect = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// function

function displayWord() {
     wordContainer.innerHTML = `
     ${wordSelect.split('').map( letter => `
     <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
     </span>`).join('')}
     `;

     const innerword = wordContainer.innerText.replace(/\n/g, '');
     const wordword = innerword.replace(/\s/g, '');

     if(wordword === wordSelect) {
        popupMessage.innerText = 'Congratulations! You won';
        popup.style.display = 'flex';
     }
};

function updateWrongLettersEl() {
    wrongLetterContainer.innerHTML = ` 
    ${wrongLetters.map(letter =>  `<span>${letter}</span>`  )}
    `;

    hangman.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    if(wrongLetters.length === hangman.length) {
        popupMessage.innerText = 'you Loast';
        popup.style.display = 'flex';
    }
}

function showNotification () {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000)
}

// Keydown letter press
window.addEventListener('keydown', e => {

    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if(wordSelect.includes(letter)) {
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

playAgainBtn.addEventListener('click', () => {
    // Empty Arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    wordSelect = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
});
displayWord();


