import { merge } from 'lodash';

import { RECEIVE_CURRENT_LOCATION } from '../actions/location_actions';

const nullLocation = Object.freeze({
});

const LocalRestaurantsReducer = (state = nullLocation, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_LOCATION:
      const currentLocation = action.currentLocation;
      return merge({}, nullLocation, {currentLocation});
    default:
      return state;
  }
};

export default LocalRestaurantsReducer;
