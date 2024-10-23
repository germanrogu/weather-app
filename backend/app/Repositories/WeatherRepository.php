<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Http;

class WeatherRepository
{
    protected $apiKey;

    public function __construct()
    {
        $this->apiKey = env('OPENWEATHERMAP_API_KEY');
    }

    public function getCurrentWeather($city, $countryCode)
    {
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => "{$city},{$countryCode}",
            'appid' => $this->apiKey,
            'units' => 'metric',
        ]);

        return $response->json();
    }

    public function getWeatherForecast($city, $countryCode, $days)
    {
        $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
            'q' => "{$city},{$countryCode}",
            'appid' => $this->apiKey,
            'units' => 'metric',
        ]);

        return $response->json();
    }
}
