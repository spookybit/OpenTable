import React from 'react';
import { Link } from 'react-router-dom';

class LocalRestaurant extends React.Component {
  constructor(props) {
    super (props);
  }

  moneys (num) {
    let moneys = "";
    for (let i = 0; i < num; i++) {
      moneys += "$";
    }
    return moneys;
  }

  render () {
    const { restaurant } = this.props;

    return (
      <Link to={`/restaurant/${restaurant.name}/${restaurant.id}`} className="localRestaurantsIndexItem">
        <div className="cityIndexRow">
          <div className="localRestIdxImg">
            <img src={restaurant.img_url} />
          </div>

          <ul className="cityIndexAbout">
            <li>{restaurant.name}</li>
            <li>Price: {this.moneys(restaurant.price)}</li>
            <li>Rating: {restaurant.rating}</li>
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
