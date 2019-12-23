import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api, {API_KEY} from '../../../services/api';
import {getHourlyForecastSuccess, getHourlyForecastFailure} from './actions';

export function* getHourlyForecast({payload}) {

  try {

    const {latitude: lat, longitude: long} = payload.data;

    const response = yield call(
      api.get,
      `/forecast?lat=${lat}&lon=${long}&apikey=${API_KEY}`,
    );

    yield put(getHourlyForecastSuccess(response.data.list));

  } catch (e) {

    Alert.alert('Oops, something went wrong while trying to get hourly forecast!');
    yield put(getHourlyForecastFailure());

  }

}

export default all([takeLatest('@hourlyForecast/GET_HOURLY_FORECAST_REQUEST', getHourlyForecast)]);
