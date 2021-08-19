// function getData(data){
//     // promeise objesi döndüren fonksiyon
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if (typeof data ==="string"){
//                 //olumlu
//                 resolve(data)
//             } else{
//                 //olumsuz
//                 reject(new Error("lütfen string deger girin"))
//             }

//         },3000)
//     })
// }

// getData(2)
// .then((response)=>{console.log("gelen deger "+ response)})
// .catch((err)=>{console.error(err)})


//chain


function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof number==="number"){
                resolve(number+2)
            } else{
                reject(new Error"LÜTFEN BİR SAYI GİRİNİZ"))
            }
        },3000)
    })
}