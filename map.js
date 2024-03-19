const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const apiKey = '3ca74e0e331e003d7065cb7e1474ae94'; // Replace with your OpenWeatherMap API key

function fetchWeatherData(city, callback) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function fetchWeatherForecast(city, callback) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => {
            console.error('Error fetching weather forecast:', error);
        });
}

function addWeatherMarker(city) {
    fetchWeatherData(city, data => {
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius
        const weatherDescription = data.weather[0].description;

        const popupContent = `Temperature: ${temperature}°C<br>Weather: ${weatherDescription}`;
        L.marker([data.coord.lat, data.coord.lon])
            .addTo(map)
            .bindPopup(popupContent)
            .openPopup();

        fetchWeatherForecast(city, forecastData => {
            // Process and display the weather forecast data here
            console.log(forecastData);
        });
    });
}

// Add markers for specific cities
addWeatherMarker('New York');
addWeatherMarker('London');
addWeatherMarker('Chennai');
addWeatherMarker('Tamil Nadu');
addWeatherMarker('India');
addWeatherMarker('China');
addWeatherMarker('United States');
addWeatherMarker('Indonesia');
addWeatherMarker('Pakistan');
addWeatherMarker('Nigeria');
addWeatherMarker('Brazil');
addWeatherMarker('Bangladesh');
addWeatherMarker('Russia');
addWeatherMarker('Mexico');
addWeatherMarker('Ethiopia');
addWeatherMarker('Japan');
addWeatherMarker('Philippines');
addWeatherMarker('Egypt');
addWeatherMarker('DR Congo');
addWeatherMarker('Vietnam');
addWeatherMarker('Iran');
addWeatherMarker('Turkey');
addWeatherMarker('Germany');
addWeatherMarker('Thailand');
addWeatherMarker('United Kingdom');
addWeatherMarker('Tanzania');
addWeatherMarker('France');
addWeatherMarker('South Africa');
addWeatherMarker('Italy');
addWeatherMarker('Kenya');
addWeatherMarker('Myanmar');
addWeatherMarker('Colombia');
addWeatherMarker('South Korea');
addWeatherMarker('Uganda');
addWeatherMarker('Sudan');
addWeatherMarker('Spain');
addWeatherMarker('Argentina');
addWeatherMarker('Algeria');
addWeatherMarker('Iraq');
addWeatherMarker('Afghanistan');
addWeatherMarker('Poland');
addWeatherMarker('Canada');
addWeatherMarker('Morocco');
addWeatherMarker('Saudi Arabia');
addWeatherMarker('Ukraine');
addWeatherMarker('Angola');
addWeatherMarker('Uzbekistan');
addWeatherMarker('Yemen');
addWeatherMarker('Peru');
addWeatherMarker('Malaysia');
addWeatherMarker('Ghana');
addWeatherMarker('Mozambique');
addWeatherMarker('Nepal');
addWeatherMarker('Madagascar');
addWeatherMarker('Cameroon');
addWeatherMarker('Niger');
addWeatherMarker('Australia');
addWeatherMarker('North Korea');
addWeatherMarker('Mali');
addWeatherMarker('Burkina Faso');
addWeatherMarker('Syria');
addWeatherMarker('Sri Lanka');
addWeatherMarker('Malawi');
addWeatherMarker('Zambia');
addWeatherMarker('Romania');
addWeatherMarker('Chile');
addWeatherMarker('Kazakhstan');
addWeatherMarker('Chad');
addWeatherMarker('Ecuador');
addWeatherMarker('Somalia');
addWeatherMarker('Guatemala');
addWeatherMarker('Senegal');
addWeatherMarker('Netherlands');
addWeatherMarker('Cambodia');
addWeatherMarker('Zimbabwe');
addWeatherMarker('Guinea');
addWeatherMarker('Rwanda');
addWeatherMarker('Benin');
addWeatherMarker('Burundi');
addWeatherMarker('Tunisia');
addWeatherMarker('Bolivia');
addWeatherMarker('Haiti');
addWeatherMarker('Belgium');
addWeatherMarker('Jordan');
addWeatherMarker('Dominican Republic');
addWeatherMarker('Cuba');
addWeatherMarker('South Sudan');
addWeatherMarker('Sweden');
addWeatherMarker('Honduras');
addWeatherMarker('Czech Republic (Czechia)');
addWeatherMarker('Azerbaijan');
addWeatherMarker('Greece');
addWeatherMarker('Papua New Guinea');
addWeatherMarker('Portugal');
addWeatherMarker('Hungary');
addWeatherMarker('Tajikistan');
addWeatherMarker('United Arab Emirates');
addWeatherMarker('Belarus');
addWeatherMarker('Israel');
addWeatherMarker('Togo');
addWeatherMarker('Austria');
addWeatherMarker('Switzerland');
addWeatherMarker('Sierra Leone');
addWeatherMarker('Laos');
addWeatherMarker('Serbia');
addWeatherMarker('Nicaragua');
addWeatherMarker('Libya');
addWeatherMarker('Paraguay');
addWeatherMarker('Kyrgyzstan');
addWeatherMarker('Bulgaria');
addWeatherMarker('Turkmenistan');
addWeatherMarker('El Salvador');
addWeatherMarker('Congo');
addWeatherMarker('Singapore');
addWeatherMarker('Denmark');
// Districts in Tamil Nadu
const tamilNaduDistricts = [
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirapalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Chengalpattu",
    "Mayiladuthurai",
];

// Districts in Kerala
const keralaDistricts = [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
];

// Function to add weather markers for districts
function addWeatherMarkers(districts) {
    districts.forEach(district => {
        addWeatherMarker(district);
    });
}

addWeatherMarkers(tamilNaduDistricts);
addWeatherMarkers(keralaDistricts);
