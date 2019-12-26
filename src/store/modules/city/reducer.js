import produce from 'immer';

const INIT_STATE = {
  city: null,
};

export default function city(state = INIT_STATE, action) {

  return produce(state, draft => {

    switch (action.type) {

      case '@city/GET_CITY_SUCCESS': {

        draft.city = action.payload.city;
        break;

      };

      default:
        return state;

    }

  });

}
