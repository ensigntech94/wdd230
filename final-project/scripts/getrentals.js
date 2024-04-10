const url = "https://raw.githubusercontent.com/Heavenlyaura/wdd230/main/final-project/data/rentals.json"
const table = document.querySelector('table');
const tBody = document.querySelector('.tbody');


async function getRentals(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayRentals(data)
  // console.table(data)
};



function displayRentals(data) {

  let rentalsData = data.Rentals;
  // console.log(rentalsData)

  rentalsData.forEach(data => {
    let type = data.Type;
    let maxPersons = data.MaxPersons;
    let reserveFull = data.Reservations.fullDay;
    let reserveHalf = data.Reservations.halfDay;
    let walkFull = data.Walkin.halfDay;
    let walkHalf = data.Walkin.fullDay;


    let row = `<tr> 
    <td data-cell="Rental Type" >${type}</td>
    <td data-cell="Max. Persons" >${maxPersons}</td>
    <td data-cell="Half Day (hrs)	" >${reserveFull}</td>
    <td data-cell="Full Day	" >${reserveHalf}</td>
    <td data-cell="Half Day (3 hrs)" >${walkFull}</td>
    <td data-cell="Full Day
    " >${walkHalf}</td>
    </tr>`
          
        tBody.innerHTML += row
  });

}

getRentals(url)