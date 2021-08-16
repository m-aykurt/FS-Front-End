const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const addBook=()=>{
    const arr = [{
        title:"titanic",
        author:"hans",
        pages:15,
        isRead: false
    },
    {
        
        title:"robin hood",
        author:"hans maveric",
        pages:12,
        isRead: true
    },{
        title:"richman",
        author:"hansin",
        pages:152,
        isRead: false
    },

]
}
submit.addEventListener("click", addBook)