//////////////// navbar
const navbarItem1 = document.getElementsByClassName("nav__item")[0];
const navbarItem2 = document.getElementsByClassName("nav__item")[1];
const navbarItem3 = document.getElementsByClassName("nav__item")[2];
// console.log(navbarItem1);


/// span

// const h1 = document.querySelector("h1");
// const highlightSpan = h1.querySelectorAll(".highlight")
// h1.firstElementChild.style.color = "red"
// h1.lastElementChild.style.color = "blue"
// highlightSpan[0].style.color = "auqa"
// console.log(highlightSpan);
// h1.children[2].style.color = "yellow"
// console.log(highlightSpan);
// console.log(h1);

// h1.closest(".header").style.backgroundColor = "rgba(22,55,77,0.5)"

//// event-handler-eventlistener

// window


// window.onload = ()=>{
//     alert("Welcome !")
// } 

// window.onload = function(){
//     alert("welcome2 !")
// }

//event handler


// window.addEventListener("load",function(){
//     alert("welcome");
// })

// window.addEventListener("load", () => {
//     alert("welcome3");
// })


////////// CLİCK
// navbarItem1.onclick = function() { alert("hello1")}

// navbarItem1.addEventListener("click",()=>{
//     navbarItem2.style.color= "red"
// })

// function sayHello(){
//     alert("hello4")
// }

// navbarItem1.addEventListener("click", () => {
//     alert("hello3")
// })

// navbarItem2.addEventListener("mouseover", () => navbarItem2.textContent = "Over me!")

// navbarItem2.addEventListener("mouseout", () =>
//     navbarItem2.innerText = "Operations!")



// background değiştirme RGB(255,255,255)

// const randomNumber = () => {
//     return Math.floor(Math.random() *255);
// }

// const randomColor = () => {
//     return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
// }

// const changeColor = () => {
//     navbarItem3.style.borderRadius  ="10px";
//     navbarItem3.style.backgroundColor = randomColor();
//     console.log(randomColor());    
// }

// navbarItem3.addEventListener("click",changeColor)
// navbarItem3.addEventListener("mouseover",changeColor)

// SİLME
// navbarItem3.removeEventListener("click",changeColor)




////// GECİSLERİ DÜZENLEME

// document.querySelectorAll(".nav__link").forEach(
//     function (element) {
//       element.addEventListener("click", function (element) {
//         element.preventDefault();
//         const sectionId = this.getAttribute("href");
//         document.querySelector(sectionId).scrollIntoView({
//           behavior: "smooth"
//         });
//       });
//     });

// console.log(document.querySelectorAll(".nav__link"));

document.querySelectorAll(".nav__link").forEach(
    function (element) {
        element.addEventListener("click", function (element) {
            element.preventDefault();
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({
                behavior: "smooth"
            });
        });

    });