var firstScore = document.getElementById("score-1");
var secondScore = document.getElementById("score-2");

var count1 = 0;
var count2 = 0;

function incrementFunction1(){
    count1 = count1 + 1;
    firstScore.textContent = count1;
}
function incrementFunction2(){
    count1 = count1 + 2;
    firstScore.textContent = count1;
}
function incrementFunction3(){
    count1 = count1 + 3;
    firstScore.textContent = count1;
}

function incrementFunctionSecond1(){
    count2 = count2 + 1;
    secondScore.textContent = count2;
}
function incrementFunctionSecond2(){
    count2 = count2 + 2;
    secondScore.textContent = count2;
}
function incrementFunctionSecond3(){
    count2 = count2 + 3;
    secondScore.textContent = count2;
}

