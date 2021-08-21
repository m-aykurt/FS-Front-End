let x = 0;

const counter = document.querySelector("#counter");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

counter.innerText = x
increase.addEventListener("click",function(){
    x +=1;
    counter.innerText=x;
    console.log(x)
})