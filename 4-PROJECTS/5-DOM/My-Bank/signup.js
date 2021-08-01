const registrationForm = document.getElementById("registration_form");
registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    // alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
    window.location.href = "checkout.html?firstname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value;
});

const lastNameInput = document.getElementsByName("last_name")[0];
const remainCharSpan = document.getElementById("charCount");

const showRemainChar = () => {
    if (lastNameInput.value.length > 0) {
        remainCharSpan.style.visibility = "visible";
        remainCharSpan.innerText = lastNameInput.value.length + "/40";
    }
    else{
        remainCharSpan.style.visibility = "hidden";
    }
}
lastNameInput.addEventListener("keyup", showRemainChar);

let birthday = document.getElementsByName("birthday")[0];
birthday.addEventListener("change", function(){
    alert(new Date(this.value).toLocaleDateString() + " date is selected!");
});

const validateEmail = () => {
    let email = document.getElementsByName("email")[0];
    let errorSpan = document.querySelector("#errorSpan");
    if(email.value.length>0){
        errorSpan.style.visibility = "visible";
    } else{
        errorSpan.style.visibility = "hidden"
    }

    const regexPattern = /\S+\@+\S+\.+\S/;
    if (!regexPattern.test(email.value)) {
        errorSpan.innerHTML = "invalid email address!";
        errorSpan.style.color = "red";
    }
    else{
        errorSpan.innerHTML = "your email is valid";
        errorSpan.style.color = "green";
    }
}

// const input = document.getElementsByName("last_name")[0];
// const input = document.getElementById("lastNameId");
// const input = document.querySelectorAll("#lastNameId")[0]
// const input = document.querySelectorAll(".input--style-4")[2] //email
// console.log(input);

// const student = {
//     x:5,
//     y:6,
//     while:42,
//     "okul adi":"saint joseph",

// }
// // console.log(myObj);
// console.log(student["okul adi"]);
// console.log(student.x);
// console.log(student.y);