import React from "react";

const WeatherItem = ({ current, date, description, temperature }) => {
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
    <li
      className={`py-4 transition duration-300 ease-in-out ${
        current ? "text-white list-none" : "px-6 hover:bg-orange-100"
      }`}
    >
      <div className='flex justify-between items-center'>
        <span
          className={`text-sm font-medium ${
            current ? "text-white" : "text-orange-800"
          }`}
        >
          {date}
        </span>
        <div className='flex items-center space-x-2'>
          <span className='text-2xl' aria-hidden='true'>
            {getWeatherIcon(description)}
          </span>
          <span
            className={`text-sm ${current ? "text-white" : "text-orange-600"}`}
          >
            {description}
          </span>
          <span
            className={`text-sm font-bold ${getTemperatureColor(temperature)} ${
              current ? "text-white" : ""
            }`}
          >
            {temperature}
          </span>
        </div>
      </div>
    </li>
  );
};

export default WeatherItem;
