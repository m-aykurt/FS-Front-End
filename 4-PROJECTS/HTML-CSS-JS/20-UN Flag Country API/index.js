fetch("https://restcountries.eu/rest/v2/name/germany")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data[0]);
  });

const renderCountry = (data, className = "") => {
  console.log(data);
  const countriesSection = document.querySelector(".countries");
  const html = `
  <div class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
        data.capital
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
        +data.population / 1_000_000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
        data.languages[0].name
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
        data.currencies[0].name
      }</p>
    </div>
  </div>`;
};

const getCountryData = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      // console.log(response)
      if (!response.ok) throw new Error("something went wrong!");
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData[0]);
      renderCountry(countryData[0]);
    });
};

getCountryData("italy");
// getCountryData("Usa")

fetch("https://restcountries.eu/rest/v2/alpha/SYR").then((response) =>
  console.log(response)
);

const getCountryAndNeighbours = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      // console.log(response)
      if (!response.ok) throw new Error("something went wrong!");
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData[0]);
      renderCountry(countryData[0]);
    }).then((neighbours)=>{
      console.log(neighbours)
    })
};

getCountryAndNeighbours("turkey")