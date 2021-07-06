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

// let score= 60;

// if (score >80){
//     console.log("tebrikler");
// }
// else if (score>=50) {
//     console.log("fena değil");
// }
// else{
//     console.log("daha cok calis");
// }


// let score = prompt("sınavdan kac aldın? ")

// if (score >80){
//     console.log("tebrikler");
// }
// else if (score>=50) {
//     console.log("fena değil");
// }
// else{
//     console.log("daha cok calis");
// }

// let user_name="murat";
// user_name ? console.log(`hello ${user_name}`): console.log("please login");

// if-else if-else ternary

//  let score = 19;
//  score > 50 ? console.log("tebrikler2") : (score>20) ? console.log("daha cok calismalisin2") : console.log("berbat");

// SWITCH CASE 

// var product = "pen";
// var message ;

// switch(product) {
//     case  "pen":
//         message = "pen is $0.9"
//         break
//     case "eraser":
//         message = "eraser is $0.5"
//         break
//     case "pencil":
//         message = "pencil $0.8"
//         break
//     default:
//         message = "select a product"
// }

// console.log(message);

// var text;
// var fruits2="orange";
// fruits= fruits2.toLowerCase()

// switch(fruits){
//     case "banana":
//         text = "banana is good";
//         break
//     case  "lemon":
//     case "orange":
//         text = "i m not a fan of orange"
//         break
//     case "apple":
//         text = "how you like them apple?"
//         break
//     default:
//         text = "select a fruits"
        

// }

// console.log(text);
// console.log(fruits2,text);


// ders günleri örneği

// var day1 = prompt("gün secin: ") ;
// var text;

// day = day1.toLocaleLowerCase();

// switch(day){
//     case "pazartesi":
//     case "carsamba":
//     case "persembe":
//     case "cumartesi":
//         text = "bugun in class var"
//         break
//     case "sali":
//     case "cuma":
//         text = "bugun teamwork-workshop var"
//         break
//     case "pazar":
//         text = "bugun tatil";
//         break
//     default:
//         text = "dogru gun seciniz"
        
// }

// console.log(text);

// var is_raining = prompt("is it raining?")

// if (is_raining == "yes"){
//     alert("go take an umbrealla")}
// else {
//     alert("you dont need anything")
// } 


// SADIK TURAN İF-ELSE DERSLERİ

// age = prompt("yasiniz: ")
// is_student = true
// school= "high school".toLowerCase()

// if (age >=18){
//     if ((school =="university") || (school == "high school")) {
//         console.log("ehliyet alabilirsiniz");
//     } else {
//         console.log("eğitim durumunuz yetersiz");
//     }
// } else{
//     console.log("yaşınız kücük");
// } 



// let day;
// console.log(new Date().getDay());


// bakım problemi

// var car_year = 2017
// var day = (new Date().getFullYear())

// var maintenance = day - car_year

// if (maintenance<2){
//     console.log("1. bakım");
// } else if (maintenance<3) {
//     console.log("2. bakım");
// } else if (maintenance<4){
//     console.log("3.bakım");
// }
// else{
//     console.log("aracınızın ilk 3 yıllık bakımı gecmiş arac yasi: "+maintenance);
// }

// login

// var result = prompt("who's there ? ");

// if(result == 'cancel'){
//     console.log('cancelled');
// }else if(result == 'Admin'.toLowerCase()){   

//     var password = prompt('enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');
//     }else if(password== '1234'){
//         console.log('welcome Admin');
//     }else{
//         console.log('wrong password');
//     }

// }else{
//     console.log('I dont know you');
// }


// OBJECT LITERAL
// let person = {
//     first_name : "murat",
//     last_name : "aykurt",
//     age : 29,
//     hobbies : ["music","game"],
//     address : {
//         city : "kırklareli",
//         country : "turkiye"
//     },
//     getBirthYear : function(){
//         return 2021-this.age // person.age --ile aynı
//     }
// };
// console.log(person);
// console.log(typeof person);
// console.log(person["first_name"]);
// console.log(person["age"]);
// console.log(person.first_name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.hobbies[0]);
// console.log(person.hobbies.length);
// console.log(person.getBirthYear());


let people = [
            {first_name:"murat",last_name:"aykurt"},    
            {first_name:"selin",last_name:"aykurt"},    
            {first_name:"doga",last_name:"aykurt"},    
];

val = people[0]
val = people[1].first_name;
for (let i=0; i<people.length;i++){
    console.log(people[i].first_name);
}

console.log(val);
console.log(typeof people);
