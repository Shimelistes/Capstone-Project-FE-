# Weather Dashboard

A beautiful, responsive weather dashboard application built with React and Tailwind CSS that provides real-time weather information for cities worldwide.

![Weather Dashboard](https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## Features

- 🌤️ **Real-time Weather Data** - Get current weather conditions for any city
- 🔍 **Smart Search** - Search for cities with an intuitive search interface
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Dynamic Backgrounds** - Background colors change based on weather conditions
- 📊 **Comprehensive Weather Info** - Temperature, humidity, wind speed, pressure, visibility
- 🕒 **Recent Searches** - Quick access to previously searched cities
- ⏰ **Sunrise/Sunset Times** - View daily sun times for any location
- 🌡️ **Temperature Range** - Daily high and low temperatures
- 💨 **Weather Icons** - Visual weather condition indicators
- ⚡ **Fast Loading** - Optimized performance with loading states

## Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: OpenWeatherMap API
- **Deployment**: Ready for Netlify, Vercel, or similar platforms

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free registration required)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

4. **Configure the API**
   - Open `src/utils/weatherApi.js`
   - Replace `'demo'` with your actual API key
   - Uncomment the production API function at the bottom of the file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start searching for cities!

## Usage

### Searching for Weather

1. **Enter a city name** in the search bar (e.g., "Addis Ababa","Nairobi","London", "New York", "Tokyo")
2. **Press Enter** or click the search button
3. **View the results** - The dashboard will display comprehensive weather information
4. **Access recent searches** - Previously searched cities appear as quick-access buttons

### Weather Information Displayed

- **Current Temperature** - Real-time temperature with "feels like" indicator
- **Weather Condition** - Description with appropriate weather icon
- **Humidity Level** - Current humidity percentage
- **Wind Speed** - Wind speed in meters per second
- **Atmospheric Pressure** - Current pressure in hPa
- **Visibility** - Visibility distance in kilometers
- **Temperature Range** - Daily high and low temperatures
- **Sun Times** - Sunrise and sunset times for the location

## Project Structure

```
weather-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx      # Main weather display component
│   │   ├── SearchBar.jsx        # City search input component
│   │   ├── RecentSearches.jsx   # Recent searches display
│   │   ├── LoadingSpinner.jsx   # Loading state component
│   │   └── ErrorMessage.jsx     # Error handling component
│   ├── utils/
│   │   └── weatherApi.js        # API integration and data fetching
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles and Tailwind imports
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite build configuration
└── README.md                    # Project documentation
```

## API Configuration

### Development Mode
The application includes mock data for development and testing purposes. This allows you to explore the interface without an API key.

### Production Mode
To use real weather data:

1. **Get your API key** from [OpenWeatherMap](https://openweathermap.org/api)
2. **Update the configuration** in `src/utils/weatherApi.js`:
   ```javascript
   const API_KEY = 'your-actual-api-key-here';
   ```
3. **Uncomment the production function** at the bottom of the file
4. **Comment out or remove** the mock data function

## Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Other Platforms
The application can be deployed to any static hosting service that supports single-page applications.

## Environment Variables

For production deployments, you may want to use environment variables for your API key:

1. **Create a `.env` file** (not included in version control)
   ```
   VITE_WEATHER_API_KEY=your-api-key-here
   ```

2. **Update the API configuration** to use the environment variable:
   ```javascript
   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo';
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading** - Components load efficiently
- **Optimized Images** - Weather icons are optimized for fast loading
- **Minimal Bundle Size** - Only necessary dependencies included
- **Fast Refresh** - Hot module replacement during development
- **Responsive Images** - Adaptive image loading for different screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

