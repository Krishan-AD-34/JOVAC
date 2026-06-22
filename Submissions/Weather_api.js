const apiKey = "c8e5d25715312096700004f297cb415c";
const city = "Delhi";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("City:", data.name);
    console.log("Temperature:", data.main.temp + " °C");
    console.log("Humidity:", data.main.humidity + "%");
    console.log("Weather:", data.weather[0].description);
  })
  .catch(error => console.error(error));