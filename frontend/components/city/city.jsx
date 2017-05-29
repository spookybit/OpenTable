import React from 'react';
import { Link } from 'react-router-dom';
import LocalRestaurant from './local_restaurant';
import SearchContainer from '../search/search_container';

class CityRestaurants extends React.Component {
  constructor(props) {
    super (props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestLocation(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city && nextProps.city !== undefined) {
      this.props.requestLocation(nextProps.city);
    }
  }

  localEats() {
    const restaurants = this.props.restaurants;

    return Object.keys(restaurants).map((key, idx) => {
      return <LocalRestaurant key={idx} restaurant={restaurants[key]} />;
    });

  }


  render() {
    // const location = this.props.match.url.slice(1);
    return (
      <div className="cityIdxMain">
        <img src="https://res.cloudinary.com/drgxeu7sx/image/upload/v1495323223/index-header_rnrgje.jpg" />
        <SearchContainer />
        <div className="localRestaurantsIndexContainer">
            <p className="cityIdxText">Treat your tastebuds: Explore {this.props.city} restaurants</p>
          <p className="cityIdxText">Local Restaurants</p>
          {this.localEats()}
        </div>

      </div>
    );
  }

}

export default CityRestaurants;
