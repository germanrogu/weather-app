import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchWeatherSuccess, fetchWeatherFailure } from "./actions";
import { FETCH_WEATHER_REQUEST } from "./types";

function* fetchWeather(action) {
  const { city, countryCode } = action.payload;
  try {
    const currentWeatherResponse = yield call(
      axios.get,
      `${process.env.REACT_APP_BACKEND_URL}/weather/current`,
      {
        params: {
          city,
          country_code: countryCode,
        },
      }
    );

    const forecastResponse = yield call(
      axios.get,
      `${process.env.REACT_APP_BACKEND_URL}/weather/forecast`,
      {
        params: {
          city,
          country_code: countryCode,
          days: 5,
        },
      }
    );

    const combinedData = {
      current: currentWeatherResponse.data,
      forecast: forecastResponse.data,
    };

    yield put(fetchWeatherSuccess(combinedData));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default weatherSaga;
