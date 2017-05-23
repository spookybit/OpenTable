export const makeReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    data: {review}
  })
);
