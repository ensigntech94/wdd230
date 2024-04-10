const countryTag = document.querySelector('#country');
const sortCountries = [];

async function getCountries() {
  let response = await fetch('https://restcountries.com/v3.1/all');
  let data = await response.json();
  displayCountries(data)
}

function displayCountries(data) {
  data.forEach(country => {
    let countryName = country.name.common;
    sortCountries.push(countryName);
    // console.log(countryName)
  });
  sortCountries.sort()
  sortCountries.forEach(countryName => {
    let optionElement = document.createElement('option');
    optionElement.setAttribute('value', countryName);
    optionElement.innerHTML += countryName
    countryTag.appendChild(optionElement);
  });
}

getCountries()



