import { connect } from 'react-redux';
import Favorites from './favorites';
import { allFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  allFavorite: (currentUser)=> dispatch(allFavorite(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
