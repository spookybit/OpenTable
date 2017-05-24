export const newRestaurant = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    restaurant
  })
);

export const showRestaurant = (restaurantId) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  })
);
