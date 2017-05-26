import {connect} from 'react-redux';
import ReservationPage from './reservation_page';
import {indexReservation, deleteReservation} from '../../actions/reservation_actions';

const mapStateToProps = ({session, reservations}) => ({
  currentUser: session.currentUser,
  reservations: reservations
});

const mapDispatchToProps = dispatch => ({
  indexReservation: (user_id) => dispatch(indexReservation(user_id)),
  deleteReservation: (user_id, reservation_id) => dispatch(deleteReservation(user_id, reservation_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPage);
