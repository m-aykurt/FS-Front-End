// JS DOM

// document.getElementById()

// const myDom = document.getElementById("dom")
// console.log(myDom);

// const instructor  = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);


// className 


// console.log(withClassName[1]);

//TagName

// const cw = document.getElementsByTagName("h3")
// console.log(cw);


// document.querySelector()
// const inst = document.querySelector(".class-info")
// console.log(inst);
// console.log(typeof inst);

// console.log(document.querySelector(".class-info"))

// console.log(document.querySelectorAll(".class-info"));
// console.log(document.querySelectorAll("#instructor"));
// console.log(document.querySelector("#instructor"));


// h3 tag şeklinde oluşturma
// console.log(document.querySelectorAll("h3"));
// console.log(document.querySelector("h3"));
// console.log(typeof document.querySelector("h3"));
// console.log(document.querySelectorAll("h3"));

// console.log(document.querySelector("div h3"));
// console.log(document.querySelector(".class-info h1"));

////////////////////////////////////////////////////////

// MANİPULATİON

// const brands = document.querySelector("#brands");
// console.log(brands);
// brands.innerHTML += "<li class='brand'> NioyaTeach </li>"

// console.log(brands);

// const classBrands = document.querySelectorAll(".brand")
// console.log(classBrands);
// console.log(classBrands[2]);
// console.log(classBrands[2].innerText="merhaba");
// console.log(classBrands);

// FOOTER

// const copyRight = document.querySelector("footer p")
// console.log(copyRight);
// copyRight.innerText = "&copy; 2021 clarusway.com"
// copyRight.innerHTML = "&copy; 2021 clarusway.com"
// const lessonList = [
//     { id: 1, name: 'HTML' },
//     { id: 1, name: 'CSS' },
//     { id: 1, name: 'JS' },
//     { id: 1, name: 'REACT' },
//   ];


// let liste = document.querySelector("#lessons")

//   for (let i = 0; i<lessonList.length; i++){
//       liste.innerHTML+=lessonList[i].name
//   }

// lessonList.forEach((element)=>{
//     liste.innerHTML+=`<li class='lesson-item'>${element.name}</li>`
// })


//////////////////////////////////////////////////////

// setAttribute - getAttribute

// const mdn = document.querySelector("#mdn")

// const mdnHrefAttr = mdn.getAttribute("href")
// console.log(mdnHrefAttr);
// mdn.setAttribute("href", "https://www.google.com")
// mdn.innerHTML = "Google"

// // 🔥🔥🔥🔥🔥 CHALLENGE  🔥🔥🔥🔥🔥

// const insElm = document.querySelectorAll('#instructors li');
// // console.log(insElm);

// insElm.forEach((item) => {
//   console.log(item.innerText.includes('FrontEnd'));
//   if (item.innerText.includes('FrontEnd')) {
//     item.setAttribute('class', 'front-end');
//   } else if (item.innerText.includes('BackEnd')) {
//     item.setAttribute('class', 'back-end');
//   }
// });

// ADD STYLE MANUEL WİTH JS

// const jsPrg = document.querySelector("#js-prg")
// console.log(jsPrg);

// jsPrg.style.color = "white"
// jsPrg.style.fontSize = "50x"
// jsPrg.style = `background:red;`





//////////////////////// classlist e ekleme cıkarma


// const cwBanner = document.querySelector("#cw-banner");
// console.log(cwBanner);
// console.log(cwBanner.classList);
// // console.log(cwBanner.classList);
// cwBanner.classList.add("imp") // ekle
// cwBanner.classList.remove("banner") // cıkar


// const cwQuote = document.querySelector("#quote-div")
// console.log(cwQuote);

// const cwElm = document.createElement("h2")
// console.log(cwElm);
// // console.log(cwElm.nextElementSibling);
// cwElm.innerText="clarusway"
// cwElm.innerText="clarusway2"
// cwElm.innerText="clarusway3"
// cwElm.innerText="clarusway4"
// cwQuote.appendChild(cwElm)






////////// ders tekrarı/////////////////////////

// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);

// class name

// const withClassName = document.getElementsByClassName("class-info");
// console.log(withClassName);


//tagname
// const cw = document.getElementsByTagName("h3")
// console.log(cw);

// query selector

// console.log(document.querySelectorAll("#instructor"));

// console.log(document.querySelectorAll("h3")[0]);

///////////////// manipulation

// const brands  = document.querySelector("#brands");
// // console.log(brands);
// brands.innerHTML += "<li class='brand'>NioyaTeach</li>" 
// console.log(brands);
// const classBrands = document.querySelectorAll(".brand")
// console.log(classBrands);



////footer

// const copyRight = document.querySelector("copy-right");
// console.log(copyRight);
// copyRight.innerHTML = "<h1>&copy; 2021 clarusway.com</h1>"

//  const lessonList = [
//     { id: 1, name: 'HTML' },
//     { id: 1, name: 'CSS' },
//     { id: 1, name: 'JS' },
//     { id: 1, name: 'REACT' },
//   ];

//   const lessons = document.querySelector("#lessons");
//   lessonList.forEach((item) => {
//       lessons.innerHTML += `<li class'lesson-item'>${item.name}</li>`
//   })


// const mdn = document.querySelector("#mdn");
// const mdnHrefAttr = mdn.getAttribute("href")
// mdn.setAttribute("href","https://www.google.com")
// console.log(mdnHrefAttr);
  
//// challenge

// const ins = document.querySelectorAll("#instructors li");
// // console.log(insturctors);
// ins.forEach((item) => {
//     console.log(item.innerText.includes("FrontEnd"));
//     if (item.innerText.includes("FrontEnd")){
//         item.setAttribute("class","front-end")
//     } else if (item.innerText.includes("BackEnd")){
//         item.setAttribute("class","back-end")
//     }
// })

// const cw = document.querySelector(".banner");
// console.log(cw.classList);
// cw.classList.add("imp")


//create element
const cwQuote = document.querySelector("#quote-div")
console.log(cwQuote);
cwElm = document.createElement("h2");
cwElm1 = document.createElement("h4");
// console.log(cwElm);

cwElm.innerText = "clarusway";
cwElm1.innerText ="merhaba";
cwQuote.appendChild(cwElm)
cwQuote.appendChild(cwElm1)
cwElm.appendChild(cwElm1)

