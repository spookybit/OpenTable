import { merge } from 'lodash';

import { RECEIVE_RESERVATION } from '../actions/reservation_actions';

const ReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESERVATION:
      return merge({}, state, action.reservation);
    default:
      return state;
  }
};

export default ReservationReducer;
