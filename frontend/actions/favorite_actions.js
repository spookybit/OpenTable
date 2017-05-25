import {createFav, deleteFav} from '../util/favorite_util';
import {receiveRestaurant, RECEIVE_RESTAURANT} from './restaurant_actions';

export const createFavorite = (user_id, fav) => dispatch => (
  createFav(user_id, fav)
    .then(data => dispatch(receiveRestaurant(data)))
);

export const deleteFavorite = (user_id, fav) => dispatch => (
  deleteFav(user_id, fav)
    .then(data => dispatch(receiveRestaurant(data)))
);
