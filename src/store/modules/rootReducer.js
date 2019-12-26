import { combineReducers } from 'redux';

import city from './city/reducer';
import hourlyForecast from './hourlyForecast/reducer';

export default combineReducers({
  city,
  hourlyForecast,
});
