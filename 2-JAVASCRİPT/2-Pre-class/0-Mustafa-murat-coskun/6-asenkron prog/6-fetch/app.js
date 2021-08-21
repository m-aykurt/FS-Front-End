function getTextFile() {
  fetch("example.txt")
    .then((response) => {
      response.text();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
}

// getTextFile();

function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// getJsonFile();

// getExternal

function getExternalAPI() {
  fetch(
    "http://api.exchangeratesapi.io/v1/latest?access_key=1fb042225695119d6c54e7e4ed364408&"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.rates.TRY))
    .catch((err) => console.log(err));
}

getExternalAPI()