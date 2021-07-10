// const text = document.querySelector(".title");
// const changeColor  = document.querySelector(".changeColor");

// // text.style.color = "red";

// // text.classList.add("change"); // add
// // text.classList.remove("change"); // remove

// changeColor.addEventListener("click",function(){
//     // text.classList.add("change")
//     text.classList.toggle("change")
// })

// const userList = document.querySelectorAll(".name-list li");
// const listInput = document.querySelector(".list-input")
// console.log(listInput);
// const addListButton = document.querySelector(".addListButton");



// addListButton.addEventListener("click",function(){
//     // create an li out of thin air

//     const newLi = document.createElement("LI");
//     const liContent = document.createTextNode("aaa");
//     console.log(listInput.value);
//     // add the input value inside that new li
//     newLi.appendChild(liContent);

//     // attaching the li to the user
//     userList.appendChild(newLi)

// })

// console.log(userList);

// for (user of userList){
//     user.addEventListener("click",function(){
//         this.style.color = "red";
//     })
// }




// Keyboard Events

// const input = document.querySelector('#txtTaskName');
// const form = document.querySelector('form');
// const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
// input.addEventListener('keypress',eventHandler);
// input.addEventListener('focus',eventHandler);
// input.addEventListener('blur',eventHandler);
// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler);
// form.addEventListener('submit',eventHandler);

// select.addEventListener('change',eventHandler);

// function eventHandler(e){
//        console.log('event type '+ e.type);
//     // console.log('key code :'+e.keyCode);
//        console.log('value :'+e.target.value);

//     // e.target.style.backgroundColor='yellow';

//     e.preventDefault();
// }