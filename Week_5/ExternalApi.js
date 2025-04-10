//Using external weather api to get weather data 

const apiEndpoint = 'http://api.openweathermap.org/geo/1.0/direct';
// const apiKey = 'For Mentors DM me at slack to get the Key';
const apiKey = '081c62c9b84e8bd93fe8fcae28bdbe68';

const location = 'Gujranwala';

const url = `${apiEndpoint}?q=${location}&limit=5&appid=${apiKey}`;
// ${apiEndpoint}?q=London&limit=5&appid={apiKey};
let lat, lon, cityWeather, cityTemps;
await fetch(url)
  .then((response) => {
    // console.log(response);
    return response = response.json();
  })
  .then(data => {
    // console.log(data[1].lat);
    lat = data[1].lat
    // lat = data[2].lat;
    lon = data[1].lon
    // console.log("latitude: ",lat);
    // console.log("Longitude: ",lon);
  })
  .catch((error) => {
    console.log("Error Occured: ", error);
  })

// console.log("latitude: ", lat);
// console.log("Longitude: ", lon);


let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
fetch(weatherURL)
  .then(response => response.json())
  .then((data) => {
    cityWeather = data.weather[0].description;
    cityTemps = data.main.temp;

    // console.log(cityTemps);
  })
  .catch((error)=>{
    console.log("Error occurs :", error);
  })
.finally(()=>{
  console.log(`${location} has temperature of ${cityTemps}`);
})