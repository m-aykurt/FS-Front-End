// for

// for (let i=1; i<10; i++){
//     if(i==3){
//         console.log("en sevdiğim rakam: "+i);
//         continue
//     }

//     if (i==6){
//         console.log("en sevmediğim rakam: "+i); break
//     }

//     console.log(i);
// }


// while 
// yapı olarak for a benziyor

// let i=0;
// while(i<10){
//     console.log(i);
//     i++
// }

// do-while yapısı
// do yapılarında kosuldan önce en az 1 defa döngü döner

// let i =0;
// do{
//     console.log(i);
//     i++;
// } while(i<5)


// let sonuc =0;
// for (let i=10; i>0; i--){
//     sonuc +=i 
// }
// console.log(sonuc);

// let sonuc =1;
// for (let i=10; i>0; i--){
//     if (i%2==1){
//         sonuc *=i;
//     }
// }

// console.log(sonuc);


// for (let i=0; i<10; i++){
//     for (let j=0;j<10;j++){
//         console.log(`i:${i} j:${j}`);
//     }
// }

// let val = "\n";
// for (let i=0;i<3;i++){
//     for (let j =0; j<20; j++){
//         val +="*"
//     }
//     val +="\n"
// }
// console.log(val);

// LOOPS IN ARRAY & OBJECT

// let cars = ["bmw","mercedes","toyota"];

// for (let i=0; i<cars.length;i++){
//     if(i%2==0){
//         console.log(cars[i]);
//     }
// }


// FOR - IN Methodu
// let cars = ["bmw","mercedes","toyota"];
// for (let i in cars){
//     console.log(cars[i]);
// }

// //for each 

// cars.forEach(function(a){
//     console.log(a);
// })

// let cars = ["bmw","mercedes","toyota"];
// let people = [
//     {first_name : "murat" ,last_name : "aykurt"},
//     {first_name : "selin", last_name : "aykurt"},
//     {first_name : "cınar", last_name : "turan"},
// ]

// // for (let i in people){
// //     console.log(people[i].first_name);
// //     console.log(people[i]);
// // }

// people.forEach(function(item){
//     console.log(item.last_name);
// })


// MAP FONKS. DİZİ DÖNDÜRÜR

// let people = [
//     {first_name : "murat" ,last_name : "aykurt"},
//     {first_name : "selin", last_name : "aykurt"},
//     {first_name : "cınar", last_name : "turan"},
// ]

// let val = people.map(function(item){
//     return item.first_name+" "+item.last_name;
// })
// console.log(val); // dizi dönüyor
// console.log(val[0]);

var sum = 0;
for (var i = 3; i < 7; i++) {
sum += i;
if (i ===3 || sum > 10) {
continue;
}
console.log(i);
}