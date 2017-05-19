import * as locationAPIUtil from '../util/location_api_util';

export const RECEIVE_CURRENT_LOCATION = "RECEIVE_CURRENT_LOCATION";
export const RECEIVE_ALL_LOCATIONS = "RECEIVE_ALL_LOCATIONS";
export const CURRENT_LOCATION_SLICE = "CURRENT_LOCATION_SLICE";

export const currentLocationSlice = currentLocationId => ({
  type: CURRENT_LOCATION_SLICE,
  currentLocationId
});

export const receiveCurrentLocation = currentLocation => ({
  type: RECEIVE_CURRENT_LOCATION,
  currentLocation
});

export const receiveAllLocations = (locations) => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations
});

// currentLocation taken from url
export const requestLocation = currentLocation => dispatch => (
  locationAPIUtil.singleLocation(currentLocation)
    .then(data => dispatch(receiveCurrentLocation(data)))
);

export const allLocations = () => dispatch => (
  locationAPIUtil.allLocations()
    .then(data => dispatch(receiveAllLocations(data)))
);
