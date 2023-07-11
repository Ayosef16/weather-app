import { parse, format } from "date-fns";
import { getSearchedWeather, getDefaultWeather } from "./logic";

// Define variables
const forecastTemplate = document.querySelector("#forecast-template");
const forecastContainer = document.querySelector("#forecast-container");
const currentCondition = document.querySelector(".current-condition");
const currentCity = document.querySelector(".current-city");
const currentDate = document.querySelector(".current-date");
const currentIcon = document.querySelector(".current-icon");
const currentTemperature = document.querySelector(".current-temperature");

// async function displayCurrentWeather() {
//   const weather = await getSearchedWeather();
// }

export async function displayDefaultWeather() {
  const weather = await getDefaultWeather();
  console.log(weather);
  currentCondition.textContent = await weather.current.condition.text;
  currentCity.textContent = `${weather.location.name}, ${weather.location.country}`;
  currentDate.textContent = format(
    parse(weather.location.localtime, "yyyy-MM-dd HH:mm", new Date()),
    "EEEE, do MMMM yyyy"
  );
  currentTemperature.textContent = `${weather.current.temp_c} °C`;
  currentIcon.src = weather.current.condition.icon;
}

export default function createForecastElements(number) {
  for (let i = 0; i < number; i++) {
    const newForecast = document.importNode(forecastTemplate.content, true);
    // const date = newForecast.querySelector(".forecast-date");
    // const img = newForecast.querySelector(".forecast-icon");
    // const temperature = newForecast.querySelector(".forecast-temperature");
    forecastContainer.appendChild(newForecast);
  }
}
