let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2")
const cardRow = document.querySelector(".card")

value = cardRow

//childnodes -- text dagil alıyor

value = todoList.childNodes
value = todoList.childNodes[0]

//children-element

value = todoList.children;
value = todoList.children[todoList.children.length -1]
value = todoList.children[2].textContent = "değişti"

value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent = "burası da değişti";

value = todoList.children.length;
value = todoList.childElementCount;
value = todoList.firstElementChild;

value = cardRow.parentElement
value = cardRow.parentElement.parentElement

// element sibling

value = todo;
value = todo.previousElementSibling
value = todo.previousElementSibling.nextElementSibling
value = todo.previousElementSibling.nextElementSibling.nextElementSibling



console.log(value)