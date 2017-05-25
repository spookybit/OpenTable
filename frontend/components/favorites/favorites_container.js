import { connect } from 'react-redux';
import Favorites from './favorites';
import { allFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({session, localRestaurants}) => ({
  currentUser: session.currentUser,
  favoriteRestaurants: localRestaurants
});

const mapDispatchToProps = (dispatch) => ({
  allFavorite: (currentUser)=> dispatch(allFavorite(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
