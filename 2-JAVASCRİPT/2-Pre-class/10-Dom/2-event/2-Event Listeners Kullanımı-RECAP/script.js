// Event Listeners

// const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');

// btn.addEventListener('click',function(e){

//     let val;

//     val = e;

//     val = e.target;
//     val = e.target.id;
//     val = e.target.classList;
//     val = e.type;

//     console.log(val);

//     e.preventDefault();

// });

// prevent default
// btn.addEventListener("click",function(e){
//     // console.log("btn-clicked");

//     let val;
//     val  = e;
//     val  = e.target;
//     val  = e.target.id;
//     val  = e.target.classList;
//     val  = e.type;


//     console.log(val);
//     e.preventDefault();
// });

// function btnClick(){
//     console.log("btn clicked");
// }

// function btnClick2(){
//     console.log("btn clicked2");
// }



// MOUSE EVENTS

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

// click

// btn.addEventListener("click", eventHandler);
// ul.addEventListener("click",eventHandler)


//double click
// btn.addEventListener("dblclick",eventHandler)

// mouse down
// btn.addEventListener("mousedown",eventHandler)
// mouse up
// btn.addEventListener("mouseup",eventHandler)

//mouse enter

// ul.addEventListener("mouseenter",eventHandler);

// // mouse leave

// ul.addEventListener("mouseleave",eventHandler);

// //mouseover
// ul.addEventListener("mouseover",eventHandler)
// //mouseout
// ul.addEventListener("mouseout",eventHandler)


// mouse move

ul.addEventListener("mousemove",eventHandler);

function eventHandler(event) {
    // event.preventDefault();
    console.log(`EVENT TYPE: ${event.type}`);
    // console.log(event);
    h5.textContent = `mouse x`

}