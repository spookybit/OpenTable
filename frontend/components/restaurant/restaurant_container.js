import { connect } from 'react-redux';
import Restaurant from './restaurant';
import { showRestaurant } from '../../actions/restaurant_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = ({currentRestaurant, session}) => {
  return {
    restaurant: currentRestaurant,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  showRestaurant: (id) => dispatch(showRestaurant(id)),
  createFavorite: (user_id, fav) => dispatch(createFavorite(user_id, fav)),
  deleteFavorite: (user_id, fav_id) => dispatch(deleteFavorite(user_id, fav_id))
});

export default connect (mapStateToProps, mapDispatchToProps)(Restaurant);
