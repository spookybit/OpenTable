import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showRestaurant(this.props.match.params.id);
  }

  render() {
    const {restaurant} = this.props;
    return (
      <div>
        <img src={restaurant.img_url} />
        {restaurant.name}
        {restaurant.description}
        {restaurant.location}
        {restaurant.open_time}
        {restaurant.close_time}
        {restaurant.price}
        {restaurant.rating}

      </div>
    );
  }
}

export default Restaurant;
