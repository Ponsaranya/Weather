
document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const forecastGrid = document.getElementById("forecastGrid");

    searchButton.addEventListener("click", function () {
        const location = locationInput.value.trim();
        if (location) {
            fetchWeather(location);
        }
    });

    function fetchWeather(city) {
        const apiKey = "3ca74e0e331e003d7065cb7e1474ae94";
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => displayForecast(data))
            .catch((error) => console.error("Error fetching data:", error));
    }

    function displayForecast(data) {
        forecastGrid.innerHTML = "";

        const days = ["Today", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];

        for (let i = 0; i < 7; i++) {
            const forecast = data.list[i * 8];
            const date = new Date(forecast.dt * 1000);

            const forecastCard = document.createElement("div");
            forecastCard.classList.add("forecast-card");
            forecastCard.innerHTML = `
                <h2>${days[i]}</h2>
                <p>${date.toDateString()}</p>
                <p>Temperature: ${forecast.main.temp}°C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
                <p>Description: ${forecast.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Weather Icon">
            `;

            forecastGrid.appendChild(forecastCard);
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const useMyLocationButton = document.getElementById("useMyLocation");
    const forecastGrid = document.getElementById("forecastGrid");
    useMyLocationButton.addEventListener("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Send latitude and longitude to the PHP script
                fetchWeatherWithCoordinates(latitude, longitude);
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    });
    
    // Function to fetch weather using coordinates
    function fetchWeatherWithCoordinates(latitude, longitude) {
        const apiKey = "3ca74e0e331e003d7065cb7e1474ae94";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        
        // Send a request to your PHP script with the latitude and longitude
        fetch(`weather.php?lat=${latitude}&lon=${longitude}`)
            .then((response) => response.json())
            .then((data) => displayForecast(data))
            .catch((error) => console.error("Error fetching data:", error));
    }
    
});
