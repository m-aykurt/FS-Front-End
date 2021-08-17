// let element;

// element = document.getElementById("todo-form")
// element = document.getElementById("task-title")

// element = document.getElementsByClassName("list-group-item")
// element = document.getElementsByTagName("li")[0]

// element1 = document.getElementsByTagName("div")
// element = Array.from(element1) 

// console.log(element)

const element = document.querySelector("#clear-todos")
// element.className = "btn btn-danger"
// element.style.marginLeft = "100px"
// element.href = "https://www.google.com.tr"
// element.target = "_blank"
// element.textContent = "Delete All"
// let element2 = document.querySelector("li:last-child")

const element2 = document.querySelectorAll("li:nth-child(odd)")
element2.forEach(function(e){
    e.style.background = "#ccc";
    e.style.color = "red"
})


console.log(element2)




