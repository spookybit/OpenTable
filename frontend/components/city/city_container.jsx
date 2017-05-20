import { connect } from 'react-redux';
import City from './city';
import { requestLocation } from '../../actions/location_actions';


const mapStateToProps = ({localRestaurants}) => {
  return {
    restaurants: localRestaurants
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestLocation: (id) => dispatch(requestLocation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
