const modeToggle = document.querySelector('#mytoggle');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

modeToggle.addEventListener('change', () => {
    main.classList.toggle('darkmode');
    nav.classList.toggle('navdark')

})