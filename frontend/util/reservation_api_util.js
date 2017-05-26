export const makeReservation = (reservation) => (
  $.ajax({
    type: 'POST',
    url: `/api/users/${reservation.user_id}/reservations`,
    data: {reservation}
  })
);

export const allReservations = (user_id) => (
  $.ajax({
    type: 'GET',
    url: `/api/users/${user_id}/reservations`
  })
);
