// // dinamik element silme

// const todoList = document.querySelector("ul.list-group")
// const todos = document.querySelectorAll("li.list-group-item")

// // remove child

// todoList.removeChild(todoList.lastElementChild)
// todoList.removeChild(todos[1])
// todoList.removeChild(todos[2])

// console.log(todoList)
// console.log(todos)


// //              ELEMENT CHANGİNG

// const cardBody = document.querySelectorAll(".card-body")[1]
// const newElement = document.createElement("h3")

// newElement.className = "card-title"
// newElement.id = "tasks-title"
// newElement.textContent = "yeni todo lar"


// //eski element

// const oldElement = document.querySelector("#tasks-title")

// cardBody.replaceChild(newElement, oldElement)

// console.log(oldElement)





const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList;

todoInput.classList.add("newClass")
element = todoInput;
todoInput.classList.add("newClass2")
element = todoInput;
todoInput.classList.remove("newClass2")
element = todoInput.getAttribute("placeholder")
todoInput.setAttribute("title", "Input")
element = todoInput
element = todoInput.hasAttribute("name")


console.log(element)