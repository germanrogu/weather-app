<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\WeatherService;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getCurrentWeather(Request $request)
    {
        $city = $request->query('city');
        $countryCode = $request->query('country_code');

        $weather = $this->weatherService->getCurrentWeather($city, $countryCode);

        return response()->json($weather);
    }

    public function getWeatherForecast(Request $request)
    {
        $city = $request->query('city');
        $countryCode = $request->query('country_code');
        $days = min($request->query('days', 5), 5);

        $forecast = $this->weatherService->getWeatherForecast($city, $countryCode, $days);

        return response()->json($forecast);
    }
}

