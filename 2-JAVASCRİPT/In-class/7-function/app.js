// function hello(){
//     console.log("hello world!");
// }
// hello()

// function sum(a,b){
//     return (a+b);
// }

// sum(5,7) // konsole a yazdırmadı. cunku return u cekemedik.

// let toplam = sum(3,5)
// console.log(toplam);
// console.log(sum(5,6));
// console.log(typeof sum); // fonksiyon
// console.log(typeof sum()); //number


// function addTwo(number){
//     return +number+2 // burdaki + değeri number değişkenini numb olarak tanımlıyor
// }

// console.log(addTwo(5));
// console.log(addTwo("5")); // kullanıcı string deger girebilir

// function selam(name="new user"){
//     console.log(`merhaba ${name}`);
// }
// selam()
// selam("edward")


// function sayHi(myname){
//     console.log(`Hello ${myname}`);
//     myname = "ed";
//     console.log(`Hello ${myname}`);

// }

// let myName = "mark";
// sayHi(myName)
// console.log("outside func",myName);

// let student = {};
// student.name = "mark"

// function sayHi2(student){
//     console.log(`Hello ${student.name} entry point`);
//     student.name = "john";
//     console.log(`Hello ${student.name} first point`);
//     student = {name:"leon"};
//     console.log(`hello ${student.name} inside func.`);
// }
// sayHi2(student);
// console.log(`hello! ${student.name} from outside`);


// function div(num1,num2){
//     if (num2===0){
//         return "zero dibision error";
//     } 
//     return num1/num2;   
// }
// console.log(div(10,0));
// console.log(div(10,4));

// function div2(num1,num2){
//     return num2 ? num1/num2:"zero division error" // ?  öncesi true ise bir sonraki kod değilse sonraki çalışır
//     // return (num2===0) ? console.log("zero division error") : (num1/num2)

// }
// console.log(div2(18,0));
// console.log(div2(18,3));

// function sum(a, b, ...args) {
//     console.log(arguments);
//     let sum1 = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum1 += arguments[i]
//     }
//     return sum1
// }

// console.log(sum(1, 2, 3, 4, 5,6,7,8,9,10));

// function sum2(a,b, ...args){
//     console.log(args);
//     console.log(arguments);
//     return a+b
// }
// console.log(sum2(1,2,3,4,5));

// function sum2(...args){
//     console.log(args);
//     console.log(arguments);
// }
// console.log(sum2(1,2,3,4,5));


            // FUNCTİON EXRESSİONS

// console.log(sayHi1());

// function sayHi1(){
//     return "hello from sayHi1"

// }
// console.log(sayHi1());

// console.log(sayHi2());
// var sayHi2 = function greet(){
//     return "hello from sayHi2"
// }
// console.log(sayHi2());
// // console.log(greet());

        //recursive fonks.

// const pascalNumber = function total(n){
//     if(n===1){
//         return 1;
//     } 
//     return n+total(n-1)
//     // 1.tur 5+4
//     // 2.tur 9+3
//     // 3.tur 12+2
//     // 4.tur 14+1 --- n =1 e eşit olunca return 1 calısıp fonksiyon bitiyor

// }
// console.log(pascalNumber(5));
// console.log(typeof pascalNumber);
// console.log(pascalNumber);

//Immediaetly invoked function expression

// let result =(function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(3);
// console.log(result);

(function (n){
    let sum = 0;
    while (n>=0){
        sum+=n;
        n--;
    }
    console.log("result: ",sum);
})(5);

