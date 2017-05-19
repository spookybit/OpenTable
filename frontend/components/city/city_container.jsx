import { connect } from 'react-redux';
import City from './city';
import { requestLocation } from '../../actions/location_actions';


const mapStateToProps = ({currentLocation}) => {
  return {
    restaurants: currentLocation
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestLocation: (id) => dispatch(requestLocation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
