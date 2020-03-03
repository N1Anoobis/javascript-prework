function getMoveName(argMoveId) {
    console.log(argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nozyce';
        console.log(argMoveId);
    }

    printMessage(`Nie znam ruchu o id ${argMoveId} .`);
    return 'nieznany ruch';
}
//
function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);


    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Przegrywasz');
    }

}
//beagining of program
let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


//player choise passed to getMoveName
let playerMove = getMoveName(playerInput);


//computer choise passed to getMoveName
let computerMove = getMoveName(randomNumber);


// player and computer args passed to displayResult
displayResult(computerMove, playerMove);


//display in browser
function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}