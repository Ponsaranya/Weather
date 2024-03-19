<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="weather.css">
    <script src="./weather.js" defer></script>
    <title>5-Day Weather Forecast</title>
</head>
<body>
<div id="containerr">
    <div class="container">
        <h1 class="heading">5-Day Weather Forecast</h1>
        <div class="location">
            <input type="text" id="locationInput" placeholder="Enter location">
            <button id="searchButton">Search</button>
            <button id="mapButton">View Weather Map</button>
        </div>
        
        <ul id="text-list"></ul>
        
        <div class="forecast-grid" id="forecastGrid">
            <!-- Weather forecast for the next 6 days will be displayed here -->
        </div>
    </div>
    <div style="text-align: center;">
        <button onclick="getLocationAndWeather()" class="mylocation">Get My Location and Weather</button>
    </div>
   
<div class="myloc">
<script>
    document.getElementById('mapButton').addEventListener('click', function() {
        window.location.href = 'map.html';
    });
        function getLocationAndWeather() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    window.location.href = `weather.php?lat=${latitude}&lon=${longitude}`;
                }, function(error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Geolocation permission denied. Please allow access to your location.");
                    } else {
                        alert("Error getting location: " + error.message);
                    }
                });
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        }

</script>
<br>

<?php
if (isset($_GET['lat']) && isset($_GET['lon'])) {
    $latitude = $_GET['lat'];
    $longitude = $_GET['lon'];
    $apiKey = '3ca74e0e331e003d7065cb7e1474ae94';
    $weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=$latitude&lon=$longitude&appid=$apiKey&units=metric";
    $weatherData = json_decode(file_get_contents($weatherApiUrl));
    if ($weatherData) {
        $temperature = $weatherData->main->temp;
        $weatherDescription = $weatherData->weather[0]->description;
        echo "Latitude: $latitude<br>";
        echo "Longitude: $longitude<br><br>";
        echo "Temperature: $temperature °C<br>";
        echo "Weather: $weatherDescription";
    } else {
        echo "Unable to fetch weather data.";
    }
} else {
    echo "Latitude and longitude not provided.";
}
?>
</div>
</div>
</body>
</html>
