import { merge } from 'lodash';

import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const current_user = action.current_user;
      return merge({}, nullUser, {current_user});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    default:
      return state;

  }
};

export default SessionReducer;
