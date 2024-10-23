import React from "react";
import WeatherItem from "../Item/WeatherItem";

const WeatherDisplay = ({ weather }) => {
  console.log("FROM ", weather);
  if (weather.loading)
    return (
      <div className='flex justify-center items-center py-8'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500'></div>
      </div>
    );

  if (weather.error)
    return (
      <div
        className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-md'
        role='alert'
      >
        <p className='font-bold'>Error</p>
        <p>{weather.error}</p>
      </div>
    );

  return (
    <div className='bg-orange-50 shadow-lg rounded-lg overflow-hidden'>
      {weather.data && (
        <>
          <div className='bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4'>
            <h1 className='text-2xl font-bold text-white'>
              Weather in {weather.data.current.city}
            </h1>
            <WeatherItem
              current
              date={weather.data.current.date}
              description={weather.data.current.weather}
              temperature={weather.data.current.temperature}
            />
          </div>
          <ul className='divide-y divide-orange-200'>
            {weather.data.forecast.forecast.map((forecast, index) => (
              <WeatherItem
                key={index}
                date={forecast.date}
                description={forecast.weather}
                temperature={forecast.temperature}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
