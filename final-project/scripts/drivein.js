let rentals = ['images/rental-1.png', 'images/rental-3.webp', 'images/rental-3.png', 'images/rental-5.png', 'images/rental-4.png', 'images/rental-6.png']
const rentalTypes = document.querySelector('#rental-type');
const driveIn = document.querySelector('.drive-in');

let rental1 = 'images/rental-1.png';
let rental2 = 'images/rental-3s.png';
let rental3 = 'images/rental-3.png';
let rental4 = 'images/rental-5.png';
let rental5 = 'images/rental-4.png';
let rental6 = 'images/rental-6.png';

// alert('yess')

rentalTypes.addEventListener('change', () => {
  let image = document.createElement('img');

  if (rentalTypes.value === "") {
    driveIn.innerHTML = ''
  }

  else if (rentalTypes.value === "Metro Scooter") { 
    driveIn.innerHTML = ''
    image.setAttribute('src', rental1)
    image.setAttribute('alt', '~Honda Metro Scooter')
  }

  else if (rentalTypes.value === "Dio Scooter") {
    driveIn.innerHTML = ''
    image.setAttribute('src', rental2);
    image.setAttribute('alt', 'Honda Dio Scooter')
  }

  else if (rentalTypes.value === "PCX150 Scooter") {
    driveIn.innerHTML = ''
    image.setAttribute('src', rental3);
    image.setAttribute('alt', '~Honda PCX150 Scooter')
  }

  else if (rentalTypes.value === "Pioneer ATV") {
    driveIn.innerHTML = ''
    image.setAttribute('src', rental4);
    image.setAttribute('alt', 'Honda Pioneer ATV')
  }

  else if (rentalTypes.value === "Wrangler - 4 door with a/c") {
    driveIn.innerHTML = ''
    image.setAttribute('src', rental5);
    image.setAttribute('alt', 'Jeep Wrangler - 4 door with a/c')
  }

  else if (rentalTypes.value === "Wrangler - 2 door") {
    driveIn.innerHTML = ''
    image.setAttribute('src', rental6);
    image.setAttribute('alt', 'Jeep Wrangler - 2 door')
  }

  driveIn.appendChild(image)
})


