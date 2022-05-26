// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

function isEven(number) {
    
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const buttonEven = document.getElementById('pari');
const buttonShots = document.getElementById('dispari');
const buttonSubmit = document.getElementById('submit');
const buttonRestart = document.getElementById('restart');
const container = document.querySelector('.container');
const inputContainer = document.querySelector('.input-container');

buttonEven.addEventListener('click', function() {
    const result = document.querySelector('.result');
    buttonEven.classList.add('active');
    buttonShots.classList.add('d-none');

    inputContainer.classList.remove('d-none');
    const userInput = document.getElementById('userInput');
    buttonSubmit.addEventListener('click', function(){
        const userNumber = userInput.value;     
        if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
            result.innerHTML = `${userNumber} non è un valore corretto.`;
        } else {
            const computerNumber = getRandomInt(1,5);
            const somma = parseInt(userNumber) + parseInt(computerNumber);

            if (isEven(somma)) {
                result.innerHTML = 
                `Tu hai scelto: ${userNumber} </br>
                Al computer è uscito: ${computerNumber}. </br>
                La somma è: ${somma}. </br>
                Hai vinto!
                `;
            } else {
                result.innerHTML =`Tu hai scelto: ${userNumber} </br>
                Al computer è uscito: ${computerNumber}. </br>
                La somma è: ${somma}. </br>
                Hai perso!
                `;
            }

        }

    })
    
});

buttonShots.addEventListener('click', function() {
    const result = document.querySelector('.result');
    buttonShots.classList.add('active');
    buttonEven.classList.add('d-none');

    inputContainer.classList.remove('d-none');
    const userInput = document.getElementById('userInput');
    buttonSubmit.addEventListener('click', function () {
        const userNumber = userInput.value;
        if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
            result.innerHTML = `${userNumber} non è un valore corretto.`;
        } else {
            const computerNumber = getRandomInt(1, 5);
            const somma = parseInt(userNumber) + parseInt(computerNumber);

            if (!isEven(somma)) {
                result.innerHTML =
                    `Tu hai scelto: ${userNumber} </br>
                Al computer è uscito: ${computerNumber}. </br>
                La somma è: ${somma}. </br>
                Hai vinto!
                `;
            } else {
                result.innerHTML = `Tu hai scelto: ${userNumber} </br>
                Al computer è uscito: ${computerNumber}. </br>
                La somma è: ${somma}. </br>
                Hai perso!
                `;
            }

        }

    })
    
    
});

buttonRestart.addEventListener('click', function () {
    if (buttonEven.classList.contains('active')) {
        buttonShots.classList.remove('d-none');
        buttonEven.classList.remove('active');
        inputContainer.classList.add('d-none');
    }
    if (buttonShots.classList.contains('active')) {
        buttonEven.classList.remove('d-none');
        buttonShots.classList.remove('active');
        inputContainer.classList.add('d-none');
    }

    const userInput = document.getElementById('userInput');
    userInput.value = '';

    const result = document.querySelector('.result');
    result.innerHTML = '';


});