// variables

const form = document.querySelector(".form");
const addBtn = document.querySelector("#addBtn");
const submit = document.querySelector("#submit");
const formTitle = document.querySelector("#formTitle").value;
const formAuthor = document.querySelector("#formAuthor");
const formPages = document.querySelector("#formPages");

// function

const titleValue = formTitle.value;
const authorValue = formAuthor.value;
const pagesValue = formPages.value;

// ui to deploy

const addBookToUI = function(){
    const newBookList = document.querySelector("#newBookList");

    newBookList.innerHTML += `
    <div>
    <tr>
            <td>${titleValue}</td>
            <td>${authorValue}</td>
            <td>${pagesValue}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
    </tr>
    </div>
`
console.log(`object`, formTitle)
console.log(`object`, formAuthor)
}


// addEventListener 

submit.addEventListener("click",addBookToUI)