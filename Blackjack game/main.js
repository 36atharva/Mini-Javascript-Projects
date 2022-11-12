function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let firstCard = 12;
let secondCard = 9;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");


function startGame(){
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
    messageEl.textContent = message;
    sumEl.textContent += sum;
    cardEl.textContent = "Cards: " + firstCard + " and " + secondCard;
}