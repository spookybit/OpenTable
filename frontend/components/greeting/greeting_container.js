import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ( {session} ) => ({
  currentUser: session.currentUser
});

const mapDispathToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispathToProps)(Greeting);
