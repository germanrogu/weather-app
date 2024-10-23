<?php

namespace App\Services;

use App\Repositories\WeatherRepository;

class WeatherService
{
    protected $weatherRepository;

    public function __construct(WeatherRepository $weatherRepository)
    {
        $this->weatherRepository = $weatherRepository;
    }

    public function getCurrentWeather($city, $countryCode)
    {
        $data = $this->weatherRepository->getCurrentWeather($city, $countryCode);

        return [
            'city' => "{$data['name']} ({$countryCode})",
            'date' => now()->format('M d Y'),
            'weather' => $data['weather'][0]['description'],
            'temperature' => $data['main']['temp'] . '°C',
        ];
    }

    public function getWeatherForecast($city, $countryCode, $days)
    {
        $data = $this->weatherRepository->getWeatherForecast($city, $countryCode, $days);

        $dailyForecasts = collect($data['list'])
            ->filter(function ($forecast) {
                return (new \DateTime($forecast['dt_txt']))->format('H') == '12';
            })
            ->take($days)
            ->map(function ($forecast) use ($countryCode) {
                return [
                    'date' => (new \DateTime($forecast['dt_txt']))->format('M d Y'),
                    'weather' => $forecast['weather'][0]['description'],
                    'temperature' => $forecast['main']['temp'] . '°C',
                ];
            });

        return [
            'city' => "{$data['city']['name']} ({$countryCode})",
            'forecast' => $dailyForecasts->values(),
        ];
    }
}
