// src/App.jsx
import { useState, useEffect } from 'react';
import Weather from './components/Weather';
import './index.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Colombo`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching weather:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4">
      {loading ? (
        <p className="text-white text-xl font-semibold animate-pulse">Fetching Weather...</p>
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  );
}

export default App;
