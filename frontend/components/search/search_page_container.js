import { connect } from 'react-redux';
import SearchBar from './search';
import SearchPage from './search_page';

export const mapStateToProps = ({searchResults}) => ({
  searchResults: searchResults
});

export default connect (mapStateToProps, null)(SearchPage);
