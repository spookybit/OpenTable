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
      <div className="restaurant">
        <div className="restHeader">
          <img src={restaurant.img_url} />

          <div className="restHeaderText">
            <h1>{restaurant.name}</h1>
            <div className="restHeaderHours">
              <li>Hours:</li>
              <li>{restaurant.open_time}-{restaurant.close_time}</li>
            </div>
            <li>{restaurant.location}</li>
            <li>Price: {restaurant.price}</li>
            <li>Rating: {restaurant.average_rating}</li>
          </div>

        </div>

        <div className="restDescription">
          <p>About {restaurant.name}</p>
          <div>
            {restaurant.description}
          </div>
        </div>

        <div className="restReviews">
          
        </div>

      </div>
    );
  }
}

export default Restaurant;
