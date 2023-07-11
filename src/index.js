import "normalize.css";
import "./style.css";
import createForecastElements, { displayDefaultWeather } from "./modules/dom";

createForecastElements(2);
displayDefaultWeather();
