//deposit function

// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// let deposit = 0;
// let witdrow = 0;
// let arrDeposited =[];
// let arrWithdraws =[];
// const toplam = movements.forEach(element => {
    
//     if (element > 0) {
//         deposit += element;
//         arrDeposited.push(element);

//     }
//     else {
//         witdrow += element
//         arrWithdraws.push(element);
//     }
    
// });

// console.log(deposit,witdrow);
// console.log(arrDeposited, arrWithdraws)

//map initials

// const str = 'Clarusway Online Career IT Training School';
// const arrayStr = str.split(" ");
// console.log(arrayStr)
// const firstEl = arrayStr.map(el => el[0])
// console.log(firstEl)
// const joinStr = firstEl.join("")
// console.log(joinStr)

// 3.soru

// let str = 'The Quick Brown Fox';
// let newStr = str.split("").map((c)=>{
//     return c === c.toUpperCase() ? c.toLowerCase(): c.toUpperCase()
// }).join("")
// console.log(newStr)


// 4.soru

// const words = [
//     "spray", 
//     "limit", 
//     "elite" ,
//     "exuberant", 
//     "destruction", 
//     "present", 
//     "clarusway", 
//     "future"
// ]

// let newWords = []

// words.map((el,i) =>{if (el.length>5){
//     newWords.push(el)
// }})

// const filteredWords = words.filter(el=> el.length>6)

// console.log(filteredWords)



// cart func

const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 6,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];


//   //1
//   let sum = 0;
//   for (let i = 0; i < cart.length; i++) {
//     const element = cart[i];
//     sum += element.price;
//   }
//   console.log(sum);
//   // 2
//   sum = 0;
//   for (const el of cart) {
//     sum += el.price;
//   }
//   console.log(sum);
//   // 3
//   sum = 0;
//   cart.forEach((element) => {
//     sum += element.price;
//   });
//   // 4
//   const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
//   console.log("result :>> ", result);
  
//   // 5
//   const re = cart.reduce((sum, curItem) => {
//     return sum + curItem.price;
//   }, 0);
//   console.log("re :>> ", re);
  
//   const vat = cart.reduce((sum, curItem) => {
//     return sum + (curItem.price * curItem.vat) / 100;
//   }, {});
//   console.log("vat :>> ", vat); 


//2b for-of with index
//   sum = 0;
//   for (const [index, el] of cart.entries()) {
//       console.log(index)
//     sum += el.price;
//   }
//   console.log(sum);



/*
--------------
for in example
--------------
*/
const parent = {
    firstName: "Mike",
    lastName: "Doe",
    profession: "Barber",
  };
  
  function Baby() {
    this.firstName = "unnamed";
    this.weight = 3.4;
  }
  
  Baby.prototype = parent;
  
  var sally = new Baby();
  sally.firstName = "Sally";
  
  for (const prop in sally) {
      if (Object.hasOwnProperty.call(sally, prop)) {
          const element = sally[prop];
          console.log(prop, ":>>", element);
    }
  }

