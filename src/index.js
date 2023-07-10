import "normalize.css";
import "./style.css";

async function getCurrentWeather() {
  const weatherHeader = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=62db037f513a4bdcba5133348230607&q=miami&days=3",
    {
      mode: "cors",
    }
  );
  console.log(weatherHeader);
  const weather = await weatherHeader.json();
  console.log(weather);
  return weather;
}

async function displayCurrentWeather() {
  const test = document.querySelector("#test");
  const weather = await getCurrentWeather();
  test.textContent = weather.current.condition.text;
}

displayCurrentWeather();
