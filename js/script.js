let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');



let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
}else if (playerInput == 2) {
    playerMove = 'papier'
} else if (playerInput == 3) {
    playerMove = 'nozyce'
}

printMessage('Twój ruch to: ' + playerMove);





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

















function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}