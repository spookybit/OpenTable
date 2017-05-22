import React from 'react';
import { Link } from 'react-router-dom';

class ReviewListItem extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    const {review} = this.props;
    return (
      <div>
        <li>Date visited: {review.date_visited}</li>
        <li>{review.description}</li>
        <li>Rating: {review.rating}</li>
      </div>
    );
  }
}

export default ReviewListItem;
