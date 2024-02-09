// copyright
const copyrightSymbol = '\u00A9';
const copyright = document.getElementById("copyright").innerText;

document.getElementById('copyright').innerText = `Igwe Emmanuel ${copyrightSymbol} 2024 ${copyright}`;

// last modified
const lastModified = document.lastModified;

document.getElementById('last-modified').innerText = `Last Modified: ${lastModified}`;