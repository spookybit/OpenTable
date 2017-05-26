import {connect} from 'react-redux';
import ReservationPage from './reservation_page';
import {indexReservation} from '../../actions/reservation_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  indexReservation: (user_id) => dispatch(indexReservation(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPage);
