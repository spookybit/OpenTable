import { connect } from 'react-redux';
import Restaurant from './restaurant';
import { showRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = ({currentRestaurant}) => {
  return {
    restaurant: currentRestaurant
  };
};

const mapDispatchToProps = (dispatch) => ({
  showRestaurant: (id) => dispatch(showRestaurant(id))
});

export default connect (mapStateToProps, mapDispatchToProps)(Restaurant);
