let difficulty = '';
const playersMoves = [];
const GeneralArray = [];
let games = 0;
let wins = 0;
let draws = 0;
let losses = 0;

function playGame(playerInput) {

    //beagining of program
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    clearMessages()

    //player choise passed to getMoveName
    let playerMove = getMoveName(playerInput);

    //computer choise passed to getMoveName
    let computerMove = getMoveName(randomNumber);

    // player and computer args passed to displayResult
    displayResult(computerMove, playerMove, difficulty);

    //main function
    function getMoveName(argMoveId) {

        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nozyce';
        }
    }
    //display result on all difficultys levels 
    function displayResult(argComputerMove, argPlayerMove, difficulty) {
        if (difficulty == 'hard' && argComputerMove == argPlayerMove) {
            printMessage('Przegrywasz');
            if (argPlayerMove == 'papier') {
                argComputerMove = 'nozyce'
            }
            if (argPlayerMove == 'kamień') {
                argComputerMove = 'papier'
            }
            if (argPlayerMove == 'nozyce') {
                argComputerMove = 'kamień'
            }
            // printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
            counter('lose');
            addToArray()
            return
        }
        if (difficulty == 'easy' && argComputerMove == argPlayerMove) {
            printMessage('Ty wygrywasz!');
            if (argPlayerMove == 'papier') {
                argComputerMove = 'kamień'
            }
            if (argPlayerMove == 'kamień') {
                argComputerMove = 'nozyce'
            }
            if (argPlayerMove == 'nozyce') {
                argComputerMove = 'papier'
            }
            // printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
            counter('win');
            addToArray()
            return
        } else

        if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
            counter('draw');
            addToArray()
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
            counter('win');
            addToArray()
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
            counter('win');
            addToArray()
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            counter('win');
            addToArray()
        } else {
            printMessage('Przegrywasz');
            counter('lose');
            addToArray()
            return
        }

        function addToArray() {
            printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
            // push moves into array and add id to it
            playersMoves.push([argComputerMove, argPlayerMove]);
            playersMoves.forEach((item, key) => {
                item.id = key;
            })
        }
    }
    //score counter
    function counter(score) {
        let setGames = document.getElementById("num-p");
        setGames.innerHTML = games += 1;
        if (score === 'win') {
            let setWins = document.getElementById("wins");
            setWins.innerHTML = wins += 1;
        } else if (score === 'lose') {
            let setLosses = document.getElementById("losses");
            setLosses.innerHTML = losses += 1;
        } else if (score === 'draw') {
            let setDraws = document.getElementById("draws");
            setDraws.innerHTML = draws += 1;
        }
        //add date and display it
        var paragrafMsg = document.createElement("p");
        var date = new Date();
        // get the date as a string
        var n = date.toDateString();
        // get the time as a string
        var time = date.toLocaleTimeString();
        paragrafMsg.innerHTML = n + "" + time + "" + " " + score;
        document.getElementById("myDIV").appendChild(paragrafMsg);
        //add results in to array with id
        GeneralArray.push(paragrafMsg);
        GeneralArray.forEach((item, key) => {
            item.id = key;
            document.getElementById("myDIV").appendChild(item)
        })
    }
}

// evenent listiners for buttons
document.getElementById('play-rock').addEventListener('click', function () {
    loaderDelay()
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    loaderDelay()
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    loaderDelay()
    playGame(3);
});
// funcion delay loader 
function loaderDelay() {
    document.getElementById("scores").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(function () {
        document.getElementById("scores").style.display = "flex";
        document.getElementById("messages").style.display = "block";
        document.getElementById("loader").style.display = "none"
    }, 1000);
}

// evenent listiners for game results log
document.getElementById('log').addEventListener('click',
    function () {
        var x = document.getElementById("myDIV");
        let btn = document.getElementById("log");
        if (x.style.display === "block") {
            x.style.display = "none";
            btn.style.transform = 'rotate(-270deg)';
        } else {
            x.style.display = "block";
            btn.style.transform = 'rotate(270deg)';
        }
    });

// evenent listiners used for display of results stored in array
document.getElementById('myDIV').addEventListener('click', function (e) {
    alert(`computer move: ${playersMoves[e.target.id][0]}, player move: ${playersMoves[e.target.id][1]}`)
});
// evenent listiners for game difficulty level
document.getElementById('difficulty').addEventListener('change', function (e) {
    difficulty = e.target.value;
});