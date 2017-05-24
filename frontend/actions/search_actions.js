import { searchRequest } from '../util/search_util';

export const SEARCH = "SEARCH";

export const receiveSearchResults = (results) => ({
  type: SEARCH,
  results
});

export const makeSearch = search => dispatch => (
  searchRequest(search)
    .then( data => dispatch(receiveSearchResults(data)))
);
