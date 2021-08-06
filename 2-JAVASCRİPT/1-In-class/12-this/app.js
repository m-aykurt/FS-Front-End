// let myName = new String("Matthew");

// console.log("myName :>> ", myName);
// console.log("myName.length :>> ", myName.length);
// console.log("typeof myName :>> ", typeof myName);

// const a = function () {
//   return "hello";
// };

// console.log("typeof a ==>", typeof a);
// console.log("a ==> ", a.prototype);

// // const while = 42;

// const student = {
//   x: 5,
//   y: 6,
//   ad: "Matthew",
//   "Okul Adı": "Saint Joseph",
// };

// student.dob = 2014;
// student["Baba Adi"] = "Daniel";

// delete student.ad;

// console.log("student :>> ", student);
// console.log("okul adı :>> ", student["Okul Adı"]);
// console.log("adı :>> ", student.ad);
// console.log(this);
// let arr = [];
// const arr1 = ["a"];
// let arr2 = ["x", "y", "z"];

// console.log("arr :>> ", arr);
// arr = arr2;
// console.log("arr :>> ", arr);
// console.log("arr2 :>> ", arr2);

// var me = { name: "matt" };
// var you = { name: "Mark" };

// var he = me;
// me.name = "Henry";
// console.log("myName :>> ", me);
// console.log("hisName :>> ", he);
// console.log("yourName :>> ", you);


/*   */

// function Person(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear; 
// };
// Person.prototype.calcAge = function(){
//     return new Date().getFullYear() - this.birthYear;
// };

// const selin = new Person("Selin", 1993);
// const murat = new Person("Murat", 1992);
// let arr = [1,2,3]

// arr.push(4)

// murat.showName = function(){
//     return this.firstName
// }



// const anObject = {}

// console.log(selin.calcAge());
// console.log(selin.__proto__);
// console.log(murat.__proto__);
// console.log(murat.showName());
// // console.log(selin.showName());
// console.log(arr.__proto__);
// console.log(arr);
// console.log(murat.__proto__.__proto__.__proto__);
// console.log(anObject);
// console.log(anObject.__proto__);
// console.log(anObject.__proto__.__proto__);
// console.log(window);

// ------------------------------------- CLASS 

// class Dog{
//     constructor(name){
//         this.name = name;
//     }
//     bark(){
//         console.log("bark bark");
//     }
// }
// const karabas = new Dog("karabas")
// karabas.bark()

// parent class

class Person{
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthYear = birthYear
        this.employement = "";
    }
    greeting(){
        console.log(`Welcome ${this.firstName} ${this.lastName} .`);
    }
}

// child class

class Student extends Person{
    constructor (firstName , lastName, bY){
        // console.log("i'm student class");
        super(firstName, lastName, bY)
        this.employement  ="student"
    }
    learn(){
        console.log("studying javascript");
    }

    greeting(){
        console.log("second greeting");
    }
}

// teacher

class Teacher extends Person {
    teach(){
        console.log("teacher class");
    }
}
// console.log(Person.prototype);

let murat = new Student("murat","aykurt",1992)
let selin  =new Teacher("selin","aykurt",1993)
console.log(murat.greeting());
console.log(murat);
console.log(murat.learn());
console.log(selin);
console.log(selin.teach());
console.log(selin.greeting());
console.log(murat.toString());
console.log(murat);
