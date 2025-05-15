
let player1 = {
    name: "Spelare1",
    score: 0
}

let player2 = {
    name: "Spelare2",
    score: 0
}

let players = [player1, player2];
let currentPlayer = 0;

// Slumpar ett tal mellan 1-6
function RandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

let diceImgs = [
    "dice1.png",   
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]

function rollDice() {
    let dice1 = RandomNumber();
    let diceImg1 = document.getElementById("diceImg");
    let dice = document.getElementById("dice");
    diceImg1.src = diceImgs[dice1 - 1];
    dice.innerHTML = dice1;
}

console.log("score" + player1.name);

function resetGame() {
    player1.score = 0;
    player2.score = 0;
    total1 = 0;
    total2 = 0;
    currentPlayer = 0;
    let score1 = document.getElementById("score" + player1.name);
    let score2 = document.getElementById("score" + player2.name);
    score1.innerHTML = player1.score;
    score2.innerHTML = player2.score;
    totalScore2.innerHTML = total2;
    totalScore1.innerHTML = total1;
}

function checkWinner() {
    if (total1 >= 100) {
        console.log(player1.score);
        alert(player1.name + " vinner!");
        resetGame();
    } else if (total2 >= 100) {
        alert(player2.name + " vinner!");
        resetGame();
    }
}

function addScore(plr, score, dice) {

    if (dice === 1) {

        let score = document.getElementById("score" + plr.name);
        plr.score = 0;
        score.innerHTML =plr.score;
        currentPlayer = (currentPlayer + 1) % players.length;
    } else {

        let score = document.getElementById("score" + plr.name);
        plr.score += dice;
        console.log("score" + plr.name);
        score.innerHTML = plr.score;

    }
    document.getElementById("score" + plr.name).innerHTML = plr.score;
}

let rollButton = document.getElementById("roll");

rollButton.addEventListener("click", function() {
    rollDice();
    addScore(players[currentPlayer], players[currentPlayer].score, parseInt(document.getElementById("dice").innerHTML));
});

let totalScore1 = document.getElementById("totalScore" + player1.name);
let totalScore2 = document.getElementById("totalScore" + player2.name);
let holdButton = document.getElementById("hold");

let total1 = 0
let total2 = 0

holdButton.addEventListener("click", function() {
    if (currentPlayer === 0  ) {
        total1 += player1.score;
        totalScore1.innerHTML = total1;
        player1.score = 0;


        let score = document.getElementById("score" + player1.name);
        score.innerHTML = player1.score;
        currentPlayer = 1;
        checkWinner();
    } else {

        total2 += player2.score;
        totalScore2.innerHTML = total2;
        player2.score = 0;
        
        let score = document.getElementById("score" + player2.name);
        score.innerHTML = player2.score;
        currentPlayer = 0;
        checkWinner();
    }
}
)
