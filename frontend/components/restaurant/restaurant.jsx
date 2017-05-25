import React from 'react';
import ReviewListItem from '../review/review_list_item';
import ReviewFormContainer from '../review/review_form_container';
import SearchContainer from '../search/search_container';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFavorite = this.toggleFavorite.bind(this);
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


  toggleFavorite() {
    // debugger;
    const userId = this.props.currentUser.id;
    const locationId = this.props.restaurant.id;
    const fav = {user_id: `${userId}`, restaurant_id: `${locationId}`};
    if (this.props.restaurant.favorited) {
      this.props.deleteFavorite(userId, fav);
    } else {
      this.props.createFavorite(userId, fav);
    }
  }

  reviewForm() {
    if (this.props.currentUser) {
      return <ReviewFormContainer restaurant={this.props.restaurant}/>;
    } else {
      return "Please sign in to make a review";
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
            <div className="follow_button" onClick={this.toggleFavorite}>&lt;3</div>
            <div className="restHeaderHours">
              <li>Hours:</li>
              <li>{restaurant.open_time}-{restaurant.close_time}</li>
            </div>
            <li>{restaurant.location}</li>
            <li>Price: {restaurant.price}</li>
            <li>Rating: {restaurant.average_rating}</li>
          </div>

        </div>

        <SearchContainer />

        <div className="restDescription">
          <p>About {restaurant.name}</p>
          <div>
            {restaurant.description}
          </div>
        </div>

        <div className="restReviews">
          <p>{restaurant.name} Ratings and Reviews</p>
          {this.reviewForm()}
          <div className="reviewList">
            {this.reviewsList()}
          </div>
        </div>

      </div>
    );
  }
}

export default Restaurant;
