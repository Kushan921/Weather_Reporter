// src/components/Weather.jsx
import React from 'react';

const Weather = ({ weather }) => {
  if (!weather) return null;

  const {
    temp_c,
    humidity,
    wind_kph,
    uv,
    pressure_mb,
    feelslike_c,
    vis_km,
    condition
  } = weather.current;

  const { name, country, localtime } = weather.location;

  return (
    <div className="bg-white/90 backdrop-blur-2xl shadow-2xl border border-blue-100 rounded-3xl px-10 py-10 w-full max-w-2xl text-center transition-all duration-500">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-1">{name}, {country}</h2>
      <p className="text-gray-500 text-sm mb-5">Local Time: {localtime}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
        <img src={condition.icon} alt="weather icon" className="w-24 h-24" />
        <p className="text-xl sm:text-2xl font-medium text-gray-700">{condition.text}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-600 text-md sm:text-lg font-medium">
        <p>🌡️ <span className="font-semibold">Temp:</span> {temp_c}°C</p>
        <p>🎯 <span className="font-semibold">Feels Like:</span> {feelslike_c}°C</p>
        <p>💧 <span className="font-semibold">Humidity:</span> {humidity}%</p>
        <p>🌬️ <span className="font-semibold">Wind:</span> {wind_kph} km/h</p>
        <p>🔆 <span className="font-semibold">UV Index:</span> {uv}</p>
        <p>📏 <span className="font-semibold">Visibility:</span> {vis_km} km</p>
        <p>🧭 <span className="font-semibold">Pressure:</span> {pressure_mb} mb</p>
      </div>
    </div>
  );
};

export default Weather;
