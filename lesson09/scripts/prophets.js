const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');


async function getProphets(url) {
    const response = await fetch(url); 

    if (response.ok) {
        let data = await response.json();
        // console.table(data.prophets)
        // console.log(data)

        displayProphets(data.prophets)
    }
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        console.log(prophet);

        let section = document.createElement("section");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let pob = document.createElement('p');
        let dob  = document.createElement('p');

        image.setAttribute("src", prophet.imageurl);
        image.setAttribute("alt", `Image of ${prophet.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "340");
        image.setAttribute("height", "440");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`

        section.appendChild(h2);
        section.appendChild(image);
        section.appendChild(pob)
        section.appendChild(dob)
        
        cards.appendChild(section)
    });
}

getProphets(url)