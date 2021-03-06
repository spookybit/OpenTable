import * as APIUtil from '../util/restaurants_api_util';
import { makeReview } from '../util/review_api_util';

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

// export const receiveFormErrors = errors => ({
//   type: RECEIVE_FORM_ERRORS,
//   errors
// });

export const showRestaurant = restaurantId => dispatch=> (
  APIUtil.showRestaurant(restaurantId)
    .then(data => (dispatch(receiveRestaurant(data))))
);

export const postReview = (review) => dispatch => (
  makeReview(review)
    .then((data) => (dispatch(receiveRestaurant(data)))
    // , err => (
    //   dispatch(receiveFormErrors(err.responseJSON))
    // )
  )
);
