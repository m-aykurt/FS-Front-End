const btn = document.querySelector("#btn");
console.log(btn)

btn.addEventListener("click", darkFunc)

function darkFunc(){
    const element = document.body;
    element.classList.toggle("dark-mode")
}