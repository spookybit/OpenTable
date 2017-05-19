import { merge } from 'lodash';

import { RECEIVE_CURRENT_LOCATION } from '../actions/location_actions';


const LocalRestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_LOCATION:
      return action.currentLocation;
    default:
      return state;
  }
};

export default LocalRestaurantsReducer;
