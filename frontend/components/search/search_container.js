import {connect} from 'react-redux';
import SearchBar from './searchbar';
import makeSearch from '../../actions/search_actions';

// const mapStateToProps = ({search}) => {
//   return {
//     searchList: search
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    makeSearch: request => dispatch(makeSearch(request))
  };
};

export default connect (null, mapDispatchToProps)(SearchBar);
