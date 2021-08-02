const tcKn = document.getElementsByName("tcKn")[0];
const button = document.querySelector(".btn");
const errorArea = document.querySelector(".errorArea");

let tcKnOdd = 0;
let tcKnEven = 0;
let indx10 = 0;
let totalDivision = 0;
let total = 0;

function totalOdd() {

    for (let i = 0; i <= 8; i++) {
        if (i % 2 == 0) {
            tcKnOdd += parseInt(tcKn.value[i])
        } else {
            tcKnEven += parseInt(tcKn.value[i])
        }
    }
    indx10 = (tcKnOdd * 7 - tcKnEven) % 10
}

function totalEl() {
    for (let i = 0; i < 10; i++) {
        total += parseInt(tcKn.value[i])
    }
    totalDivision = total % 10;
}

button.addEventListener("click", () => {
    totalOdd();
    totalEl();

    const regEx = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
    if (regEx.test(tcKn.value)) {
        if (indx10 == parseInt(tcKn.value[9])) {

            if (totalDivision == parseInt(tcKn.value[10])) {
                errorArea.innerHTML = "Valid Id Number";
                errorArea.classList.add("success")
            } else {
                errorArea.innerHTML = "INVALID";
                errorArea.classList.add("error")
            }
        } else {
            errorArea.innerHTML = "INVALID";
            errorArea.classList.add("error")
        }

    } else {
        errorArea.innerHTML = "INVALID";
        errorArea.classList.add("error")
    }
})