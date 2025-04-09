//Using external weather api to get weather data 

const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'For Mentors DM me at slack to get the Key';
const location = 'Gujranwala';

const url = `${apiEndpoint}?q=${location}&appid=${apiKey}`;

fetch(url)
 .then(response => response.json())
 .then(data => {
    console.log(`Current weather in ${location}: ${data.weather[0].description}`);
  })
 .catch(error => {
    console.error('Error:', error);
  });