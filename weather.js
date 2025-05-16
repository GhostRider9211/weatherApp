const apiKey = "bc13330f5c3a9fbdf93f32c11a0d9dcd";
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon i");

async function checkWeather(city) {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;
        setWeatherIcon(weatherCondition);
        
    } catch (error) {
        alert(error.message);
    }
}

function setWeatherIcon(condition) {
    const icon = weatherIcon;
    switch(condition.toLowerCase()) {
        case 'clear':
            icon.className = 'fas fa-sun';
            break;
        case 'clouds':
            icon.className = 'fas fa-cloud';
            break;
        case 'rain':
            icon.className = 'fas fa-cloud-rain';
            break;
        case 'drizzle':
            icon.className = 'fas fa-cloud-rain';
            break;
        case 'thunderstorm':
            icon.className = 'fas fa-bolt';
            break;
        case 'snow':
            icon.className = 'fas fa-snowflake';
            break;
        case 'mist':
        case 'smoke':
        case 'haze':
        case 'fog':
            icon.className = 'fas fa-smog';
            break;
        default:
            icon.className = 'fas fa-cloud';
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    } else {
        alert("Please enter a city name");
    }
});


searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    }
});