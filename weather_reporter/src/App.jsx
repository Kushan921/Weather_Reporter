// src/App.jsx
import { useState, useEffect } from 'react';
import Weather from './components/Weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("Colombo");
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (location) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Weather fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-indigo-200 to-sky-300 flex flex-col items-center justify-center px-4 py-12">
      <form onSubmit={handleSearch} className="mb-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search for a city (e.g. London)"
          className="w-full px-6 py-4 text-lg rounded-2xl shadow-xl bg-white/90 text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      {loading ? (
        <p className="text-lg text-indigo-800 animate-pulse font-medium">Fetching weather data...</p>
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  );
}

export default App;
