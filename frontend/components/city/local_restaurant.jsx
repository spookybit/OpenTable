import React from 'react';
import { Link } from 'react-router-dom';

class LocalRestaurant extends React.Component {
  constructor(props) {
    super (props);
  }

  render () {
    const { restaurant } = this.props;

    return (
      <Link to={`/restaurant/${restaurant.name}/${restaurant.id}`}
        className="localRestaurantsIndexItem">
        <div className="cityIndexRow">
          <div className="localRestIdxImg">
            <img src={restaurant.img_url} />
          </div>

          <ul className="cityIndexAbout">
            <li>{restaurant.name}</li>
            <li>{restaurant.location}</li>
            <li>Price: {restaurant.moneys}</li>
            <li>Rating: {restaurant.average_rating}</li>
          </ul>

          <ul className="cityIndexHours">
            <li>Opens {restaurant.open_time}</li>
            <li>Closes {restaurant.close_time}</li>
          </ul>

        </div>
      </Link>
    );
  }

}

export default LocalRestaurant;
