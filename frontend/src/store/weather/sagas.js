import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchWeatherSuccess, fetchWeatherFailure } from "./actions";
import { FETCH_WEATHER_REQUEST } from "./types";

function* fetchWeather(action) {
  const { city, countryCode } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`
    );
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}

export default weatherSaga;
