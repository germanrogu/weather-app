import React, { useState } from "react";

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && countryCode) {
      onSubmit(city, countryCode);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 mb-6'>
      <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='flex-1 px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300 ease-in-out placeholder-orange-600 text-orange-800'
        />
        <input
          type='text'
          placeholder='Country Code'
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className='w-full px-4 py-2 bg-orange-50 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300 ease-in-out placeholder-orange-600 text-orange-800'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded-md hover:from-yellow-500 hover:to-orange-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-md'
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
