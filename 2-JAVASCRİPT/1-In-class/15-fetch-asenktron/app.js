// -------------------  1'nci DERS

// setInterval
// function countSeconds(limit) {
//     let current = 0;
//     const intId = setInterval(() => {
//       if (current == limit) {
//         clearInterval(intId);
//         console.log('counter finished.');
//         return;
//       }
//       current++;
//       console.log(`${current} seconds passed.`);
//     }, 1000);
//   }
//   countSeconds(4);

// setTimeout

//   let current = 0;
//   function countSeconds2(limit) {
//     // recursive
//     if (current > limit) {
//       console.log('counter finished.');
//     } else {
//       if (current != 0) {
//         console.log(`${current} seconds passed.`);
//       }
//       current++;
//       setTimeout(countSeconds2, 1000, limit);
//     }
//   }
//   countSeconds2(3);

// ------------         PROMISE

new Promise((resolve, reject) => {
  const isSuccesfull = false;
  if (isSuccesfull) {
    resolve("task completed succesfully");
  }
  reject("failed");
})
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
