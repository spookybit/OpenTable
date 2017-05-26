import { merge } from 'lodash';

import { RECEIVE_RESERVATION } from '../actions/reservation_actions';

const ReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESERVATION:
      const newState = merge({}, state);
      newState[action.reservation.id] = action.reservation;
      return newState;
    default:
      return state;
  }
};

export default ReservationReducer;
