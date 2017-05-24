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
    // debugger;
    const search = this.props.location.pathname.slice(8);
    return (
      <div>
        <div>
          Search Results for {`${search}`}
        </div>
        {this.searchEats()}
      </div>
    );
  }
}

export default SearchPage;
