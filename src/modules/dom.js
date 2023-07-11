import { getCurrentWeather, getDefaultWeather } from "./logic";

// Define variables
const forecastTemplate = document.querySelector("#forecast-template");
const forecastContainer = document.querySelector("#forecast-container");

// async function displayCurrentWeather() {
//   const weather = await getCurrentWeather();
// }

// async function displayDefaultWeather() {
//   const weather = await getDefaultWeather();
// }

export default function createForecastElements(number) {
  for (let i = 0; i < number; i++) {
    const newForecast = document.importNode(forecastTemplate.content, true);
    // const date = newForecast.querySelector(".forecast-date");
    // const img = newForecast.querySelector(".forecast-icon");
    // const temperature = newForecast.querySelector(".forecast-temperature");
    forecastContainer.appendChild(newForecast);
  }
}
