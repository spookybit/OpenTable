import React from 'react';
import LocalRestaurant from '../city/local_restaurant';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allFavorite(this.props.currentUser.id);
  }

  render() {
    return(
      <div>his</div>
    );
  }
}

export default Favorites;
