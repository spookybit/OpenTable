import * as APIUtil from '../util/restaurants_api_util';
import { makeReview } from '../util/review_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const showRestaurant = restaurantId => dispatch=> (
  APIUtil.showRestaurant(restaurantId)
    .then(data => (dispatch(receiveRestaurant(data))))
);

export const postReview = (restaurant_id, review) => dispatch => (
  makeReview(restaurant_id, review)
    .then(() => (dispatch(receiveRestaurant(restaurant_id))))
);
