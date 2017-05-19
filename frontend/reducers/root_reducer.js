import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import localRestaurantsReducer from './location_reducer';
import AllLocationsReducer from './locations_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  localRestaurants: localRestaurantsReducer,
  locationIndex: AllLocationsReducer
});

export default rootReducer;
