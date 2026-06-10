import React, { useState } from 'react';
import { Cloud, Sun, Droplets, Wind } from 'lucide-react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await fetch(`http://localhost:5000/weather/${city}`);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      {}
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-2xl w-full max-w-md text-white">
        <div className="flex gap-2 mb-6">
          <input 
            className="bg-white/10 border-none rounded-xl p-3 w-full placeholder-white/70 focus:ring-2 ring-white/50"
            placeholder="Search city..." 
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather} className="bg-white/30 px-4 rounded-xl hover:bg-white/40 transition">Search</button>
        </div>

        {weather && (
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold">{weather.name}</h2>
            <p className="text-8xl font-thin my-4">{Math.round(weather.main.temp)}°</p>
            <p className="text-xl capitalize mb-6">{weather.weather[0].description}</p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
              <div className="flex items-center gap-2"><Droplets size={20}/> {weather.main.humidity}%</div>
              <div className="flex items-center gap-2"><Wind size={20}/> {weather.wind.speed} m/s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;