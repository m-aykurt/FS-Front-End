// yapıcı metod-fonksiyon constructor

function Employee(name, age, salary) {
  // yapıcı fonksiyon
  this.name = name;
  this.age = age;
  this.salary = salary;

  this.showInfos = function(){
      console.log(this.name, this.age, this.salary)
  }
}

const emp1 = new Employee("murat", 29, 5000);
const emp2 = new Employee("selin", 29, 7000);

emp1.showInfos()
emp2.showInfos()