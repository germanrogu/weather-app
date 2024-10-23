# Weather App

This repository contains the code for a weather application that uses the OpenWeatherMap API. The project is divided into two parts: the frontend and the backend.

## Project Structure

- **Frontend**: Contains the frontend code developed with React.
- **Backend**: Contains the backend code developed with Laravel.

## Prerequisites

- Node.js and npm installed to run the frontend.
- PHP and Composer installed to run the backend.
- An account on [OpenWeatherMap](https://openweathermap.org/) to obtain an API Key.

## API Key Configuration

1. Sign up on [OpenWeatherMap](https://openweathermap.org/) and obtain your API Key.
2. In the `backend` directory, create a `.env` file if it doesn't exist and add your API Key:

```bash
OPENWEATHERMAP_API_KEY=your_api_key_here
```

## Running the Backend

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install PHP dependencies using Composer:

```bash
composer install
```

3. Configure the `.env` file with your database details and the OpenWeatherMap API Key.

4. Run the database migrations (if necessary):

```bash
php artisan migrate
```

5. Start the Laravel development server:

```bash
php artisan serve
```

The backend will be available at `http://localhost:8000`.

## Running the Frontend

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install Node.js dependencies:

```bash
npm install
```

3. Configure the `.env` file in the `frontend` directory with the backend URL:

```bash
REACT_APP_BACKEND_URL=http://localhost:8000/api
```

4. Start the React development server:

```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

## Consuming Endpoints from the Frontend

The frontend makes requests to the following backend endpoints:

- **Current Weather**: `GET /api/weather/current?city={city}&country_code={countryCode}`
- **Weather Forecast**: `GET /api/weather/forecast?city={city}&country_code={countryCode}&days=5`

## Testing in a Local Environment

1. Ensure both the frontend and backend are running.
2. Open a browser and visit `http://localhost:3000` to interact with the application.
3. Use tools like Postman to test the backend endpoints directly.

## Notes

- Ensure CORS is configured correctly on the backend to allow requests from the frontend.
- Check Laravel logs in `storage/logs/laravel.log` to debug any backend issues.

---
