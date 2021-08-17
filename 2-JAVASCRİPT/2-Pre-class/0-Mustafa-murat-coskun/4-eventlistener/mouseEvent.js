const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#task-title");

// click

// title.addEventListener("click", run)
// title.addEventListener("click", run)

//mouse down

title.addEventListener("mousedown", run)

//mouse over

title.addEventListener("mouseover", run)

// mouse out
title.addEventListener("mouseout", run)


function run(e){
    console.log(e.type)
}
