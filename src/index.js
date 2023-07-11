import "normalize.css";
import "./style.css";
import createEvents from "./modules/events";
import createForecastElements, {
  displayDefaultWeather,
  forecastedDays,
} from "./modules/dom";

createForecastElements(forecastedDays);
displayDefaultWeather();
createEvents();
