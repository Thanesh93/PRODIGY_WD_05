const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location');
const weatherDataDiv = document.getElementById('weather-data');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  fetchWeatherData(location);
});

function fetchWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      weatherDataDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
      `;
    })
    .catch(error => {
      weatherDataDiv.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    });
}
