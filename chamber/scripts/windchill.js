const apiKey = 'b383bbd5eb04c4cb8572dae664aca5d4';
const city = 'kubwa'
const temperature = document.querySelector('.temperature');
const windChillDoc = document.querySelector('.windchill');
const emoji = document.querySelector('.emoji');

function celToFah(celsius) {
    calculation = celsius * 9/5;
    fahrenheit = calculation + 32
    return fahrenheit;
}

function calcWindChill(temp, wind) {
   
    if (temp <= 50 && wind > 3) {
        /* 
        wind chill formular;
        Twc = 33.74 + 0.6215Ta - 35.75v^0.16 + 0.4275Ta*v^0.16
        where;
        Ta = temperature in fahrenheit
        v = wind speed in miles per hour
        */
       try {
           let windChill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)); 
           return `Wind Chill: ${windChill.toFixed(2)}`;
       } catch (error) {
            console.error('error')
       }
    }else{
        return `Wind and Temperature levels are not sufficient to calculate the Wind Chill`
    }

}

async function getWeather (url) {
    try {
        const reponse = await fetch(url)
        const data = await reponse.json();
        console.log(data)

        const temp = data.main.temp;
        const windSpeed = data.wind.speed;
        const fahrenheit = celToFah(temp);
        
        const windChill = calcWindChill(fahrenheit, windSpeed);

        let content = ''

        if (temp <= 10) {
            content = '🥶';
        }
        else if (temp > 10 && temp < 20) {
            content = '🌨'
        }
        else if (temp > 20 && temp < 30) {
            content = '🌤'
        }
        else if (temp > 30) {
            content = '🥵'
        }

        emoji.textContent = content
        windChillDoc.textContent = windChill;
        temperature.textContent = `Temperature: ${temp}°C`
    }
    catch(error) {
        console.log(error)
    }
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            getWeather(url);
        }
    )
}
