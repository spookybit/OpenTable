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
      <div>
        <div>Your Favorite Restaurants</div>
        {this.favoriteEats()}
      </div>
    );
  }
}

export default Favorites;
