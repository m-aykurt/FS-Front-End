const check = document.querySelector(".check");
const prompt = document.querySelector(".prompt");
let list = ["ROCK","PAPER","SCİSSORS"]
randomNumber = Math.floor(Math.random()*3);
const playerSection = prompt("enter your value: ").toUpperCase();

function computerPlay(){
    const computerSection = list[randomNumber]
    return computerSection
}







// check.addEventListener("click",computerPlay)
