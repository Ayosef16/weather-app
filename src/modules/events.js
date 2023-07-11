import { displayCurrentWeather } from "./dom";

// Get Variables

const searchCity = document.querySelector(".search-city");
const searchIcon = document.querySelector(".search-icon");

// Create a function for event listener

export default function createEvents() {
  searchIcon.addEventListener("click", checkInputCity);
  searchCity.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      checkInputCity();
    }
  });
}

function checkInputCity() {
  if (searchCity.value.trim() === "") {
    searchCity.value = "";
    return;
  }
  const city = searchCity.value.toLowerCase();
  displayCurrentWeather(city);
  searchCity.value = "";
}
