import { merge } from 'lodash';

import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    case CLEAR_ERRORS:
      const newState = merge({}, state, {errors: []});
      newState.errors = [];
      return newState;
    default:
      return state;

  }
};

export default SessionReducer;
