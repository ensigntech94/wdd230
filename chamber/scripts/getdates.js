// copyright
const copyrightSymbol = '\u00A9';
const copyright = document.getElementById("copyright").innerText;
const visited = document.querySelector('.visited');
let numVisits = Number(localStorage.getItem('visits') || 0);

if (numVisits !== 0) {
    visited.textContent = `Visited: ${numVisits}`;
}
else {
    visited.textContent = 'This is your first time visiting! Welcome!'
}

numVisits++

localStorage.setItem('visits', numVisits)


document.getElementById('copyright').innerText = `Igwe Emmanuel ${copyrightSymbol} 2024 ${copyright}`;

// last modified
const lastModified = document.lastModified;

document.getElementById('last-modified').innerText = `Last Modified: ${lastModified}`;