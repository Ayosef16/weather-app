import { parse, format, parseISO } from "date-fns";
import { getSearchedWeather, getDefaultWeather } from "./logic";

// Define variables
export const forecastedDays = 2;
const forecastTemplate = document.querySelector("#forecast-template");
const forecastContainer = document.querySelector("#forecast-container");
const currentCondition = document.querySelector(".current-condition");
const currentCity = document.querySelector(".current-city");
const currentDate = document.querySelector(".current-date");
const currentTemperature = document.querySelector(".current-temperature");
const currentIcon = document.querySelector(".current-icon");
const currentFeelslike = document.querySelector(".current-feelslike");
const currentWindSpeed = document.querySelector(".current-wind-speed");
const currentVisibility = document.querySelector(".current-visibility");
const currentRadiation = document.querySelector(".current-radiation");
const currentPressure = document.querySelector(".current-pressure");
const currentHumidity = document.querySelector(".current-humidity");

// async function displayCurrentWeather() {
//   const weather = await getSearchedWeather();
// }

export async function displayDefaultWeather() {
  const weather = await getDefaultWeather();
  console.log(weather);

  // Display left side panel
  currentCondition.textContent = await weather.current.condition.text;
  currentCity.textContent = `${weather.location.name}, ${weather.location.country}`;
  currentDate.textContent = format(
    parse(weather.location.localtime, "yyyy-MM-dd HH:mm", new Date()),
    "EEEE, do MMMM yyyy"
  );
  currentTemperature.textContent = `${weather.current.temp_c} °C`;
  currentIcon.src = weather.current.condition.icon;

  // Display right side panel
  currentFeelslike.textContent = `${weather.current.feelslike_c} °C`;
  currentWindSpeed.textContent = `${weather.current.wind_kph} KM/H`;
  currentVisibility.textContent = `${weather.current.vis_km} KM`;
  currentRadiation.textContent = `${weather.current.uv} UV`;
  currentPressure.textContent = `${weather.current.pressure_mb} MB`;
  currentHumidity.textContent = `${weather.current.humidity}%`;

  // Display forecast

  // Create variables
  const forecastDate = document.querySelectorAll(".forecast-date");
  const forecastMaxTemperature = document.querySelectorAll(
    ".forecast-max-temperature"
  );
  const forecastMinTemperature = document.querySelectorAll(
    ".forecast-min-temperature"
  );
  const forecastIcon = document.querySelectorAll(".forecast-icon");

  // Loop through forecasted days and assign values
  for (let i = 0; i < forecastedDays; i++) {
    forecastDate[i].textContent = format(
      parseISO(weather.forecast.forecastday[i + 1].date),
      "EEE"
    );
    forecastMaxTemperature[i].textContent = `${
      weather.forecast.forecastday[i + 1].day.maxtemp_c
    } °C`;
    forecastMinTemperature[i].textContent = `${
      weather.forecast.forecastday[i + 1].day.mintemp_c
    } °C`;
    forecastIcon[i].src =
      weather.forecast.forecastday[i + 1].day.condition.icon;
  }
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
