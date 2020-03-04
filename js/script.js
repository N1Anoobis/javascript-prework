function playGame(playerInput) {
    function getMoveName(argMoveId) {
        // console.log(argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nozyce';
        }
    }
    //
    function displayResult(argComputerMove, argPlayerMove) {
        printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);

        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
            counter('draw');
            
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!'); counter('win');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!'); counter('win');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!'); counter('win');
        } else {
            printMessage('Przegrywasz');
            counter('lose');
        }

    }

    function counter(score) {
       games += 1;
       console.log(games)
        if(score === 'win') {
          let setWins = document.getElementById("wins");
          setWins.innerHTML = wins += 1;
        }
        else if(score === 'lose') {
            
          let setLosses = document.getElementById("losses");
          setLosses.innerHTML = losses += 1;
        }
        else if(score === 'draw'){
          let setDraws = document.getElementById("draws");
          setDraws.innerHTML = draws += 1;
        }
      }
    //beagining of program
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    clearMessages()
    
    // console.log(games)
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
   
}
let games = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;
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