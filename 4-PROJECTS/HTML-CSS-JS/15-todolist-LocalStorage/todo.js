const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI)
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos)
  clearButton.addEventListener("click", clearAllTodos)
}




//ADD TODO
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir to-do giriniz..");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "ToDo Başarıyla eklendi");
  }

  e.preventDefault();
}



//filter


function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            // bulunamadı
            listItem.setAttribute("style", "display:none !important")
        } else{
            listItem.setAttribute("style", "display:block")
        }
    })
}






//toStorage

function getTodosFromStorage() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos))
}


// loadAllTodosToUI

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo)
    })
}











// toUı
function addTodoToUI(newTodo) {
  // string degerini list item olarak ui'ye ekleyecek
  // list item olusturma
  const listItem = document.createElement("li");
  listItem.className = `list-group-item d-flex justify-content-between`;

  //link olusturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = '<i class="fas fa-trash-alt"></i>';

  //TEXT NODE
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  // todo list'e list item i ekleme

  todoList.appendChild(listItem);

  todoInput.value = "";
}

//show alert
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;

  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 1000);
}


// delete

//UI
function deleteTodo(e){
    if(e.target.className==="fas fa-trash-alt"){
        e.target.parentElement.parentElement.remove()
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", `Todo başarıyla silindi`)

    }

    e.preventDefault()
}

// function delete storage

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo===deleteTodo){
            todos.splice(index,1) // arrayden değer silinebilir
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}

// delete all

function clearAllTodos(){
    
    if(confirm("Tümünü silmek istediğinize emin misiniz ? "))
    // arayuz
    // todoList.innerHTML = ""; // yavaş

    while(todoList.firstElementChild !=null){
        todoList.removeChild(todoList.firstElementChild)
    }
    localStorage.removeItem("todos")
}