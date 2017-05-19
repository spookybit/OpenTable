import { merge } from 'lodash';

import { RECEIVE_ALL_LOCATIONS } from '../actions/location_actions';

const nullLocations = Object.freeze([

]);

const AllLocationsReducer = (state = nullLocations, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_LOCATIONS:
      const locations = action.locations;
      return merge([], nullLocations, [locations]);
    default:
      return state;
  }
};

export default AllLocationsReducer;
