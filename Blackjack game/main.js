function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let firstCard = 6;
let secondCard = 9;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

let message = "";

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
}
else if(sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true;
}
else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

console.log(message);