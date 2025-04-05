const APILINK= "https://api.openweathermap.org/data/2.5/weather?lat=19.42847&lon=-99.12766&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";

const APIKEY = '3e5fc40d3932e762ff13a8c9ee95bbb8';

const lat = 19.42847;
const lon = -99.12766;
const fetchWeatherData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) { // Check for successful response (code 200)
        const weatherList = document.getElementById('weather-data');

        function calculateWindChill(temperature, windSpeed) {
            return Math.round(13.12 + 0.6215 * temperature - 11.37 * windSpeed**0.16 + 0.3965 * temperature * windSpeed**0.16);
        }

        function createWeatherItem(label, value) {
          const weatherItem = document.createElement('li');
          weatherItem.classList.add('weather-item');
          weatherItem.innerHTML = `<span class="weather-label">${label}:</span> ${value}`;
          weatherList.appendChild(weatherItem);
        }

        // Loop through weather data and create list items
        createWeatherItem('Location', data.name);  // City name
        createWeatherItem('Description', data.weather[0].description);

        for (const key in data.main) {
          const label = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
          createWeatherItem(label, data.main[key]);
        }

        createWeatherItem('Wind Speed', data.wind.speed);
          if (data.main.temp <=10 && data.wind.speed > 4.8){
        createWeatherItem('WindChill', calculateWindChill(data.main.temp, data.wind.speed))}
        // Add other weather data items as needed
        // ... (e.g., visibility, wind speed)
      } else {
        console.error('Error fetching weather data:', data.message);
      }
    };

    fetchWeatherData();
