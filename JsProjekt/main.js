
let player1 = {
    name: "Spelare1",
    score: 0
}

let player2 = {
    name: "Spelare2",
    score: 0
}

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

function addScore(plr, score, dice) {
    if (dice === 1) {
        plr.score = 0;
        alert(plr.name + " fick 1 och förlorade alla poäng!");
    } else {
        plr.score += dice;
    }
    document.getElementById("score" + plr).innerHTML = plr.name + ": " + plr.score;
}

let rollButton = document.getElementById("roll");

rollButton.addEventListener("click", function() {
    rollDice();
    addScore(player1, player1.score, dice);
    addScore(player2, player2.score, dice);
});