import React from 'react';
import { Link } from 'react-router-dom';
import LocalRestaurant from './local_restaurant';

class CityRestaurants extends React.Component {
  constructor(props) {
    super (props);

  }

  componentDidMount() {
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
    const location = this.props.match.url.slice(1);
    return (
      <div>
        {location}
        {this.localEats()}

      </div>
    );
  }

}

export default CityRestaurants;
