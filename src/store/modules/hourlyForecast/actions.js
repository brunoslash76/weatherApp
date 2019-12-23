export function getHourlyForecastRequest (data) {
  return {
    type: '@hourlyForecast/GET_HOURLY_FORECAST_REQUEST',
    payload: {data},
  };

}

export function getHourlyForecastSuccess (hourlyForecast) {

  return {
    type: '@hourlyForecast/GET_HOURLY_FORECAST_SUCCESS',
    payload: {hourlyForecast},
  };

}

export function getHourlyForecastFailure() {

  return {
    type: '@hourlyForecast/GET_HOURLY_FORECAST_SUCCESS',
  };

}
