import React from "react";

const WeatherItem = ({ date, description, temperature }) => {
  const getWeatherIcon = (description) => {
    if (description.includes("cloud")) return "☁️";
    if (description.includes("rain")) return "🌧️";
    if (description.includes("sun") || description.includes("clear"))
      return "☀️";
    return "🌬️";
  };

  const getTemperatureColor = (temp) => {
    if (temp < 0) return "text-blue-500";
    if (temp < 10) return "text-teal-500";
    if (temp < 20) return "text-yellow-500";
    if (temp < 30) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <li className='px-6 py-4 hover:bg-orange-100 transition duration-300 ease-in-out'>
      <div className='flex justify-between items-center'>
        <span className='text-sm font-medium text-orange-800'>{date}</span>
        <div className='flex items-center space-x-2'>
          <span className='text-2xl' aria-hidden='true'>
            {getWeatherIcon(description)}
          </span>
          <span className='text-sm text-orange-600'>{description}</span>
          <span
            className={`text-sm font-bold ${getTemperatureColor(temperature)}`}
          >
            {Math.round(temperature)}°C
          </span>
        </div>
      </div>
    </li>
  );
};

export default WeatherItem;
