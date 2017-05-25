import {makeReservation} from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const createReservation = (reservation) => dispatch => (
  makeReservation(reservation)
    .then(data => dispatch(receiveReservation(data)))
);
