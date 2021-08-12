class Person{
    constructor (p1,p2,p3,){
        this.name = p1;
        this.age = p2;
        this.weight = p3;
    }

    get Name(){
        return this.name
    }
    get Age(){
        return this.age
    }
    get Weight(){
        return this.weight
    }

    set Name(newName){
        this.name = newName
    }
    set Age(newAge){
        this.age = newAge
    }
    set Weight(newWeight){
        this.weight = newWeight
    }
    Message(){
        return "ecmascript ile nesne yönelimli programlama"
    }

}



class Engineer extends Person{
    constructor (p1,p2,p3,p4){
        super(p1,p2,p3)
        this.subject = p4;
    }

    get Subject(){
        return this.subject
    }


    set Subject(newSubject){
        this.subject = newSubject
    }
    MessageAlert(){
        alert(super.Message())
    }

}

let myPerson = new Person("murat", 29, 80)
let myEng = new Engineer("selin", 28 , 55, "mechanical")
// console.log(myPerson.name)
// console.log(myPerson.getName())
// console.log(myPerson.getAge())
// console.log(myPerson.setAge(23))
// console.log(myPerson.getAge())

// console.log(myPerson.Name)
// console.log(myPerson.Age)
// console.log(myPerson.Weight)

// myPerson.Name = "hasan"
// myPerson.Age = 25
// myPerson.Weight = 66

// console.log(myPerson.Name)
// console.log(myPerson.Age)
// console.log(myPerson.Weight)


console.log(myEng.Name)
console.log(myEng.Age)
console.log(myEng.Weight)
console.log(myEng.Subject)

myEng.Name = "hasan"
myEng.Age = 25
myEng.Weight = 66
myEng.Subject = "electrical"

console.log(myEng.Name)
console.log(myEng.Age)
console.log(myEng.Weight)
console.log(myEng.Subject)

myEng.MessageAlert()