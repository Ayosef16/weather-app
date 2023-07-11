import { displayCurrentWeather } from "./dom";

// Get Variables

const searchCity = document.querySelector(".search-city");
const searchIcon = document.querySelector(".search-icon");
const errorContainer = document.querySelector("#error-container");

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
    errorContainer.textContent = "Enter a valid city, cannot be blank.";
    return;
  }
  const city = searchCity.value.toLowerCase();
  displayCurrentWeather(city);
  searchCity.value = "";
}
