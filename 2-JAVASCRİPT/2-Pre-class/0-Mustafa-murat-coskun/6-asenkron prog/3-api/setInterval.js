console.log(this)

// settimeout --- ... saniye sonra baslar

// setTimeout(function(){
//     console.log("naber")
// },2000)

// setinterval

let i = 0;

let value = setInterval(function(){
    i++;
    console.log("sayi:", i)
},1000)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value)
    console.log("stopped")
})