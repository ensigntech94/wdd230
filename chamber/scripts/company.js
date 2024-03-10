const linksURL = "https://heavenlyaura.github.io/wdd230/chamber/data/members.json";
const layout = document.querySelector('.layout');
const grid = document.querySelector('.grid-button')
const list = document.querySelector('.list-button')

document.addEventListener('DOMContentLoaded', () => {
    layout.classList.add('grid')
})

/* button switch */

list.addEventListener('click', () => {
    layout.classList.add('list');
    layout.classList.remove('grid');
})
grid.addEventListener('click', () => {
    layout.classList.add('grid')
    layout.classList.remove('list')
})


async function getCompany(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        // console.table(data);

        displayCompany(data.company);
    }
}

function displayCompany(companies) {

   companies.forEach(company => {
    // console.log(company)
    let name = document.createElement('p')
    let image = document.createElement('img');
    let card = document.createElement('div');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let website = document.createElement('a')

    name.textContent = company.name;
    name.classList.add('name')

    // console.log(company.logo)
    /* set website attribute */
    website.setAttribute('href', company.website)
    website.innerHTML = company.website

    /* set image attribute */ 
    image.setAttribute('src', company.logo)
    image.setAttribute('alt', `${company.name} logo`)
    image.setAttribute('width', '200')

    /* set address and contact */
    address.textContent = company.address;
    address.classList.add('address')
    contact.textContent = company.contact;


    card.appendChild(name)
    card.appendChild(image)
    card.appendChild(address)
    card.appendChild(contact)
    card.appendChild(website)

    layout.appendChild(card)

   });
}

getCompany(linksURL)
