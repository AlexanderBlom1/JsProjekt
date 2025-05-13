// Slumpar ett tal mellan 1-6
function RandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(RandomNumber())


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

rollDice();