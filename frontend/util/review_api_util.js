export const makeReview = (restaurantId, review) => (
  $.ajax({
    method: 'POST',
    url: `/api/restaurants/${restaurantId}/reviews`,
    data: {review}
  })
);
