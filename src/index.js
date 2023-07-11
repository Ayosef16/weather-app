import "normalize.css";
import "./style.css";
import createForecastElements, {
  displayDefaultWeather,
  forecastedDays,
} from "./modules/dom";

createForecastElements(forecastedDays);
displayDefaultWeather();
