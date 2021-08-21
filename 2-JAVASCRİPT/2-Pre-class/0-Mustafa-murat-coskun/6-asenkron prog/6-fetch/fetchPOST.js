class Request {
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "DELETE",
      })
        .then((response) => resolve("veri islemi başarılı"))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

//post

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "thriller",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// put

// request
//   .put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: 10,
//     title: "tarkan karma",
//   })
//   .then((newTitle) => console.log(newTitle))
//   .catch((err) => console.log(err));

//delete

request
  .delete("https://jsonplaceholder.typicode.com/albums/10")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
