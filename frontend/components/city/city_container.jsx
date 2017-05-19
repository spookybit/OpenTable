import { connect } from 'react-redux';
import City from './city';
import { currentLocationSlice } from '../../actions/location_actions';


const mapStateToProps = ({currentLocation}) => {
  return {
    restaurants: currentLocation
  };
};

const mapDispatchToProps = (dispatch) => ({
  currentLocationSlice: (id) => dispatch(currentLocationSlice(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
