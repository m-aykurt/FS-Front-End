// İF ELSE YAPILARI
//if (condition){sonuç;} elif(condition){sonuç;} else{sonuç;}
/* 
let score = 50;
if (score >= 50){     // koşulumuz: score 50 den büyük veya eşit ise 
    console.log("Congratulate"); // cong yazdır
}
*/
/*
let score = 50;
if (!(score >= 50)){  // koşulumuz: 50 den büyük veya eşik değil ise
    console.log("Congratulate"); 
}
*/
/*
let score = 50;  
if (score > 80) {           //koşulumuz: score 80 den büyük ise
    console.log("Tebrikler");
} else {                    // koşul tutmaz ise bunu yazdır
    console.log("Daha çok çalış");
}
*/
// TERNARY KISAYOL (İF-ELSE)
/*
let score = 50;
score > 80 ? console.log('Tebrikler'): console.log('Daha çok çalış');
*/ 
// "?" işareti bu koşul doğru mu anlamına gelir, yani if
/* 
let score = 80;  
if (score > 80) {
    console.log("Tebrikler");
} else if (score >=50){  // ara sorgu, elif anlamına gelir              
    console.log("Fena değil");
} else { 
    console.log("Daha çok çalış");
}
*/
/*
let score =prompt("Sınavdan kaç aldın?") //prompt("") ile kullanıcıdan bilgi aldık (input gibi)   
if (score > 80) {
    console.log("Tebrikler");
} else if (score >=50){  // ara sorgu, elif anlamına gelir              
    console.log("Fena değil");
} else { 
    console.log("Daha çok çalış");
}
*/
/*
let userName;
userName ? console.log(`Hello ${userName}`) : console.log("please login");
*/
//ternary ile username var ise hello yaz yoksa ise login yaptır sorgusu
// $ ile girilen username değerini yazdırırız. f string gibi
// TERNARY (İF ELSE ELSE İF)
/*
let score = 49;
score > 80 ? console.log('Tebrikler'): (score >= 50 ? console.log("fena değil") : console.log("Daha çok çalışmalısın"));
*/
// SWİTCH CASE STATEMENTS
// seçmeli olarak çıktı alabilme fonksiyonudur
// var text;
// var fruits = "Apple"; 
// fruits = fruits.toLocaleLowerCase(); // fruits değerinin tüm harflerini küçülttük (switch(fruits.toLowerCase() ile de yapabilirdik))
// switch (fruits){
//     case "banana": // koşul giriyoruz
//         text = "Banana is good"; // banana ise bunu ver
//         break; 
//     case "mango": //birden fazla case i tek yere bağlayabiliriz 
//     case "orange":
//         text = "I am not a fan of orange."; // orange ise bunu
//         break;
//     case "apple":
//         text = "How you like them apples?"; // apple ise bunu
//         break;
//     default:
//         text = "I have never heard of that fruit..."; //farklı bir cevapta bunu ver
//         break;
// }
// console.log(text);
//  ???? SORU ????
// bir gün değişkeni
// switchcase yapısı: pzt - çarş - perş - cmt ise inclass var 
// salı ve cuma ise TW var
/*
var text;
let gün1 = prompt("Gün giriniz: ");
gün = gün1.toLocaleLowerCase()
switch(gün){
    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        text = "Bugün in-class var";
        break;
    case "salı":
    case "cuma":
        text = "Bugün teamwork var";
        break;
    default:
        text = "tatil";
        break;
}
console.log(text);
*/


// pzr tekrar

// let score = 49;
// console.log(score>=50);

// if (score>=50){
    //     console.log("congrats..");
    // }
    
    // if (score>=50){
        //     console.log("congrats..")
        // }
        // else{
            //     console.log("daha cok calismalisin");
        // }
        
        // ternary yapılar

// let score = 49;
// score > 50 ? console.log("tebrikler2") : console.log("daha cok calismalisin2");

let score= 60;

if (score >80){
    console.log("tebrikler");
}
else if (score>=50) {
    console.log("fena değil");
}
else{
    console.log("daha cok calis");
}