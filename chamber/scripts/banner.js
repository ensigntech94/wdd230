const advertisment = document.querySelector('.advertisment');
const closed = document.querySelector('.close');

let date = new Date();

let dayOfWeek = date.getDay();
let time = date.getDay();

console.log(time)

if (dayOfWeek == 1 || dayOfWeek === 2 || dayOfWeek === 3) {
    advertisment.style.display = 'block';
}

closed.addEventListener('click', ()=> {
    advertisment.style.display = 'none';
})