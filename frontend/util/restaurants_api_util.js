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


// ???????????

//
// export const localRestaurants = (locationId) => (
//   $.ajax({
//     method: 'SHOW',
//     url: 'api/locations'
//   })
// );
