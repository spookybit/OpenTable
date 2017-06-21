import React from 'react';
import { Link } from 'react-router-dom';
import LocalRestaurant from '../city/local_restaurant';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  searchEats() {
    const restaurants = this.props.searchResults;

    if (restaurants.length === 0) {
      return (
        <div className="emptySearch">
          Nothing matches your search results
        </div>
      )
    } else {
      return restaurants.map((restaurant, idx) => {
        return <LocalRestaurant key={idx} restaurant={restaurant} />;
      });
    }
  }

  render() {
    const search = this.props.location.pathname.slice(8);
    return (
      <div className="searchPage">
        <div className="searchResultsLabel">
          <div className="searchResultsLabelText">
            Search Results
          </div>
        </div>
        <div className="restReviews">
          {this.searchEats()}
        </div>
      </div>
    );
  }
}

export default SearchPage;

//Search Results for {`${search}`}
