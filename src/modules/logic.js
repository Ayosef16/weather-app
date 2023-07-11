export async function getSearchedWeather(city) {
  const weatherHeader = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=62db037f513a4bdcba5133348230607&q=${city}&days=3`,
    {
      mode: "cors",
    }
  );
  const weather = await weatherHeader.json();
  return weather;
}

export async function getDefaultWeather() {
  const weatherHeader = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=62db037f513a4bdcba5133348230607&q=santiago&days=3",
    {
      mode: "cors",
    }
  );
  const weather = await weatherHeader.json();
  return weather;
}
