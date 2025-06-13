import React from 'react';

const Weather = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-md mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Weather in {weather.location.name}</h2>
      <div className="flex justify-center items-center gap-4 mb-4">
        <img src={weather.current.condition.icon} alt="weather icon" />
        <p className="text-xl">{weather.current.condition.text}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-left text-sm">
        <p><span className="font-semibold">Temperature:</span> {weather.current.temp_c}°C</p>
        <p><span className="font-semibold">Humidity:</span> {weather.current.humidity}%</p>
        <p><span className="font-semibold">Wind Speed:</span> {weather.current.wind_kph} km/h</p>
        <p><span className="font-semibold">UV Index:</span> {weather.current.uv}</p>
      </div>
    </div>
  );
};

export default Weather;
