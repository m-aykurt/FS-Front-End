// es-5 old version

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos= function(){
    // console.log("isim:" + this.name + " yaş: " + this.age + "maaş: "+this.salary)
// }
// const emp = new Employee("murat",29,4000)
// console.log(emp)

// --------------- es-6

// class Employee{
//     constructor(name,age,salary){ //constructor
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }

//     showInfos(){
        // console.log("isim:" + this.name + " yaş: " + this.age + "maaş: "+this.salary)
//     }
// }
// const emp = new Employee("murat",29,4000)
// emp.showInfos()



/// static metodlar

// class Matematik{
//     static cube(x){
//         console.log(x*x*x)
//     }
// }

// // const math = new Matematik();
// // math.cube(3);

// Matematik.cube(4)

class Person{ // superclass, baseclass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("isim:" + this.name + " yaş: " + this.age)
    }
}

class Employee extends Person{ // derivedclass subclass childclass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;
    }
    showInfos(){
        console.log("isim:" + this.name + " yaş: " + this.age + " maaş: "+this.salary)
    }
    raiseSlary(amount){
        this.salary += amount 
    }
}

const emp = new Employee("murat",29,4000)
console.log(emp)
emp.showInfos()
emp.raiseSlary(500)
emp.showInfos()