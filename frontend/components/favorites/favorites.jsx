import React from 'react';
import LocalRestaurant from '../city/local_restaurant';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allFavorite(this.props.currentUser.id);
  }

  favoriteEats() {
    const restaurants = this.props.favoriteRestaurants;

    return Object.keys(restaurants).map((key, idx) => {
      return <LocalRestaurant key={idx} restaurant={restaurants[key]} />;
    });

  }

  render() {
    return(
      <div className="searchPage">
        <div className="searchResultsLabel">
          <div className="searchResultsLabelText">
            Your Favorite Restaurants
          </div>
        </div>
        <div className="restReviews">
          {this.favoriteEats()}
        </div>
      </div>
    );
  }
}

export default Favorites;
