const person = {
    age:25,
    tellAge : function(){
        // this-person

        console.log(this)
        console.log(this.age)
    },
    windowObj : console.log("this: -- ",this)
}
person.tellAge()