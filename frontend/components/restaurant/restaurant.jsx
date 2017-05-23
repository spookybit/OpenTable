import React from 'react';
import ReviewListItem from '../review/review_list_item';
import ReviewFormContainer from '../review/review_form_container';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showRestaurant(this.props.match.params.id);
  }

  reviewsList() {
    const reviews = this.props.restaurant.reviews;
    if (reviews !== undefined) {
      return reviews.map((review, idx) => {
        return (
          <ReviewListItem key={idx} review={review} />
        );
      });
    }
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
          <p>{restaurant.name} Ratings and Reviews</p>
          <ReviewFormContainer restaurant={this.props.restaurant}/>
          <div className="reviewList">
            {this.reviewsList()}
          </div>
        </div>

      </div>
    );
  }
}

export default Restaurant;
