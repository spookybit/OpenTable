import * as APIUtil from '../util/restaurants_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const showRestaurant = restaurantId => dispatch=> (
  APIUtil.showRestaurant(restaurantId)
    .then(data => (dispatch(receiveRestaurant(data))))
);
