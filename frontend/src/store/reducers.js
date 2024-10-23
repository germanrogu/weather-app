import { combineReducers } from "redux";
import weatherReducer from "./weather/index";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
