let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


//player choise
let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == 2) {
    playerMove = 'papier'
} else if (playerInput == 3) {
    playerMove = 'nozyce'
}

printMessage('Twój ruch to: ' + playerMove);




//computer choise
let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nozyce'
}

console.log('Wylosowana liczba to: ' + randomNumber);


printMessage('Mój ruch to: ' + computerMove);


// logic
if (playerMove == 'nieznany ruch') {
    printMessage('wpisz liczbe 1, 2 lub 3');

} else {

    if (computerMove == playerMove) {
        printMessage('Remis!');
    } else if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'nozyce') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nozyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Przegrywasz');
    }
}


//display

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}