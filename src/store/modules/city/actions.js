export function getCityRequest(data) {
  return {
    type: '@city/GET_CITY_REQUEST',
    payload: {data},
  };
}

export function getCitySuccess(city) {
  return {
    type: '@city/GET_CITY_SUCCESS',
    payload: {city},
  };
}

export function getCityFailure() {
  return {
    type: '@city/GET_CITY_FAILURE',
  };
}
