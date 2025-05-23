const apiKey = "9a48024b30abec2df019e1522c5fa6e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=cairo";

async function checkWeather () {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

