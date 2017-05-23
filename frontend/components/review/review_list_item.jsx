import React from 'react';
import { Link } from 'react-router-dom';

class ReviewListItem extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    const {review} = this.props;
    return (
      <div className="reviewListItem">
        <div className="reviewListItemHeader">
          <li>Reviewed by: {review.username}</li>
          <li>Rating: {review.rating}</li>
          <li>Date visited: {review.date_visited}</li>
        </div>
        <li>{review.description}</li>
      </div>
    );
  }
}

export default ReviewListItem;
