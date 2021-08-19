// event bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("div container")
// });

// document.querySelector(".card-row").addEventListener("click",function(){
//     console.log("card-row")
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("body")
// });

//////////////// event capturing or delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("silme")
    }
    if(e.target.id ==="filter"){
        console.log("filter işlemi")
    }
    if(e.target.id === "clear-todos"){
        console.log("tüm task ları silme işlemi")
    }
}