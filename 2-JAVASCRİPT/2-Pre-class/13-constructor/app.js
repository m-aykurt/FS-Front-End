//object literals

// let yigit = {
//     name:"yigit",
//     yearOfBirth:2010,
//     job:"student"
// }

// function Person(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    // this.calculateAge = function(){
    //     return new Date().getFullYear() - yearOfBirth
    // }
// }

// let yigit = new Person("yigit",2010,"student");
// let emel = new Person("emel",1990,"teacher")

// console.log(yigit);
// console.log(yigit.name);
// // console.log(yigit.name[0]);
// console.log(yigit.job);
// console.log("*********************");

// console.log(emel.name);
// console.log(emel.yearOfBirth);
// console.log(emel.job);
// console.log(emel.calculateAge());



// prototype

// let Person = function(name, yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear() - this.yearOfBirth
// }

// Person.prototype.getName= function(){
//     return this.name
// }

// Person.prototype.lastName = "aykurt";

// let selin= new Person("selin",1993,"teacher");
// let murat= new Person("murat",1992,"Developer");
// console.log(selin);
// console.log(selin.calculateAge());

// console.log("*********************");

// console.log(murat);
// console.log(murat.calculateAge());
// console.log(murat.getName());

// console.log(murat.hasOwnProperty("age"));

// console.log(murat.lastName);
// console.log(selin.lastName);

//              constructor uygulama


// let Employee = function(name,salary){
//     this.name = name;
//     this.salary = salary
    
// }

// Employee.prototype.calculateSalary = function(){
//     var month = new Date().getMonth() +1;
//     var tax = 0;
//     total = this.salary * month

//     if(total<=20000){
//         tax = total* 0.20
//     } else if (total<20000 && total <=30000){
//         tax = total *0.25
//     } else {
//         tax = total * 0.3
//     }
//     return {
//         tax : tax,
//         paid : total -tax
//     }
// }

// let emp1 = new Employee("Selin",6000);
// let emp2 = new Employee("Murat",4500);

// let emp1_salary = emp1.calculateSalary();
// console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır`);


//                  object create

let personProto  ={
    calculateAge : function(){
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

let selin  = Object.create(personProto);
console.log(selin);
// console.log(yigit.calculateAge());

selin.name = "selin";
selin.yearOfBirth = 1993;
selin.job = "teacher";

let murat = Object.create(personProto, {
    name : {value:"murat"},
    yearOfBirth : {value : 1992},
    job : {value : "developer"}
})

console.log(selin);
console.log(selin.calculateAge());

console.log(murat);



