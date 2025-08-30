welcome to Capstone-project which is weather-dashboard-project
# Weather Dashboard

A beautiful, responsive weather dashboard application built with React and Tailwind CSS that provides real-time weather information for cities worldwide.

![Weather Dashboard](https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)


Features

🌤️ Real-time Weather Data – Get current weather for any city

🔍 Smart Search – Search for cities or use geolocation

📱 Responsive Design – Works on desktop, tablet, and mobile

🎨 Dynamic Backgrounds – Background gradients change based on weather conditions

📊 Comprehensive Weather Info – Temperature, feels-like, humidity, wind speed, pressure, visibility

🕒 Recent Searches – Quick access to last 5 searches

⏰ Sunrise/Sunset Times – Daily sun times for any location

🌡️ Temperature Range – Daily high/low temperatures

⚡ Weather Alerts – Displayed if available

🌙 Dark/Light Theme Toggle – Switch themes dynamically

💨 Unit Toggle – Switch between Celsius (°C) and Fahrenheit (°F)

⏳ Loading States – Smooth animations while fetching data

Tech Stack

Frontend: React 18, JavaScript (ES6+)

Styling: Tailwind CSS

Icons: Lucide React

Build Tool: Vite
API: OpenWeatherMap

Loader Animation: React Loader Spinner

weather-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RecentSearches.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── UnitToggle.jsx
│   │   ├── LocationButton.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── WeatherAlerts.jsx
│   ├── Utils/
│   │   └── WeatherApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md


Getting Started
Prerequisites

Node.js v16+

npm or yarn

OpenWeatherMap API key

Installation

Clone the repository

git clone <repository-url>
cd weather-dashboard


Install dependencies

npm install


Create .env file in root and add your API key:

VITE_OPEN_WEATHER_API_KEY=your-api-key-here


Start development server

npm run dev


Open your browser at http://localhost:5173

Usage

Search for a city using the search bar or click Use My Location button.

Recent Searches appear below the search bar for quick access.

Toggle units between Celsius and Fahrenheit with the UnitToggle component.

Switch themes between dark and light with the ThemeToggle component.

View current weather, 5-day forecast, alerts, humidity, wind, pressure, visibility, and sunrise/sunset times.

API Integration

Uses OpenWeatherMap API for current weather and forecast data.

Handles errors gracefully (invalid city, API failures, geolocation denied).

Recent searches, theme, and units are stored in localStorage.

Deployment
Netlify

Connect repository

Build command: npm run build

Publish directory: dist

Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

Mobile browsers supported

Contributing

Fork repository

Create a feature branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m "Add feature")

Push branch (git push origin feature/my-feature)

Open a pull request

License

MIT License © 2025

Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---
