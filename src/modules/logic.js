export async function getCurrentWeather() {
  const weatherHeader = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=62db037f513a4bdcba5133348230607&q=santiago",
    {
      mode: "cors",
    }
  );
  console.log(weatherHeader);
  const weather = await weatherHeader.json();
  console.log(weather);
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
