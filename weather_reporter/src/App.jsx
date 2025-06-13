import { useState , useEffect } from 'react'
import './App.css'
import Weather from '../src/components/Weather'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      {loading ? (
        <p className="text-xl">Loading weather...</p>
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  );
}

export default App
