import React from 'react';
import { Link } from 'react-router-dom';

class CityRestaurants extends React.Component {
  constructor(props) {
    super (props);
  }

  componentDidMount() {
    this.props.requestLocation(this.props.match.params.id)
  }

  render() {
    return (
      <div>city index</div>
    )
  }

}

export default CityRestaurants;
