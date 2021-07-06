// var colors = ["Red", "Blue", "Yellow"]; 
// var name = colors[0]; 
// colors[0] = "green"
// console.log(colors);
// console.log(colors[0]);
// var names1 = ["john","james","24"]
// console.log(names1);
// console.log(typeof names1);
// var names = {firstName:"John", lastName:"James", age:24};
// console.log(names);
// console.log(typeof names);
// var l = ["John" , "James" , "Oliver" , "Aaron" , "Scott"];
// var x = l.length;          // the length of name is 5

// console.log (x);

// var dogs = ["Bulldog" , "Beagle" , "Rottweiler"];
// var cats = ["Ragdoll" , "Sphynx" , "Birman"];

// // var pets = dogs.concat(cats)
// // console.log(typeof pets);
// // console.log(pets);

// var birds = ["Parrot" , "Owl" , "Finch"];
// var pets2 = dogs.concat(cats, birds); 
// // console.log(pets2);
// // console.log(cats);
// // console.log(typeof cats);
// // console.log(cats);
// // console.log(cats.sort());

// console.log(cats.push("kedi1","kedi2"));
// console.log(cats);
// console.log(cats.pop(2));
// console.log(cats);
// cats.shift(); // ilk eleman silinir
// console.log(cats);
// cats.unshift("kedi3") // ilk satıra eleman eklenir
// console.log(cats);

// // splice

// var colors=["Red" ,"Yellow", "Green", "Blue"];
// colors.splice(1,4,"Pink","blueprint")
// console.log(colors);

// // slice

// var colors = ["Red" ,"Yellow", "Green", "Blue"];
// var newColors = colors.slice(1, 3);
// console.log(colors);
// console.log(newColors);


//indexOf()

// var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
// var x = colors.indexOf("green",5); // ilk parametre aranılan string- ikincisi ise 
// console.log(x);

// console.log(colors.lastIndexOf("Green",5));

// var x = ["9","25","111","John","James","Aaron"];
// console.log (x.sort());
// console.log(colors);

// var arr = ["bmw","mercedes","opel","mazda"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// console.log(arr[arr.length-1]="kia");
// console.log(arr);
// console.log(arr.indexOf("mazda"));
// arr.push("renault")
// console.log(arr);
// arr.unshift("toyota")
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.sort());
// console.log(arr.indexOf("opel"));
// console.log(arr.includes("opel"));
// var str = "chevrolet,dacia"
// var  arr2 = str.split()
// console.log(arr2);
// var arr3 = arr2.concat(arr)
// console.log(arr3.splice(4,2)); 
// console.log(arr3);
// console.log(arr3.splice(2,3)); 

// console.log(arr3);
// var arr4 = arr3.concat(arr3+arr2)
// console.log(arr4);
// var arr5 = arr4.split()
// console.log(arr5);

function sameLevel2() {
	let a = 10;
	let b = 20;
	console.log({a, b});
}
function sameLevel1() {
	let a = 30;
	let b = 8;
	console.log({a, b})
	sameLevel2();
}
let b = 5;
sameLevel1();
console.log({b});