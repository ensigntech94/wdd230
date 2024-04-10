const navBar = document.querySelector('.nav-bar');
const hambuger= document.querySelector(`.hambuger`);

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('active');
    navBar.classList.toggle('active');
})  

document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', ()=> {
        hambuger.classList.remove('active');
        navBar.classList.remove('active');
    })
})

