import {connect} from 'react-redux';
import SearchBar from './search';
import { makeSearch } from '../../actions/search_actions';

const mapDispatchToProps = dispatch => {
  return {
    makeSearch: request => dispatch(makeSearch(request))
  };
};

export default connect (null, mapDispatchToProps)(SearchBar);
