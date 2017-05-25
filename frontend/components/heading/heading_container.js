import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Heading from './heading';
import { allFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ( {session} ) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  allFavorite: (user_id) => dispatch(allFavorite(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
