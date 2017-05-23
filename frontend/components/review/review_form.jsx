import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      rating: 0,
      date_visited: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    const {restaurant} = this.props;
    const review = {user_id: this.props.currentUserId,
      restaurant_id: restaurant.id, rating: parseInt(this.state.rating),
      date_visited: this.state.date_visited,
      description: this.state.description};
    this.props.postReview(review);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Share your thoughts"
          value={this.state.description}
          onChange={this.update('description')}
          />
        <select onChange={this.update('rating')}>
          <option disabled selected>rating</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="date" onChange={this.update('date_visited')}/>
      </form>
    );
  }


}

export default ReviewForm;
