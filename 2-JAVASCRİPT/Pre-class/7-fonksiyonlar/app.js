// let  yasHesapla = function(dogumYili){
//     return new Date().getFullYear()-dogumYili
// }

// console.log(yasHesapla(1992));


// function emekliligeKacYilKaldi(dogumYili,isim){
//     let yas = yasHesapla(dogumYili);
//     emeklilik = 65-yas;
    
//     if (emeklilik>0){
//         console.log(`${isim} emekli olmanıza ${emeklilik} kaldı`);
//     } else {
//         console.log(`${isim}  zaten ${emeklilik*(-1) } yıl önce emekli oldunuz`);
//     }



// emekliligeKacYilKaldi(1944,"murat")

const sum = function(a,b){

    if(typeof a==="undefined"){a=0;}

    if(typeof b==="undefined"){b=0;}

    var c = a+b
    return c
}
console.log(sum(5,7));
console.log(sum(10)); // NaN - eksik verdiğimizde
console.log(sum(10,20,50,70)); // Fazla verince ilk 2 değeri alıp toplama yapıyor

function sumAll(){
    var total = 0;
    for (let i=0;i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sumAll(10,20,50,110,21,54,22));