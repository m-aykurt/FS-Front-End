// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');


// console.log(val);

// SELECTİNG ELEMENTS

// **** Single elements

// let val;

// val = document.querySelector("#header");
// val = document.querySelector("#header").id;
// val = document.querySelector("#header").className;
// // val = document.querySelector("#header").remove();

// val = document.querySelector("#header");

// val.style.fontSize = "60px";
// val.style.color = "red";
// val.innerHTML = "<b> my Todo APP </b>"

// let li = document.querySelector("li");
// li.style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(even)").style.color = "blue";

// li.classList = "list-group-item list-group-item-primary"
// li.classList.add("active");


// console.log(val);


// **** multiple elements
// let val;

// val = document.querySelectorAll(".list-group-item")
// val[0].style.color= "red";
// // val[1].style.fontSize= "60px";
// // val[1].style.fontSize= "60px";

// for (let i =0; i<val.length; i++ ){
//     if(!(i%2)){
//         val[i].style.color = "red";
//     } else{
//         val[i].style.color = "blue";
//     }
// }

// val = document.querySelectorAll("li");
// val.forEach(function(item,index){
//     item.textContent = `${index}-hello`
// })


// val= document.querySelectorAll("li:nth-child(even)");

// val.forEach(function(item){
//     item.style.background = "#ccc";
// })

// console.log(val);



// ********** traversing the dom

// let val;
// let list = document.querySelector(".list-group");
// val = list;
// // val = list.children;
// // val = list.childNodes[0].innerHTML="<p>merhaba</p>";
// val = list.childNodes[0].nodeType; // text
// val = list.childNodes[1].nodeType; // elemet
// val = list.childNodes[1].nodeName; 
// val = list.childNodes[0].nodeName; 

// val = list.children;
// val = list.children[2];
// val = list.children[2].textContent="new item";
// val = list.children[2].textContent="new item";
// val = list.children[2].children;
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val= list.lastChild;
// val= list.lastElementChild;

// val = list.childElementCount

// // val = list.parentNode;
// val = list.parentElement;
// val = list.parentElement.parentElement;
// // val = list.parentElement.parentElement.parentElement;
// // val = list.parentElement.parentElement.children[0];
// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;
// // console.log(val);

// for (let i= 0; i<list.childNodes.length;i++){
//     // console.log(list.childNodes[i]);
//     if (list.childNodes[i].nodeType===1){
//         console.log(list.childNodes[i]);
//     }
// }




// ******** CREATİNG ELEMENTS

// const li = document.createElement("li");

// // add class

// li.className = "list-group-item list-group-item-secondary";

// // attribute
// li.setAttribute("title", "new item");
// li.setAttribute("data-id","5");

// const text = document.createTextNode("new item");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className = "delete-item float-right";
// a.innerHTML = "<i class ='fas fa-times'></i>" ;

// // appent a to  li
// li.appendChild(a)

// // appent li to ul
// document.querySelector("#task-list").appendChild(li);
// // document.querySelector("#task-list").append(li);


// console.log(li);


// REMOVİNG ELEMENT

const taskList = document.querySelector("#task-list");

// ** removing element

// taskList.remove();
// taskList.childNodes[1];
// taskList.childNodes[1].remove();
// taskList.removeChild(taskList.children[3])

// ** removing attribute

// taskList.children[0].removeAttribute("class");

// for (let i=0; i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class");
// }

// REPLACİNG ELEMENTS

// const cardHeader = document.querySelector(".card-header");

// //create element

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);


// ** CLASSES

let val;

link = taskList.children[0].children[0];

// val = link.className;
// // val = link.classList[0];
// val = link.classList;

link.classList.add("new");
link.classList.remove("new");

// **attributes

val = link.getAttribute("class")
val = link.getAttribute("data-id")
val = link.getAttribute("href")
val = link.setAttribute("href","http://www.google.com")
val = link.hasAttribute("href")

console.log(val);