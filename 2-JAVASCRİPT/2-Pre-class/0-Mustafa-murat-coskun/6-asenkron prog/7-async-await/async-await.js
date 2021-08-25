class Request {
  async get(url) {
    const response = await fetch(url); // response object

    const data = await response.json(); /// json obj.

    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    let data1 = await response.json();
    return data1;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }); // response object

    let data2 = await response.json();
    return data2;
  }

  async delete(url) {
    let data = fetch("https://jsonplaceholder.typicode.com/albums/1", {
      method: "DELETE",
    }); // response obj

    // let data3 = await response.json();
    return "veri silme başarılı";
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

// request
//   .delete("https://jsonplaceholder.typicode.com/albums/10")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));
