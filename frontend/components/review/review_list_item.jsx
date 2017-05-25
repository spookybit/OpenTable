import React from 'react';
import { Link } from 'react-router-dom';

class ReviewListItem extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    const {review} = this.props;
    return (
      <li className="reviewListItem">
        <ul className="reviewListItemHeader">
          <li>Reviewed by: {review.username}</li>
          <li>Rating: {review.rating}</li>
          <li>Date visited: {review.date_visited}</li>
        </ul>
        <div>{review.description}</div>
      </li>
    );
  }
}

export default ReviewListItem;
