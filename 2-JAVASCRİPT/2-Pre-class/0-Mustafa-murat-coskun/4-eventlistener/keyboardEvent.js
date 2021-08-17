// const filterInput = document.getElementById("filter");
// const todoForm = document.querySelector("#todo-form");

// // console.log(filterInput)

// // filterInput.onclick = function(){
// //     console.log("naber")
// // }

// filterInput.addEventListener("focus", (e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.target.className)
//     console.log(e.target.placeholder)
// })


// todoForm.addEventListener("submit", submitForm);

// function submitForm(e){
//     console.log("submit eventi")

//     e.preventDefault()
//     console.log(e.type) 
// }


////////////////////////// keypress

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.which)
//     console.log("naber")
//     console.log(e.target)
// }


// keydown


// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.key)

// }

// KEYUP

// document.addEventListener("keyup", run);

// function run(e){
//     console.log(e.key)
// }


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e){
    header.textContent = e.target.value;
}