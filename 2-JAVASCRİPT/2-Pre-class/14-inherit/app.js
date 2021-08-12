const result = document.querySelector(".result");

// static
let car = {
  name: "toyota",
  model: "corolla",
  color: "blue",
  start: function () {
    return this.name + " " + this.model + " is working";
  },
};

function Person(first,last,age,color){
    this.first = first;
    this.last = last;
    this.age = age;
    this.color = color;
    this.fullName = ()=>{
        return this.first+" "+this.last
    }
    
}

let myNewPerson = new Person("murat","aykurt",29,"blue")
let myNewPerson2 = new Person("Selin","aykurt",28,"brown")

// console.log(myNewPerson)
// console.log(myNewPerson.firstName)
// console.log(myNewPerson.first)
// console.log(myNewPerson["last"])
let message="";
for (x in myNewPerson2){
    message += myNewPerson2[x]
}
// console.log(message)
myNewPerson.haveHair = true;
console.log(typeof myNewPerson)
Person.prototype.hair="yellow";
Person.prototype.changeName = function(name){
    return this.first = name;
}

// console.log(myNewPerson)
// console.log(myNewPerson.fullName())
// console.log(myNewPerson2.fullName())
// console.log(myNewPerson.changeName("ahmet"))
console.log(myNewPerson.hair)
console.log(myNewPerson2.changeName("halil"))