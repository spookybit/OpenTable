import { merge } from 'lodash';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';

export const CurrentRestaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_RESTAURANT):
      return action.restaurant;
    default:
      return state;
  }
};

export default CurrentRestaurantReducer;
