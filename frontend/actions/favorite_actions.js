import {createFav, deleteFav, allFav} from '../util/favorite_util';
import {receiveRestaurant, RECEIVE_RESTAURANT} from './restaurant_actions';
import {receiveCurrentLocation, RECEIVE_CURRENT_LOCATION} from './location_actions';

export const createFavorite = (user_id, fav) => dispatch => (
  createFav(user_id, fav)
    .then(data => dispatch(receiveRestaurant(data)))
);

export const deleteFavorite = (user_id, fav) => dispatch => (
  deleteFav(user_id, fav)
    .then(data => dispatch(receiveRestaurant(data)))
);

export const allFavorite = (user_id) => dispatch => (
  allFav(user_id)
    .then(data => dispatch(receiveCurrentLocation(data)))
);
