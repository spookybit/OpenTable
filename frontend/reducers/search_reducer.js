import { merge } from 'lodash';
import { SEARCH } from '../actions/search_actions';

const SearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case SEARCH:
      return action.results;
    default:
      return state;
  }
};

export default SearchReducer;
