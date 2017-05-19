import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { allLocations } from '../../actions/location_actions';

const mapStateToProps = ({locationIndex}) => {
  return {
    cities: locationIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  allLocations: () => dispatch(allLocations())
}

export default connect(mapDispatchToProps, mapStateToProps)(HomeIndex);
