var hak =5;
var tahmin,sayac=0;
var sayi= Math.floor((Math.random()*10)+1);

console.log(sayi);

while(hak>0){
    hak--;
    sayac ++;
    tahmin = Number(prompt("bir sayi giriniz: "))

    if (sayi == tahmin){
        console.log(`tebrikler ${sayac} hakkınızda bildiniz`);
        console.log(`puanınız: ${100-(20)*(sayac-1)}`);
        break
    } else if (sayi>tahmin){
        console.log("yukarı");
    } else {
        console.log("aşağı");
    }

    if (hak==0){
        console.log("hakkınız bitti sayi:"+sayi);
    }
}