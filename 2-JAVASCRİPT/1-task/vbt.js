// function initButton() {
//   var body = document.body;
//   let button;
//   let i;
//   for (i = 0; i < 7; i++) {
//     console.log(i);
//     button = document.createElement("button");
//     button.innerHTML = `Button ${i}`;
//     button.addEventListener("click", (e) => {
//       alert(i);
//     });
//     body.appendChild(button);
//   }
// }
// initButton();

// function friendNumbers(number1, number2) {
//   let divisor1=0
//   let divisor2=0
//   for (let i = 1; i < number1; i++) {
//     if (number1 % i == 0) {
//       divisor1 += i;
//     }
//   }
//   for (let j = 1; j < number2; j++) {
//     if (number2 % j == 0) {
//       divisor2 += j;
//     }
//   }
//   console.log(number1);
//   console.log(number2);
//   console.log(divisor1);
//   console.log(divisor2);
//   if (divisor1 == number2 && divisor2 == number1) {
//     console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
//   } else {
//     console.log(number1 + " ve " + number2 + " arkadaş sayı değildir.");
//   }
// }
// friendNumbers(220, 284);
// friendNumbers(300, 400);


let insertBtn = document.getElementById("insertBtn").addEventListener("click", addInsert)
let text = document.getElementById("newInput").textContent;
let listItem = document.getElementById("listItem")

function addInsert() {
    listItem.innerHTML += `
    <li>${text}</li>
    `;
};
addInsert();
