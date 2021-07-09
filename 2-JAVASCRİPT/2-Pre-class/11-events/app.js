// const text = document.querySelector(".title");
// const changeColor  = document.querySelector(".changeColor");

// // text.style.color = "red";

// // text.classList.add("change"); // add
// // text.classList.remove("change"); // remove

// changeColor.addEventListener("click",function(){
//     // text.classList.add("change")
//     text.classList.toggle("change")
// })

const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input")
console.log(listInput);
const addListButton = document.querySelector(".addListButton");



addListButton.addEventListener("click",function(){
    // create an li out of thin air

    const newLi = document.createElement("LI");
    const liContent = document.createTextNode("aaa");
    console.log(listInput.value);
    // add the input value inside that new li
    newLi.appendChild(liContent);

    // attaching the li to the user
    userList.appendChild(newLi)

})











// console.log(userList);

// for (user of userList){
//     user.addEventListener("click",function(){
//         this.style.color = "red";
//     })
// }

