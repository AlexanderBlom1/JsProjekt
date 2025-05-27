

// Skapa en spelare med namn och poäng
let player1 = {
    name: "Spelare1",
    score: 0
}

let player2 = {
    name: "Spelare2",
    score: 0
}

// Skapa en array med spelarna
let players = [player1, player2];
let currentPlayer = 0;

// Slumpar ett tal mellan 1-6
function RandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Skapar en array med bilder på tärningarna
// Tärningarna är i ordningen 1-6
let diceImgs = [
    "dice1.png",   
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
]

// reset knappen
let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    resetGame();
});

let dice1 = 0;

// Slumpar ett tal mellan 1-6 och visar bilden på tärningen utifrån talet
function rollDice() {
    dice1 = RandomNumber();
    let diceImg1 = document.getElementById("diceImg");
    let dice = document.getElementById("dice");
    diceImg1.src = diceImgs[dice1 - 1];
    
}

console.log("score" + player1.name);

// Skapar en funktion som resetar spelet
function resetGame() {

    player1.score = 0;
    player2.score = 0;
    total1 = 0;
    total2 = 0;
    currentPlayer = 0;
    totalSpelare1.style.backgroundColor = "rgb(223, 207, 187)";
    totalSpelare2.style.backgroundColor = "rgb(178, 221, 234)";
    let score1 = document.getElementById("score" + player1.name);
    let score2 = document.getElementById("score" + player2.name);
    score1.innerHTML = "Current: " + player1.score;
    score2.innerHTML = "Current: " + player2.score;
    totalScore2.innerHTML = "Total: " + total2;
    totalScore1.innerHTML = "Total: " + total1;
}


// kollar ifall någon av spelarna har mer än 100 poäng
function checkWinner() {
    if (total1 >= 20) {
        console.log(player1.score);
        alert(player1.name + " vinner!");
        resetGame();
    } else if (total2 >= 20) {
        alert(player2.name + " vinner!");
        resetGame();
    }
}


// funktion för att lägga till poäng till den aktiva spelaren
function addScore(plr, score, dice) {

    if (dice === 1) {

        let score = document.getElementById("score" + plr.name);
        plr.score = 0;
        score.innerHTML = "Current: " + score;
        currentPlayer = (currentPlayer + 1) % players.length;
        // byter färg på spelarens bakgrund vilket visar vilken spelare som är aktiv
        if (currentPlayer === 0) {
            totalSpelare1.style.backgroundColor = "rgb(223, 207, 187)";
            totalSpelare2.style.backgroundColor = "rgb(178, 221, 234)";
            } else {
            totalSpelare1.style.backgroundColor = "rgb(253, 237, 217)";
            totalSpelare2.style.backgroundColor = "rgb(148, 191, 204)";
        }
    } else {

        let score = document.getElementById("score" + plr.name);
        plr.score += dice;
        console.log("score" + plr.name);
        score.innerHTML = "Current: " + plr.score;

    }
    document.getElementById("score" + plr.name).innerHTML = "Current: " + plr.score;
}

let rollButton = document.getElementById("roll");

// knappen för att slå tärningen
rollButton.addEventListener("click", function() {
    rollDice();
    addScore(players[currentPlayer], players[currentPlayer].score, dice1);
});

let totalScore1 = document.getElementById("totalScore" + player1.name);
let totalScore2 = document.getElementById("totalScore" + player2.name);
let holdButton = document.getElementById("hold");

let total1 = 0
let total2 = 0

let totalSpelare1 = document.getElementById("totalScore" + player1.name);
let totalSpelare2 = document.getElementById("totalScore" + player2.name);

// knappen för att hålla tärningen
holdButton.addEventListener("click", function() {
    if (currentPlayer === 0  ) {

        totalSpelare1.style.backgroundColor = "rgb(253, 237, 217)";
        totalSpelare2.style.backgroundColor = "rgb(148, 191, 204)";

        total1 += player1.score;
        totalScore1.innerHTML = "Total: " + total1;
        player1.score = 0;


        let score = document.getElementById("scoreSpelare1");
        score.innerHTML = "Current: " + player1.score;
        currentPlayer = 1;
        checkWinner();
    } else {
        totalSpelare1.style.backgroundColor = "rgb(223, 207, 187)";
        totalSpelare2.style.backgroundColor = "rgb(178, 221, 234)";
        total2 += player2.score;
        totalScore2.innerHTML = "Total: " + total2;
        player2.score = 0;
        
        let score = document.getElementById("scoreSpelare2");
        score.innerHTML = "Current: " +  player2.score;
        currentPlayer = 0;
        checkWinner();
    }
}
)
// resetar spelet i början för att sätta spelarna till 0 för säkerhetskull
resetGame();