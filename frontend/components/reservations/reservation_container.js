import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {createReservation} from '../../actions/reservation_actions';

const mapStateToProps = ({session, currentRestaurant}) => ({
  currentUser: session.currentUser,
  currentRestaurant: currentRestaurant
});

const mapDispatchToProps = (dispatch) => ({
  createReservation: (reservation) => dispatch(createReservation(reservation))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
