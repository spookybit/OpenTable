import * as locationAPIUtil from '../util/location_api_util';

export const RECEIVE_CURRENT_LOCATION = "RECEIVE_CURRENT_LOCATION";
export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";

export const receiveCurrentLocation = currentLocation => ({
  type: RECEIVE_CURRENT_LOCATION,
  currentLocation
});

export const receiveAllLocations = (locations) => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations
});

// currentLocation taken from url
export const currentLocation = currentLocation => dispatch => (
  locationAPIUtil.singleLocation(currentLocation)
    .then(data => dispatch(receiveCurrentLocation(data)))
);

export const allLocations = () => dispatch => (
  locationAPIUtil.allLocations()
    .then(data => dispatch(receiveAllLocations(data)))
);
