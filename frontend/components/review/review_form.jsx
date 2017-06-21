import React from 'react';
import {currentDate, checkValidDate} from '../../util/current_day';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      rating: 0,
      date_visited: 0,
      formErrors: ""
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
    const review = {
      user_id: this.props.currentUserId,
      restaurant_id: restaurant.id,
      rating: parseInt(this.state.rating),
      date_visited: this.state.date_visited,
      description: this.state.description};

    if (this.state.date_visited !== 0
      && this.state.rating !== 0
      && this.state.description !== ""
      && checkValidDate(this.state.date_visited))
      {
        this.props.postReview(review);
        const form = document.getElementById("reviewForm");
        form.reset();
        this.setState ({
          description: "",
          rating: 0,
          date_visited: 0,
          formErrors: ""
      });
    } else {
      this.setState({formErrors: "Please fill out all fields"});
    }
  }

  formErrors() {
    return this.state.formErrors;
  }

  render () {

    return (
      <form id="reviewForm" className="reviewForm" onSubmit={this.handleSubmit}>
        <div className="reviewFormErrors">{this.formErrors()}</div>
        <textarea className="reviewInput" type="text"
          placeholder="Share your thoughts"
          value={this.state.description}
          onChange={this.update('description')}
          />
          <div className="reviewButtons">
            <select defaultValue="Rating" className="searchCityDrop reviewDrop" onChange={this.update('rating')}>
              <option disabled>Rating</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <i className="visited">Visited on:</i>
            <input type="date" className="calendar"
              max={currentDate()} min="2016-01-01"
              onChange={this.update('date_visited')}/>
          </div>

        <input type="submit" className="formClick formReviewClick" value="Submit" />
      </form>
    );
  }


}

export default ReviewForm;
