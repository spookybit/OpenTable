import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Heading from './heading';

const mapStateToProps = ( {session} ) => ({
  currentUser: session.currentUser
});

const mapDispathToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispathToProps)(Heading);
