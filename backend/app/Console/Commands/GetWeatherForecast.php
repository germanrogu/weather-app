<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\WeatherService;

class GetWeatherForecast extends Command
{
    protected $signature = 'forecast {city} {countryCode} {--d|days=5}';
    protected $description = 'Get the weather forecast for a specified city and country code for up to 5 days';

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
        $days = $this->option('days');

        $forecast = $this->weatherService->getWeatherForecast($city, $countryCode, $days);

        $this->info("City: {$forecast['city']}");
        foreach ($forecast['forecast'] as $day) {
            $this->info("Date: {$day['date']}, Weather: {$day['weather']}, Temperature: {$day['temperature']}");
        }
    }
}
