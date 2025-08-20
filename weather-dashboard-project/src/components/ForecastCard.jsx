import React from 'react';
import { Calendar, Thermometer, Droplets, Wind } from 'lucide-react';

const ForecastCard = ({ forecast, units }) => {
  if (!forecast || !forecast.list) return null;

  // Group forecast by day and get daily data
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    
    if (!acc[date]) {
      acc[date] = {
        date: date,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        humidity: item.main.humidity,
        wind_speed: item.wind.speed,
        weather: item.weather[0],
        dt: item.dt
      };
    } else {
      // Update min/max temperatures
      acc[date].temp_min = Math.min(acc[date].temp_min, item.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, item.main.temp_max);
    }
    
    return acc;
  }, {});

  const forecastDays = Object.values(dailyForecast).slice(0, 5); // Get 5 days

  const getTempUnit = () => units === 'imperial' ? '°F' : '°C';
  const getWindUnit = () => units === 'imperial' ? 'mph' : 'm/s';

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 text-white mr-2" />
        <h3 className="text-xl font-bold text-white">5-Day Forecast</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <div key={index} className="bg-white/10 rounded-2xl p-4 text-center">
            <div className="text-white font-semibold mb-2">{day.date}</div>
            
            <div className="flex justify-center mb-3">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                alt={day.weather.description}
                className="w-12 h-12"
              />
            </div>
            
            <div className="text-white text-sm mb-2">
              <span className="font-bold">{Math.round(day.temp_max)}{getTempUnit()}</span>
              <span className="text-white/60 mx-1">/</span>
              <span>{Math.round(day.temp_min)}{getTempUnit()}</span>
            </div>
            
            <div className="text-white/70 text-xs capitalize">
              {day.weather.description}
            </div>
            
            <div className="flex justify-between items-center mt-3 text-white/60 text-xs">
              <div className="flex items-center">
                <Droplets className="w-3 h-3 mr-1" />
                <span>{day.humidity}%</span>
              </div>
              <div className="flex items-center">
                <Wind className="w-3 h-3 mr-1" />
                <span>{day.wind_speed.toFixed(1)} {getWindUnit()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;