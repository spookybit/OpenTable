import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import localRestaurantsReducer from './location_reducer';
import AllLocationsReducer from './locations_reducer';
import CurrentRestaurantReducer from './restaurant_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  localRestaurants: localRestaurantsReducer,
  locationIndex: AllLocationsReducer,
  currentRestaurant: CurrentRestaurantReducer
});

export default rootReducer;
