import {makeReservation, allReservations} from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const receiveAllReservations = (reservations) => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const indexReservation = (user_id) => dispatch => (
  allReservations(user_id)
    .then(data => dispatch(receiveAllReservations(data)))
);

export const createReservation = (reservation) => dispatch => (
  makeReservation(reservation)
    .then(data => dispatch(receiveReservation(data)))
);
