// set ıtem

// localStorage.setItem("hareket", "burpee")
// localStorage.setItem("tekrar", 50);

// getItem

// const value = localStorage.getItem("tekrar");
// const value = localStorage.getItem("hareket");
// console.log(value)

// if (localStorage.setItem("hareket", "burpee")===null){
//     console.log("bu veri yok")
// } else { 
//     console.log("bu veri var")
// }

// // array yazma
// const todos = ["todo 1", "todo 2", "todo 3"];

// localStorage.setItem("todos", JSON.stringify(todos))
// console.log(typeof localStorage.getItem("todos"))

// const value = JSON.parse(localStorage.getItem("todos"))

// console.log(value)

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo")

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos")===null){
        todos = []
    } else{
        
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos))

    e.preventDefault();
}