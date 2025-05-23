const apiKey = "9a48024b30abec2df019e1522c5fa6e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather (city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".err").style.display = "block";
    // if dont make weather disp none then the error appear
    // while viewing the last city entered and i prefer this
    // document.querySelector(".weather").style.display = "none";

  }
  else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./weather-app-img/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./weather-app-img/images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./weather-app-img/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./weather-app-img/images/mist.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "./weather-app-img/images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";
  }

  
}

searchBtn.addEventListener("click", () => {
  if (searchBox.value) checkWeather(searchBox.value);
  else document.querySelector(".weather").style.display = "none";
})

