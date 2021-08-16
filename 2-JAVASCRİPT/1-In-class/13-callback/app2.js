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

const words = [
    "spray", 
    "limit", 
    "elite" ,
    "exuberant", 
    "destruction", 
    "present", 
    "clarusway", 
    "future"
]

let newWords = []

// words.map((el,i) =>{if (el.length>5){
//     newWords.push(el)
// }})

const filteredWords = words.filter(el=> el.length>6)

console.log(filteredWords)
