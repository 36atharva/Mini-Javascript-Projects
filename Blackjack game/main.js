let firstCard;
let secondCard;
let hasBlackJack = false;
let isAlive = false;
let sum=0;
let arrayCards; 

let player = {
    name:"Per",
    chips:150
}

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " $" + player.chips;


let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

function startGame(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    arrayCards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}




function renderGame(){
    cardEl.textContent = "Cards: "; 
    sumEl.textContent = "Sum: " + sum;

    for(let i=0; i < arrayCards.length; i++){
        cardEl.textContent += arrayCards[i] + " ";
    }

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
    // console.log(message);
    messageEl.textContent = message;
    
}

function newCard(){
    // console.log("New card drawn");
    player.chips -= 50;
    if(player.chips >= 0 ){
        if(isAlive = true && hasBlackJack == false){
            let cardNew = getRandomCard();
            arrayCards.push(cardNew);
            sum += cardNew;
            playerEl.textContent = player.name + " $" + player.chips;
            renderGame();
        }
    }
    else {
        outOfChips();
    }
    

}

function outOfChips(){
    playerEl.textContent = "You are out of chips!";
}


