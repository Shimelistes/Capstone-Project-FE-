// Utils/WeatherApi.js
export const fetchWeatherData = async (cityOrCoords, units = 'metric') => {
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  let weatherUrl = '';
  let forecastUrl = '';

  if (typeof cityOrCoords === 'string' && cityOrCoords.includes(',')) {
    // Use coordinates
    const [lat, lon] = cityOrCoords.split(',');
    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`;
    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`;
  } else {
    // Use city name
    const city = encodeURIComponent(cityOrCoords.trim());
    weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`;
    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=${units}`;
  }

  try {
    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) {
      if (weatherRes.status === 404) throw new Error('City not found. Check spelling.');
      throw new Error('Failed to fetch current weather.');
    }
    const weatherData = await weatherRes.json();

    const forecastRes = await fetch(forecastUrl);
    if (!forecastRes.ok) throw new Error('Failed to fetch forecast.');
    const forecastData = await forecastRes.json();

    return { ...weatherData, forecast: forecastData };
  } catch (err) {
    if (err instanceof Error) throw err;
    throw new Error('An unexpected error occurred. Please try again.');
  }
};





