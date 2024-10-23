<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\WeatherController;

Route::get('/weather/current', [WeatherController::class, 'getCurrentWeather']);
Route::get('/weather/forecast', [WeatherController::class, 'getWeatherForecast']);
