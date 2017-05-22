export const newRestaurant = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    restaurant
  })
);

export const allRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants'
  })
);

export const showRestaurant = (restaurantId) => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  })
);
