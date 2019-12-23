import { all } from 'redux-saga/effects';

import city from './city/sagas';
import hourlyForecast from './hourlyForecast/sagas';


export default function* rootSaga() {
  return yield all([
    city,
    hourlyForecast,
  ]);
}
