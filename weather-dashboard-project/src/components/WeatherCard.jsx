import React from 'react';
import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from 'lucide-react';

const WeatherCard = ({ weather, units }) => {
  const {
    name,
    sys,
    main,
    weather: weatherConditions,
    wind,
    visibility,
  } = weather;

  const condition = weatherConditions[0];
  const temperature = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  
  const getTempUnit = () => units === 'imperial' ? '°F' : '°C';
  const getWindUnit = () => units === 'imperial' ? 'mph' : 'm/s';

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
      {/* Location Header */}
      <div className="flex items-center justify-center mb-8">
        <MapPin className="w-6 h-6 text-white mr-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {name}, {sys.country}
        </h2>
      </div>

      {/* Main Weather Info */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <img
            src={`https://openweathermap.org/img/wn/${condition.icon}@4x.png`}
            alt={condition.description}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="text-6xl md:text-7xl font-bold text-white mb-2">
          {temperature}{getTempUnit()}
        </div>
        <div className="text-xl text-white/80 capitalize mb-2">
          {condition.description}
        </div>
        <div className="text-white/70">
          Feels like {feelsLike}{getTempUnit()}
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <Droplets className="w-8 h-8 text-blue-300 mx-auto mb-2" />
          <div className="text-white text-sm opacity-80">Humidity</div>
          <div className="text-white text-xl font-bold">{main.humidity}%</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <Wind className="w-8 h-8 text-green-300 mx-auto mb-2" />
          <div className="text-white text-sm opacity-80">Wind Speed</div>
          <div className="text-white text-xl font-bold">{wind.speed} {getWindUnit()}</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <Gauge className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
          <div className="text-white text-sm opacity-80">Pressure</div>
          <div className="text-white text-xl font-bold">{main.pressure} hPa</div>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <Eye className="w-8 h-8 text-purple-300 mx-auto mb-2" />
          <div className="text-white text-sm opacity-80">Visibility</div>
          <div className="text-white text-xl font-bold">{(visibility / 1000).toFixed(1)} km</div>
        </div>
      </div>

      {/* Temperature Range & Sun Times */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Thermometer className="w-6 h-6 text-red-300 mr-2" />
              <span className="text-white text-sm">Temperature Range</span>
            </div>
          </div>
          <div className="mt-2 text-white">
            <span className="text-lg font-semibold">{Math.round(main.temp_max)}{getTempUnit()}</span>
            <span className="text-white/60 mx-2">/</span>
            <span className="text-lg">{Math.round(main.temp_min)}{getTempUnit()}</span>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Sunrise className="w-5 h-5 text-orange-300 mr-2" />
              <span className="text-white text-sm">{formatTime(sys.sunrise)}</span>
            </div>
            <div className="flex items-center">
              <Sunset className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-white text-sm">{formatTime(sys.sunset)}</span>
            </div>
          </div>
          <div className="text-white/70 text-xs text-center">
            Sunrise & Sunset
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;