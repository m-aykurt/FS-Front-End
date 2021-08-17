const filter = document.querySelector("#filter");
const title = document.querySelector("#tasks-title")
// document.addEventListener("DOMContentLoaded",load)

// function load(e){
//     console.log("page loaded")
// }

// title.addEventListener("focus", run)

// focus

filter.addEventListener("focus", run);

//blur
filter.addEventListener("blur", run);
// paste
filter.addEventListener("paste", run)
//cut
filter.addEventListener("cut", run)
//copy
filter.addEventListener("copy", run)

function run(e){
    console.log(e.type)
}