import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherForm from "../../components/Weather/Forms/WeatherForm";
import WeatherDisplay from "../../components/Weather/UI/Display/WeatherDisplay";
import { fetchWeatherRequest } from "../../store/weather/actions";

const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleFetchWeather = (city, countryCode) => {
    dispatch(fetchWeatherRequest(city, countryCode));
  };

  return (
    <div className='container mx-auto p-4 max-w-md'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-6 bg-gradient-to-r from-yellow-400 to-orange-500'>
          <h1 className='text-2xl font-bold text-white text-center drop-shadow-md'>
            Weather Forecast
          </h1>
        </div>
        <div className='p-6'>
          <WeatherForm onSubmit={handleFetchWeather} />
          <WeatherDisplay weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
