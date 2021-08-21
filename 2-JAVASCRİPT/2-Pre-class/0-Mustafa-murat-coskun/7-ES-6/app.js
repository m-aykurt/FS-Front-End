// destructing

// const arr = [100,200,300,400];

// let number1, number2;

// [number1,...number2] = arr;
// [number1,number2] = arr;


// //obje

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }

// const {a,c,e} = numbers
// console.log(a,c)


// const getLangs = ()=> ["python", "java","c++"];

// const [lang1,lang2,lang3]=getLangs()
// console.log(lang1,lang2,lang3)


///////----------///////////// spread opr


// const langs = ["python", "java","c++","js"];

// // console.log(...langs)

// const langs2 = ["php", "c#", ...langs]
// console.log(langs2)

// const numbers = [1,2,3,4,5,6,7,8,9,0]

// const [a,b,...number2] = numbers;
// console.log(a,b,...number2)


// const addNumbers = (a,b,c) =>{
//     console.log(a+b+c)
// }
// const numbers = [100,200,300];

// addNumbers(...numbers)

////--------------- MAP -----/-----------///////////////

// let myMap = new Map();

// // console.log(typeof myMap)

// const key1 = "mustafa";
// const key2 = {a:10 , b:20};
// const key3 = ()=>2

//     // set
// myMap.set(key1, "string değer")
// myMap.set(key2, "object literal")
// myMap.set(key3, "function")

//     // set

// console.log(myMap.get(key1))
// console.log(myMap.get(key2))
// console.log(myMap.get(key3))

// // map boyutu

// const cities = new Map();

// cities.set("ankara",5);
// cities.set("istanbul",15);
// cities.set("izmir",4);

// for each

// cities.forEach((value,key)=>{
//     console.log(value, key)
// })

// for of

// for (let [key,value] of cities){
//     console.log(key,value)
// }

// const array = [["key1","value1"],["key2", "value2"]];

// const lastMap = new Map(array);
// console.log(lastMap)

// map lerden array

const cities = new Map();

cities.set("ankara",5);
cities.set("istanbul",15);
cities.set("izmir",4);

const array = Array.from(cities)

console.log(array)
console.log(typeof array)