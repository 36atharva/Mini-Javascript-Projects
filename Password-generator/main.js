const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("#button");
let password = document.querySelector("#password");


let passwordArray = new Array (15);
let randomChar;

function generatePass(){
    for(i=0; i<15; i++){
    let randomNumber = Math.floor (Math.random() *  characters.length);
    randomChar = characters[randomNumber];
    passwordArray.push(randomChar);    

}
    const finalPassword = passwordArray.join('');   
    password.textContent = finalPassword.trim();

}