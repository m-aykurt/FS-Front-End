let  yasHesapla = function(dogumYili){
    return new Date().getFullYear()-dogumYili
}

console.log(yasHesapla(1992));


function emekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    emeklilik = 65-yas;
    
    if (emeklilik>0){
        console.log(`${isim} emekli olmanıza ${emeklilik} kaldı`);
    } else {
        console.log(`${isim}  zaten ${emeklilik*(-1) } yıl önce emekli oldunuz`);
    }

}

emekliligeKacYilKaldi(1944,"murat")