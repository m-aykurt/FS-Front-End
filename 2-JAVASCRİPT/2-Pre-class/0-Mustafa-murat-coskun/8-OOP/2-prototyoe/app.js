// function Employee(name,age){
//     this.name = name;
//     this.age = age;

// }

// //daha az memory kullanımı
// Employee.prototype.showInfos = function(){
//     console.log(`isim: ${this.name} yaş: ${this.age}`)
// }

// const emp1 = new Employee("murat",29);
// const emp2 = new Employee("selin",27);

// console.log(emp1)
// console.log(emp2)

// emp2.showInfos()
// emp1.showInfos()

///////--------------- CREATE ---------------////////////

// const obj = {
//     test1 : function(){
//         console.log("test-1")
//     },
//     test2 : function(){
//         console.log("test-2")
//     }
// }

// const emp = Object.create(obj);
// console.log(emp)

// function Person(){
// }

// Person.prototype.test1 = function(){
//     console.log("test - 1");
// }
// Person.prototype.test2 = function(){
//     console.log("test - 2");
// }

// function Employee(name,age){
//     this.name = name;
//     this.age = age
// }

// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.myTest = function(){
//     console.log("My Test")
// }

// const emp = new Employee("Murat",29);
// emp.test1();
// emp.myTest()
// console.log(emp)

///////////-------------------- CALL ----------//////////////////

// const obj1 = {
//   number1: 10,
//   number2: 20,
// };

// const obj2 = {
//   number1: 30,
//   number2: 40,
// };

// function addNumbers(number3, number4) {
//   console.log(this.number1 + this.number2 + number3 + number4);
// }
// //call
// addNumbers.call(obj1, 100, 200);
// addNumbers.call(obj2, 100, 200);
// //aplly
// addNumbers.apply(obj1, [100, 200]);

// // bind

// function getNumbersTotal(number3, number4) {
//   return this.number1 + this.number2 + number3 + number4;
// }

// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);

// console.log(copyFunc1)
// console.dir(copyFunc1)

// console.log(copyFunc1(100,200))


/////////////////------------------- prototype tabanlı kalıtım -------/////////////////

function Person(name,age){
    this.name = name;
    this.age = age;

}

Person.prototype.showInfos = function(){
    console.log("isim "+this.name + " yaş "+this.age)
}

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;

    Person.call(this, name,age);

    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.showInfos = function(){
    console.log("isim "+this.name + " yaş "+this.age+ " maas: "+this.salary)

}

const emp = new Employee("murat",29,4000)
console.log(emp)
emp.showInfos()