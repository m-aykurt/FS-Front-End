// async function test(data) {
  // js promise döndürecek
//   return  data

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("bu bir degerdir");
//     }, 2000);
//   });

//   let response = await promise; // 5 saniye bekletecek

//   console.log(response)
//   console.log("naber");
// }
// test("merhaba");



// async function testData(data) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("lutfen string deger girin"));
//       }
//     }, 3000);
//   });
  
//   const response = await promise;
//   return response;

// }

// testData(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));



async function getCurrency(url){
    const response = await fetch(url) // response object
    console.log(response);

    const data = await response.json();

    return data;
}

getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=1fb042225695119d6c54e7e4ed364408").then(response => console.log(response))