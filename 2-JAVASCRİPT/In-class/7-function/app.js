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

// (function (n){
//     let sum = 0;
//     while (n>=0){
//         sum+=n;
//         n--;
//     }
//     console.log("result: ",sum);
// })(5);


// vergilendirme 

// function tax(argsuments, rate) {
//     console.log(
//         for (i = 0; i < arguments.length; i++) {
//             console.log(arguments[i] * (1 + rate));
//         })
// }
// console.log(tax([100, 200, 300], 0.18))

// var bir = "murat "
// var iki = "aykurt"

// function demo(){
//     let bir = "murat "
//     let iki = "aykurt"
//     console.log(bir + iki);
// }

// demo()
// console.log(bir);

// ARROW FUNCTİON

// const multi = (x,y) => x*y

// console.log(multi(3,5));

// const square = (x) => (x**2)

// console.log(square(2));

// function add100(a){
//     return a+100
// }
// console.log(add100(1));

// 1.yöntem

// const arrow = (a)=>{
//     return a+100;
// }
// console.log(arrow(2));


// 2.yöntem
// const arrow = (a)=> a+100;

// console.log(arrow(3));


// 3.yöntem
// const arrow = a=> a+100;

// console.log(arrow(4));

// const user = 'Mark'
// const sayHi = (userName = "new user") => `Welcome ${userName}`
// console.log(sayHi()) //atama olmadığı için default u alır
// console.log(sayHi("ahmet"))
// console.log(sayHi(user));

// zero division error

// const div = (num1, num2) => num1 / num2
// console.log(div(18,3));

// 1.yöntem

// const div=(num1,num2) => {
//     if (num2===0){
//         console.log("zero division error");
//     } 
//     return num1/num2
// }

//ternary yapılar
// const div= (num1,num2) => (num2===0) ? "zero division":num1/num2
// const div= (num1,num2) => !num2 ? "zero division":num1/num2

// console.log(div(32,4));
// console.log(div(32,0));

//alan hesaplama

// const calcArea = radius => 3.14*radius**2

// console.log(calcArea(5));

//this metod

// const cat = {
//     name: 'Muezza',
//     age: 8,
//     whatName() {
//         return this.name

//     }
// };
// console.log(cat.whatName());  // Output: Muezza


// const car = () => {make:"bmw"}
// console.log(car()); // undefined

// const car = () => ({make:"bmw"}) //object ifade ederken parantez kullanılıyor
// console.log(car());


// const iief = (num=>num+5)(10)
// console.log(iief); // tek kullanımlık  ama fonksiyon gibi cagrılmıyor 