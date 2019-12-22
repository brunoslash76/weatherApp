import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api, {API_KEY} from '../../../services/api';
import {getCitySuccess, getCityFailure} from './actions';

export function* getCity({payload}) {

  try {

    const {latitude: lat, longitude: long} = payload.data;
    const response = yield call(
      api.get,
      `/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );
    yield put(getCitySuccess(response.data));

  }  catch(e) {
    Alert.alert('Oops something went wrong, explode your cellphone!')
    yield put(getCityFailure());
  }
}

export default all([takeLatest('@city/GET_CITY_REQUEST', getCity)]);
