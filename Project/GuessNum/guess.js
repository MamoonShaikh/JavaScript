let random = parseInt(Math.random() * 100 + 1)
const guessfield = document.querySelector('#guessfeild')
const submit = document.querySelector('#submit')
const preguess = document.querySelector('.guess')
const guessremain = document.querySelector('.guessremain')
const lowOrHi = document.querySelector('.lowOrHi')
const result = document.querySelector('.result')

const p = document.createElement('p');

let prevguess = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessfield.value)
        console.log(guess)
        validGuess(guess)
    })

}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter valid number')
    }
    else if (guess < 1) {
        alert('enter more then one')
    }
    else if (guess > 100) {
        alert('enter less then 100')
    }
    else {
        prevguess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over , rendom number was ${random}`)
            EndGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`you guess is right `)
        EndGame()
    }
    else if (guess < random) {
        displayMessage(`Number is too low `)

    }
    else if (guess > random) {
        displayMessage(`Number is too high `)

    }
}
function displayGuess(guess) {
    guessfield.value = '';
    preguess.innerHTML += `${guess} `;
    numGuess++;
    guessremain.innerHTML = `${10 - numGuess}`

}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function EndGame() {
    guessfield.value = '';
    guessfield.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    NewGame()
}
function NewGame() {
    const newgamebtn = document.querySelector('#newgame')
    newgamebtn.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1)
        preguess = []
        numGuess = 1;
        guessfield.value = '';
        guessremain.innerHTML = `${10 - numGuess}`
        guessfield.removeAttribute('disabled');
        result.removeChild(p);
        playGame=true;
    })

}
