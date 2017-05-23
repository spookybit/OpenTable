import { merge } from 'lodash';
import { RECEIVE_RESTAURANT, RECEIVE_FORM_ERRORS } from '../actions/restaurant_actions';

export const CurrentRestaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_RESTAURANT):
      return action.restaurant;
    // case(RECEIVE_FORM_ERRORS):
    //
    default:
      return state;
  }
};

export default CurrentRestaurantReducer;
