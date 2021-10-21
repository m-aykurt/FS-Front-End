class Person {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    selam(){
        console.log(`merhaba ben ${this.name}`)
    }
  }

  Person.prototype.calcAge = function(){
      return new Date().getFullYear() - this.year
  }

  Person.prototype.hello = function(){
      console.log(`hi my name is ${this.name}. i m ${this.year} years old`)
  }
const turgut = new Person("turgut",1990)
// const murat = new Person("murat",1992)

class Developer extends Person{
    constructor (name , year){
        super(name, year)

        this.language = "REACT"
    }
    company(sirket){
        console.log(`hi my name is ${this.name}. im working on ${sirket}`)
    }
}

Developer.prototype.ide = function(ide){
    console.log(ide)
}

const murat= new Developer("murat",1992)

console.log(murat)
// murat.company("hepsiburada")
murat.ide("vsCode")