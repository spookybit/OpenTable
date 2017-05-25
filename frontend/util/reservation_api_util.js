export const makeReservation = (reservation) => (
  $.ajax({
    type: 'POST',
    url: `/api/restaurants/${reservation.restaurant_id}/reservations`,
    data: {reservation}
  })
);
