import React from 'react';
import { Link } from 'react-router-dom';
import LocalRestaurant from '../city/local_restaurant';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  searchEats() {
    const restaurants = this.props.searchResults;

    return restaurants.map((restaurant, idx) => {
      return <LocalRestaurant key={idx} restaurant={restaurant} />;
    });
  }

  render() {
    const search = this.props.location.pathname.slice(8);
    return (
      <div>
        <div>
          Search Results
        </div>
        {this.searchEats()}
      </div>
    );
  }
}

export default SearchPage;

//Search Results for {`${search}`}
