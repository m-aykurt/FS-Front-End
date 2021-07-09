// const cars = ["audi","opel","fiat"]

// console.log(typeof cars);
// console.log(cars);


// new array yöntemi cok kullanılmıyor
// const numbers = new Array(2,10)
// console.log(numbers);
// const numbers2 = new Array(10)
// console.log(numbers2);

// length
// var names = ["john","james","walter","edward"];
// console.log(names.length);


// concat

// const cars = ["audi","opel","fiat"]
// const cars2= ["BMW","FERRARİ","MERCEDES"]
// const cars3 = cars + cars2   // string döner array bozulur
// const cars4 = cars.concat(cars2)
// console.log(cars.concat(cars2));
// console.log(cars2);
// console.log(cars3);
// console.log(cars4);



// sort() sıralamayı string olarak yapıyor

// const points = [40,100,1,15,25,10]
// console.log(points.sort());
// points.sort(function(a,b){return a-b}) // number olarak sıralama yapıyor

// console.log(points.sort(function(a,b){return a-b})
// );

// push metodu sona ekler

// var names = ["john","james","walter","edward"];

// console.log(names.push("2"));
// // console.log(names.push("2",1));
// console.log(names);

// pop() parametre almaz sonuncuyu siler

// console.log(names.pop());
// console.log(names);


// shift - unshift 

// const cars = ["audi","opel","fiat"]

// console.log(cars.shift());  // cıkarılan indeksteki değeri  döndürür

// console.log(cars);

// cars.unshift("ferrari"); // ilk sıraya ekler
// console.log(cars);


// splice()

// var names = ["john","james","walter","edward"];

// names.splice(1,2,"ahmet","mehmet")
// names.splice(1,5,"ahmet","mehmet")
// names.splice(1,0,"ahmet","mehmet")
// names.splice(1,5,"ahmet");
// var deleted  =names.splice(1,5,"ahmet");
// names.splice(1,0,"john","james","walter","edward");
// names.splice(1,0,"john","james","walter","edward");
// console.log(deleted);
// console.log(names);

// names.splice(0,-1,"ahmet","mehmet")
// console.log(names);

// slice()
// const months = ["jan","march","april","june","july"]
// console.log(months.slice(1,3));
// console.log(months.slice(1,-1));
// console.log(months.slice(-4,-1));// calısır 
// console.log(months.slice(-1,-4,));// calısırmaz
// console.log(months);

// reverse()
// const months = ["jan","march","april","june","july"]

// console.log(months.reverse()); // orjinal arrayı değiştirir


// indexOf() varsa ilk indeksi yoksa -1 döndürür

// const months = ["jan","march","april","june","july"]

// console.log(months.indexOf("jan"));
// console.log(months.indexOf("march"));
// console.log(months.indexOf("April")); // case sensitive
// console.log(months.indexOf("march",-1));
// console.log(months.lastIndexOf("march",-3));


//primitivler değişmez
/* function test1(testData) {
  console.log(`inside function before operation ${testData}`);
  testData = 10;
  console.log(`inside function after operation ${testData}`);
}

const x = 5;
test1(x);
console.log(`outside function after operation ${x}`); */

//Arraylerde durum
// function test2(testData) {
//     console.log(`inside function before operation ${testData}`);
//     testData = [2, 4, 6, 8];
//     console.log(`inside function after operation ${testData}`);
//   }
  
//   const arr = [1, 2, 3, 4];
//   test2(arr);
//   console.log(`outside function after operation ${arr}`);
  
  
// const arr = [1,2,3,4,5,6,7,8,9]
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];


// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(x,typeof x);

// const [t,u,v,...others]=arr;
// console.log(t,u,v);
// console.log(others);
// console.log(others);
// console.log(others, Array.isArray(others));
// console.log(arr instanceof Array);
// console.log(arr);


// const arr = [3,4]
// // const [x,y,z] = arr
// const [x=1,y=1,z=1] = arr
// console.log(x,y,z);

// destructrigin assigment

// let x = 5;
// let y= 10;
// [x,y] = [y,x];
// console.log("x: ",x,"y: ",y);

// const  colors = ["red","yellow",,"green","blue","pink","purple","geay","lime"]

// for (let i =0;i<colors.length;i++){
//     console.log(colors[i]);
// } // 2.yöntem

// for (i of colors) console.log(i); //2.yöntem

// for (i in colors) console.log(colors[i]); // 3.yöntem

// colors.forEach(i=>console.log(i)) // en cok kullanılan ve empty element göstermez



// diğer ders notları


// EXAMPLES
//P.S.
//primitive = number, string, boolean
//reference = object, array
//const atamalarında primitive ler değiştirilemezken reference tiptekiler değiştirilebilir
// const arr = [1,2,3,4,5,6,7,8];
// const [t,u,v, ...others] = arr; //...others ile kalanları random atadı
// console.log(t,u,v); //1 2 3
// console.log(others, Array.isArray(others));//Array array midir?
// console.log(arr instanceof Array);//Array array midir?
// const arr =[3,4]
// const[x=1,y=1,z=1] = arr //3 ü x e, y yi 4 e, z e değer verilmediği için atanmış 1 değerini kullandı
// console.log(x,y,z);
//destructuring assignment
// let x = 5;
// let y = 10;
// [x, y] = [y, x]; //x ve y yi birbirine atadık 
// console.log("x  =",x,"y=",y);
// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Purple"];
// // for (let i = 0; i < colors.length; i++) {
// //     console.log(colors[i]); //uzun yöntem ile array içinden tek tek dışarı çıkarıp yazdırdık
// // }
//alternate 1
// for (i of colors) console.log(i);//daha kısa yöntem ile array içinden tek tek dışarı çıkarıp yazdırdık
//alternate 2
// for (i in colors) console.log(colors[i]); //for ve in empty elemanı undefined olarak görür
//alternate 3
//colors.forEach(i=>console.log(i)); //forEach ve forIn empty eleman var ise görmez