const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const city = document.querySelector('.city')
const emoji = document.querySelector(".emoji");
const days = document.querySelector(".days");
const apiKey = "";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiKey = "7a8363f78b4734d0e0c68ee8e7742838"; // OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        getWeather(url);
        getForcast(forcastUrl)

    });
} else {
    console.log("lll");
}

async function getWeather(url) {
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log(data);
    displayWeather(data);
}

async function getForcast(url) {
    const reponse = await fetch(url);
    if (reponse.ok) {
        const data = await reponse.json();
        console.log(data);
        displayForcast(data);
    }
    else {
        console.error('rerr')
    }
}

function displayWeather(data) {
    let cit = data.name;
    let temp = data.main.temp;
    let desc = data.weather[0].description;

    let content = ''
    if (temp <= 10) {
        content = '🌨';
    }
    else if (temp > 10 && temp < 20) {
        content = '🌨'
    }
    else if (temp > 20 && temp < 30) {
        content = '🌤'
    }
    else if (temp > 30) {
        content = '☀️'
    }

    city.textContent = `City: ${cit}`;
    temperature.textContent = `${content} ${temp}C - ${desc}`


}

function displayForcast (data) {
    let list = data.list;
    let currentDate = new Date();
    let day = currentDate.getDate()
    let dayArray = []

    list.forEach(element => {
        let dt = element.dt;
        let dateTime = new Date(dt * 1000)
        let dateNum = dateTime.getDate();
        if (dateNum > day && !dayArray.includes(dateNum)) {
            let monthIndex = dateTime.getMonth()
            let month = months[monthIndex];
            dayArray.push(dateNum);
            let temp = element.main.temp;
            let description = element.weather[0].description;
            let forecast = document.createElement('p');

            let content = ''
            if (temp <= 10) {
                content = '🌨';
            }
            else if (temp > 10 && temp < 20) {
                content = '🌨'
            }
            else if (temp > 20 && temp < 30) {
                content = '🌤'
            }
            else if (temp > 30) {
                content = '☀️'
            }

            forecast.innerHTML = `<strong>${month} ${dateNum}:</strong> ${content} ${temp} - ${description}`;
            days.append(forecast);
        }
    });


    
}