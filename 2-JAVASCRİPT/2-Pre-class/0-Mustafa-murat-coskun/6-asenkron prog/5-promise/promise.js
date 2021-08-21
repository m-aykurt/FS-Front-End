// function getData(data) {
//   // promeise objesi döndüren fonksiyon
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         //olumlu
//         resolve(data);
//       } else {
//         //olumsuz
//         reject(new Error("lütfen string deger girin"));
//       }
//     }, 3000);
//   });
// }

// getData("hi i'm a string")
//   .then((response) => {
//     console.log("gelen deger " + response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("lütfen sayi giriniz "));
      }
    }, 3000);
  });
}
addTwo(5)
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => {
    console.log(response2);
  })
  .catch((err) => console.log(err));
