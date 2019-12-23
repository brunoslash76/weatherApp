import produce from 'immer';

const INIT_STATE = {
  hourlyForecast: null,
};

export default function hourlyForecast(state = INIT_STATE, action) {

  return produce(state, draft => {

    switch (action.type) {

      case '@hourlyForecast/GET_HOURLY_FORECAST_SUCCESS': {

        draft.hourlyForecast = action.payload.hourlyForecast;
        break;

      }

      default:
        return state;

    }

  });

}
