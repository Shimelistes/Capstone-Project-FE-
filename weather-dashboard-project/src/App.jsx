import React, { useState, useEffect, useCallback } from 'react';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import ErrorMessage from './components/ErrorMessage';
import UnitToggle from './components/UnitToggle';
import LocationButton from './components/LocationButton';
import ThemeToggle from './components/ThemeToggle';
import WeatherAlerts from './components/WeatherAlerts';
import { fetchWeatherData } from './Utils/WeatherApi';
import { RotatingLines } from 'react-loader-spinner';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [units, setUnits] = useState('metric');
  const [theme, setTheme] = useState('dark');
  const [locationLoading, setLocationLoading] = useState(false);

  // Handle city search
  const handleSearch = useCallback(
    async (city) => {
      if (!city.trim()) return;
      setLoading(true);
      setError(null);

      try {
        const weatherData = await fetchWeatherData(city, units);
        setWeather(weatherData);

        // Update recent searches
        setRecentSearches(prev => {
          const updated = [city, ...prev.filter(s => s !== city)].slice(0, 5);
          localStorage.setItem('recentSearches', JSON.stringify(updated));
          return updated;
        });

      } catch (err) {
        setError(err?.message || 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    },
    [units]
  );

  // Load saved settings
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    const savedTheme = localStorage.getItem('theme');
    const savedUnits = localStorage.getItem('units');

    if (savedSearches) setRecentSearches(JSON.parse(savedSearches));
    if (savedTheme) setTheme(savedTheme);
    if (savedUnits) setUnits(savedUnits);
  }, []);

  // Fetch default city on mount
  useEffect(() => {
    handleSearch('Addis Ababa');
  }, [handleSearch]);

  // Handle location button click
  const handleLocationClick = async () => {
    setLocationLoading(true);
    setError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: true,
        });
      });

      const { latitude, longitude } = position.coords;
      const weatherData = await fetchWeatherData(`${latitude},${longitude}`, units);
      setWeather(weatherData);

      const cityName = weatherData.name;
      setRecentSearches(prev => {
        const updated = [cityName, ...prev.filter(s => s !== cityName)].slice(0, 5);
        localStorage.setItem('recentSearches', JSON.stringify(updated));
        return updated;
      });

    } catch (err) {
      const errorMessage =
        err?.code === 1
          ? 'Location access denied. Please enable location services.'
          : err?.code === 2
          ? 'Location unavailable. Please try again.'
          : err?.code === 3
          ? 'Location request timed out. Please try again.'
          : err?.message || 'Failed to get your location';
      setError(errorMessage);
    } finally {
      setLocationLoading(false);
    }
  };

  // Toggle units (°C / °F)
  const handleUnitToggle = (newUnits) => {
    setUnits(newUnits);
    localStorage.setItem('units', newUnits);
    if (weather) handleSearch(weather.name);
  };

  // Toggle theme (light / dark)
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Background gradient based on weather
  const getBackgroundGradient = () => {
    if (!weather) return 'from-blue-400 to-blue-600';

    const condition = weather.weather[0].main.toLowerCase();
    const gradients = {
      clear: 'from-yellow-400 to-orange-500',
      clouds: 'from-gray-400 to-gray-600',
      rain: 'from-gray-600 to-blue-700',
      snow: 'from-blue-200 to-blue-400',
      thunderstorm: 'from-gray-700 to-gray-900',
    };

    return gradients[condition] || 'from-blue-400 to-blue-600';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-1000 ${theme === 'light' ? 'light-theme' : ''}`}>
      <ThemeToggle theme={theme} onToggle={handleThemeToggle} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Weather Dashboard
            </h1>
            <p className="text-white/80 text-lg">Get real-time weather information for any city worldwide</p>
          </div>

          {/* Unit Toggle */}
          <UnitToggle units={units} onToggle={handleUnitToggle} />

          {/* Search Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
              <SearchBar onSearch={handleSearch} />
              <LocationButton onLocationClick={handleLocationClick} loading={locationLoading} />
            </div>
            {recentSearches.length > 0 && <RecentSearches searches={recentSearches} onSelect={handleSearch} />}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {loading && (
              <div className="flex items-center justify-center">
                <RotatingLines height="96" width="96" strokeColor="gray" strokeWidth="5" animationDuration="0.75" visible={true} />
              </div>
            )}

            {error && <ErrorMessage message={error} />}

            {weather && !loading && (
              <>
                <WeatherAlerts alerts={weather.alerts} />
                <WeatherCard weather={weather} units={units} />
                <ForecastCard forecast={weather.forecast} units={units} />
              </>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-white/60">
            <p className="text-sm">Weather data provided by OpenWeatherMap</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
