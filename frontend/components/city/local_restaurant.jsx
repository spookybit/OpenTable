import React from 'react';
import { Link } from 'react-router-dom';

class LocalRestaurant extends React.Component {
  constructor(props) {
    super (props);
  }

  render () {
    const { restaurant } = this.props;
    return (
      <Link to={`/restaurant/${restaurant.name}`} className="localRestaurantsIndexItem">
        <div className="localRestIdxImg">
          <img src={restaurant.img_url} />
        </div>

        <div>
          {restaurant.name}
          {restaurant.price}
          {restaurant.rating}
        </div>

        <div>
          {restaurant.open_time}
          {restaurant.close_time}
        </div>
      </Link>
    );
  }

}

export default LocalRestaurant;
