// ajax, callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  // get request
    // get(url,callback) {
    //   this.xhr.open("GET", url); // baglantı acık

    //   this.xhr.onload = () => {
    //     if (this.xhr.status === 200) {
    //       callback(this.xhr.responseText); // istek bitti
    //     } else{
    //         // hata durumunda
    //         callback("herhangi bir hata olustu", null)
    //     }
    //   };
    //   this.xhr.send();
    // }

  ///*---------------*-*-*-*----************ POST------------**********///

  // post(url, data, callback) {
  //   this.xhr.open("POST", url);
  //   this.xhr.setRequestHeader("Content-type", "application/json");

  //   this.xhr.onload = () => {
  //     if (this.xhr.status === 201) {
  //       // başarılı
  //       callback(null, this.xhr.responseText);
  //     } else {
  //       callback("herhangi bir hata oluştu", null);
  //     }
  //   };
  //   this.xhr.send(JSON.stringify(data));
  // }

  // PUT------GUNCELLEME

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        // başarılı
        callback(null, this.xhr.responseText);
      } else {
        callback("put request:herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
}

const request = new Request();

//post

// request.post(
//   "https://jsonplaceholder.typicode.com/albums",
//   { userId: 3, title: "Thriller" },
//   function (err, album) {
//     if (err === null) {
//       console.log(album);
//     } else {
//       console.log(err);
//     }
//   }
// );



// put

// request.put(
//   "https://jsonplaceholder.typicode.com/albums/55",
//   { userId: 12, title: "Tarkan karma" },
//   function (err, album) {
//     if (err === null) {
//       console.log(album);
//     } else {
//       console.log(err);
//     }
//   }
// );




///////////////////------GET--------/////////////
// request.get("https://jsonplaceholder.typicode.com/posts", function(err,response){
//     if(err ===null){
//         // basarılı
//         console.log(response)
//     } else{
//         // hata
//         console.log(err)
//     }
// });

// request.get("https://jsonplaceholder.typicode.com/posts/11", function(err,response){
//     if(err ===null){
//         // basarılı
//         console.log(response)
//     } else{
//         // hata
//         console.log(err)
//     }
// });
