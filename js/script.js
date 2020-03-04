function playGame(playerInput) {

//beagining of program
let randomNumber = Math.floor(Math.random() * 3 + 1);
clearMessages()

//player choise passed to getMoveName
let playerMove = getMoveName(playerInput);

//computer choise passed to getMoveName
let computerMove = getMoveName(randomNumber);

// player and computer args passed to displayResult
displayResult(computerMove, playerMove);

    function getMoveName(argMoveId) {
        console.log(argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nozyce';
        }
    }
    
    function displayResult(argComputerMove, argPlayerMove) {
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
}

// enent listiners
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});