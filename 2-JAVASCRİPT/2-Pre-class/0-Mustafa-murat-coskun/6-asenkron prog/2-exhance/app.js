// document.querySelector("#change").addEventListener("click",change)

// function change(){
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=1fb042225695119d6c54e7e4ed364408",true);

//     xhr.onload = function(){
//         if (this.status){
//             const response = JSON.parse(this.responseText)
//             // console.log(response.rates.TRY)

//             const rate = response.rates.TRY
//             const amount = Number(document.querySelector("#amount").value);

//             document.querySelector("#tl").value = amount*rate
//             console.log(amount*rate)
//         }
//     }

//     xhr.send();
// }


fetch("http://api.exchangeratesapi.io/v1/latest?access_key=1fb042225695119d6c54e7e4ed364408/base=").then((response)=>response.json()).then((data)=>{console.log(data.rates)})