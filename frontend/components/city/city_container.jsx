import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import City from './city';
import { requestLocation, allLocations } from '../../actions/location_actions';


const mapStateToProps = ({localRestaurants}, ownProps) => {
  return {
    restaurants: localRestaurants,
    city: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestLocation: (id) => dispatch(requestLocation(id)),
  allLocations: () => dispatch(allLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(City);
