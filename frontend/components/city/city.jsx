import React from 'react';
import { Link } from 'react-router-dom';

class CityRestaurants extends React.Component {
  constructor(props) {
    super (props);
  }

  componentDidMount() {
    this.props.requestLocation(this.props.match.params.id);
  }

  localEats() {
    const restaurants = this.props.restaurants;
    return Object.keys(restaurants).forEach((restaurant, idx) => {
      return <li key="idx">restaurant</li>;
    });
  }


  render() {
    return (
      <div>
        {this.localEats()}

      </div>
    );
  }

}

export default CityRestaurants;
