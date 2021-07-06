
// 1. while loops

 
/*   let i = 0, sum = 0;

while (i < 6) {          // Bu şekilde bırakılırsa sonsuz döngüye girer.
    sum = sum + i;
    i++;                 // Bunu önlemek için i++ gibi bir update yapmalıyız.
    console.log(sum)       // Her döngü de bir çıktı alıyoruz.
}
console.log("Total is :", sum)  // Tüm döngüler tamamlandığında bir çıktı alıyoruz.
console.log(`Total is : ${sum}`)  // Değişkenin değerini de böyle alabiliyoruz. Back tik ve dolar işaretli süslü parantez içinde değişkeni yazıyoruz.
 */







// 2. do...while statements       (do...while hiç ihtiyacı olmamış. Kodu en az bir defa çalıştırılmak isteniyorsa bu yapıyı kullanmak lazım.)

/* let i = 6,
  sum = 0;

do {            // while dan ve condition'ından önce en az bir defa işlemi yapıyor.
    sum += i;      
} while (i<5);
console.log(sum)
 */




// let i = 3,
//   sum = 0;

// do {           
//     sum += i;      
//     i++;
// } while (i<5);
// console.log(sum)


// for (i=1;i<100;i++){
//   if(i%3===0 && i%5!==0){
//       console.log("fizz");
//   } else if (i%5===0 && i%3!==0){
//       console.log("buzz");
//   } else if (i%15===0){
//       console.log("fizz-buzz");
//   } else{
//       console.log(i);
//   }
// }



for (let i=1; i<11; i++){
  for(let j=1; j<11; j++){
      console.log(`i x j =` , i*j);
  }
}



















