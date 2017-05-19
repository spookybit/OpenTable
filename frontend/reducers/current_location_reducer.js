import { merge } from 'lodash';

import { CURRENT_LOCATION_SLICE } from '../actions/location_actions';


const CurrentLocationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CURRENT_LOCATION_SLICE:
      return action.something;
    default:
      return state;
  }
};

export default CURRENT_LOCATION_SLICE;
