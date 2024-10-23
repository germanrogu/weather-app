<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\WeatherService;

class GetCurrentWeather extends Command
{
    protected $signature = 'current {city} {countryCode}';
    protected $description = 'Get the current weather for a specified city and country code';

    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        parent::__construct();
        $this->weatherService = $weatherService;
    }

    public function handle()
    {
        $city = $this->argument('city');
        $countryCode = $this->argument('countryCode');

        $weather = $this->weatherService->getCurrentWeather($city, $countryCode);

        $this->info("City: {$weather['city']}");
        $this->info("Date: {$weather['date']}");
        $this->info("Weather: {$weather['weather']}");
        $this->info("Temperature: {$weather['temperature']}");
    }
}
