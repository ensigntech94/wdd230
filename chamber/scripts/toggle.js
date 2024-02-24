const modeToggle = document.querySelector('#mytoggle');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside')

modeToggle.addEventListener('change', ()=> {
    main.classList.toggle('darkmode')
    nav.classList.toggle('navigation-dark')
    aside.classList.toggle('aside-dark')
})
 