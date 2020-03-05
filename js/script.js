function playGame(playerInput) {
    function getMoveName(argMoveId) {

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
            printMessage('Ty wygrywasz!');
            counter('win');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
            counter('win');
        } else if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            counter('win');
        } else {
            printMessage('Przegrywasz');
            counter('lose');
        }
        playersMoves.push([argComputerMove, argPlayerMove]);
        playersMoves.forEach((item, key) => {
            item.id = key;
            // document.getElementById("myDIV").appendChild(item)

        })
    }



    function counter(score) {
        // games += 1;
        let setGames = document.getElementById("num-p");
        setGames.innerHTML = games += 1;
        console.log(games)
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
        var paragrafMsg = document.createElement("p");
        var date = new Date();
        // get the date as a string
        var n = date.toDateString();
        // get the time as a string
        var time = date.toLocaleTimeString();

        // log the date in the browser console
        // console.log('date:', n);
        // log the time in the browser console
        // console.log('time:', time);
        paragrafMsg.innerHTML = n + "" + time + "" + " " + score;
        document.getElementById("myDIV").appendChild(paragrafMsg);
        GeneralArray.push(paragrafMsg);
        // GeneralArray.push(...playersMoves)
        // paragrafMsg.textContent = "";

        GeneralArray.forEach((item, key) => {
            item.id = key;
            document.getElementById("myDIV").appendChild(item)

        })
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


}

function log() {
   
}

let games = 0;
let wins = 0;
let draws = 0;
let losses = 0;
// enent listiners
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

document.getElementById('log').addEventListener('click',
    function () {
        var x = document.getElementById("myDIV");
        let btn = document.getElementById("log");
        if (x.style.display === "block") {
            console.log(x.display)
            x.style.display = "none";
            
           
            btn.style.transform = 'rotate(-270deg)';
        } else {
            x.style.display = "block";
            // let btn = document.getElementById("log");
            btn.style.transform = 'rotate(270deg)';
        }

    });



function loaderDelay() {
    document.getElementById("scores").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("loader").style.display = "block";
    setTimeout(function () {
        document.getElementById("scores").style.display = "flex";
        document.getElementById("messages").style.display = "block";
        document.getElementById("loader").style.display = "none"
    }, 1000);
    // function alertConsole() {
    //     alert(`${playersMoves[e.target.id]}`) 
}
document.getElementById('myDIV').addEventListener

// document.querySelectorAll('.log-display').addEventListener
('click', function (e) {
    // console.log(e.target)

    // if (!e.target) {
    //     return;
    // }

    // if (e.target.matches('p')) {

    alert(`computer move: ${playersMoves[e.target.id][0]}, player move: ${playersMoves[e.target.id][1]}`)
    // confirm(`${GeneralArray[e.target.id].innerText}`)
    // }


});
// };



const playersMoves = [];
const GeneralArray = [];