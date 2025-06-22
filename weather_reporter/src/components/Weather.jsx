// src/components/Weather.jsx
import React from 'react';

const Weather = ({ weather }) => {
  if (!weather) return null;

  const {
    temp_c,
    humidity,
    wind_kph,
    uv,
    condition
  } = weather.current;

  const { name, country } = weather.location;

  return (
    <div className="bg-white/90 shadow-2xl rounded-3xl px-10 py-12 max-w-xl w-full mx-auto text-center backdrop-blur-md">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">{name}, {country}</h2>
      <div className="flex flex-col items-center gap-3 mb-8">
        <img src={condition.icon} alt="weather icon" className="w-24 h-24" />
        <p className="text-2xl text-gray-700 font-medium">{condition.text}</p>
      </div>
      <div className="grid grid-cols-2 gap-6 text-left text-gray-600 text-lg font-medium">
        <p><span className="text-blue-700">🌡️ Temperature:</span> {temp_c}°C</p>
        <p><span className="text-blue-700">💧 Humidity:</span> {humidity}%</p>
        <p><span className="text-blue-700">🌬️ Wind Speed:</span> {wind_kph} km/h</p>
        <p><span className="text-blue-700">🔆 UV Index:</span> {uv}</p>
      </div>
    </div>
  );
};

export default Weather;
