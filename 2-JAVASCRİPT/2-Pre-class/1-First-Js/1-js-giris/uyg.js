var customer_name = "murat";
var customer_surname = "aykurt";
var customer_number = "3312215561";
var customer_order = 100;
var customer_gender = false; //erkek true , kadın false
// object
var customer_adress = {
    city:"kırklareli",
    district: "center",
    country: "turkey"
};
//array
var customer_hobbies = ["sky","coding","finance"];

var order1 = "100";
var order2 = "200";

var total = Number(order1) + Number(order2);
console.log(total)

var order3 = parseInt("1.100");
var order4 = parseInt("3.200");

var total = Number(order3) + Number(order4);
console.log(total);


var year_birth = 1992
console.log(new Date().getFullYear() - year_birth)

var course = "Modern Javascript Kursu";
console.log(course.length)
