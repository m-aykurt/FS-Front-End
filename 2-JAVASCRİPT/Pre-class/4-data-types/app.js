// let d = new Date();
// let birthday = new Date(1992,0,30)
let date_app = new Date(1990,0,0)
let dtA = new Date(2021,05,29,09,10,30)
// let dtB = new Date("29/05/2021 09:10:30")
let dtC = new Date("1/1/1990")
let dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1)
let start = new Date("1/1/1990");
let end = new Date("1/1/1992")
var milisecond = end -start;
let saniye = milisecond/1000
let dakika = saniye/60
let saat = dakika/60
let gun = saat/24
let ay = gun/30
let yıl = ay/12
// let birthday = new Date(1992,0,30)
// let d = new Date();



// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date('1/30/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now())



// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

//uygulama

// console.log(d);
// console.log(d.getMonth()+1);
// console.log(d.getDate());
// console.log(dtA);
// // console.log(dtB);
// console.log(dtC);
// console.log("milisecond;"+milisecond);
// console.log("saniye;"+saniye);
// console.log("dakika;"+dakika);
// console.log("saat;"+saat);
// console.log("gun;"+gun);
// console.log("ay;"+ay.toFixed());
// console.log("yıl;"+yıl.toFixed());
















// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()- birthday.getMonth());


// // set methodları

// d.setFullYear(2020)
// d.setMonth(6)
// d.setDate(21)
// d.setMinutes(10)


// // get methodları

// console.log(d);
// console.log(typeof d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());

