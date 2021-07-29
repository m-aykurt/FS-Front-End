const registrationForm =  document.getElementById("registration_form");
const lastNameInput = document.getElementsByName("last_name")[0];
const remainCharSpan = document.getElementById("charCount");
// console.log(lastNameInput);

//submit 

registrationForm.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "checkout.html?firstname=" + documentElementByName("first_name")[0].value +"&lastname=" + documentElementByName("last_name")[0].value;
    // alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value);
});


//lastname counter

const showRemainChar = ()=>{
    if (lastNameInput.value.length>0){
        remainCharSpan.style.visibility="visible";
        remainCharSpan.innerText = lastNameInput.value.length +"/40";
    } else{
        remainCharSpan.style.visibility = "hidden";
    }
}

lastNameInput.addEventListener("keyup", showRemainChar);

// change metodu
let birthday = document.getElementsByName("birthday")[0];
birthday.addEventListener("change", function(){
    alert(new Date(this.value).toLocaleDateString()+ " date is selected")
    console.log(typeof new Date(this.value));
})

// email error

const validateEmail = ()=>{
    let email = document.getElementsByName("email")[0];
    let errorSpan = document.querySelector("#errorSpan");
    if (email.value.length>0){
        errorSpan.style.visibility = "visible";
    } else{
        remainCharSpan.style.visibility = "hidden";

    }
    const regexPattern = /\S+\@+\S+\.+\S/;
    if(!regexPattern.test(email.value)){
        errorSpan.innerHTML = "invalid email adress!"
        errorSpan.style.color = "red";
    } else {
        errorSpan.innerHTML = "your mail is valid";
        errorSpan.style.color = "green";
    }

}