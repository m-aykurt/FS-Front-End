// setinterval

// function countSeconds(limit) {
//   let current = 0;
//   const intId = setInterval(() => {
//     if (current == limit) {
//       clearInterval(intId);
//       console.log('counter finished.');
//       return;
//     }
//     current++;
//     console.log(`${current} seconds passed.`);
//   }, 1000);
// }
// countSeconds(7);

// 2.örnek

// let current = 0;
// function countSeconds2(limit) {
//   // recursive
//   if (current > limit) {
//     console.log('counter finished.');
//   } else {
//     if (current != 0) {
//       console.log(`${current} seconds passed.`);
//     }
//     current++;
//     setTimeout(countSeconds2, 1000, limit);
//   }
// }
// countSeconds2(3);

// const promise = new Promise((resolve, reject) => {
//   const isSuccessful = true;
//   if (isSuccessful) {
//     resolve("task completed successfully");
//   }
//   reject("failed");
// });

// promise
//   .then((sonuc) => {
//     console.log(sonuc);
//     return "devam ediyor";
//   })
//   .then((response) => console.log(response + " merhaba"))
//   .catch((err) => console.log(err)); 



//                  flag-api

