// elementler arası gecis

// var val;
// var list = document.querySelector(".list-group");
// val = list;
// val = list.childNodes
// val = list.children
// val = list.children[0]
// val = list.children[0].textContent = "new item"
// val = list.children[3];
// val = list.children[3].children
// val = list.firstChild; // text
// val = list.firstElementChild; // tag 
// val = list.lastChild
// val = list.lastElementChild
// val = list.childElementCount
// val = list.parentNode
// val = list.parentElement
// val = list.parentElement.parentElement
// val = list.parentElement.parentElement.parentElement
// val = list.parentElement.parentElement.parentElement.parentElement
// val = list.parentElement.parentElement.parentElement.parentElement.parentElement //nul
// val = list.children[0].nextElementSibling
// val = list.children[0].nextSibling

// val = list.children[2].previousElementSibling
// // console.log(val);


// for (let i=0; i<list.childNodes.length;i++){
//     if (list.childNodes[i].nodeType===3){
//         console.log(list.childNodes[i]);
//     }
// }


// creating elements
const li = document.createElement("li")

//add class
li.className = "list-group-item list-group-item-secondary"

//attribute

li.setAttribute("title","new item")
li.setAttribute("data-id","5")

//text node

const text = document.createTextNode("new item");
li.appendChild(text)

const a = document.createElement("a");
a.setAttribute("href","#")
a.className = "delete-item float-right 1"
a.innerHTML="<i class='fas fa-times'></i>"
//appende a to li
li.appendChild(a)

//append li to ul

document.querySelector("#task-list").appendChild(li)




console.log(li);