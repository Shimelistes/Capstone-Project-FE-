const API_KEY = 'c232a87c970615d928dbecc3603acb90';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city, units = 'metric') => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      throw new Error('Failed to fetch weather data. Please try again.');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};