import { searchRequest } from '../util/search_util';

export const SEARCH = "SEARCH";

export const receiveSearchResults = (search) => ({
  type: SEARCH,
  search
});

export const makeSearch = searchData => dispatch => (
  searchRequest(searchData)
    .then( data => dispatch(receiveSearchResults(data)))
);
