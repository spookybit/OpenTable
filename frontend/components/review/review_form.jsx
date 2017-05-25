import React from 'react';

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

  currentDate () {
    let time = new Date();

    let zero = "0";
    let year = time.getFullYear().toString();

    let month = time.getMonth();
    month = month + 1;
    month = month.toString();
    if (month.length === 1) {
      month = zero.concat(month);
    }

    let day = time.getDate().toString();
    if (day.length === 1) {
      day = zero.concat(day);
    }

    return `${year}-${month}-${day}`;
  }

  checkValidDate(date) {
    let current = this.currentDate();
    current = current.slice(0, 4).concat(current.slice(5, 7)).concat(current.slice(8));
    current = parseInt(current);

    let entry = date.slice(0, 4).concat(date.slice(5, 7)).concat(date.slice(8));
    entry = parseInt(entry);

    if (current >= entry) {
      return true;
    } else {
      return false;
    }
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
      && this.checkValidDate(this.state.date_visited))
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
          <input type="date" className="calendar"
            max={this.currentDate()} min="2016-01-01"
            onChange={this.update('date_visited')}/>
        </div>
        <input type="submit" className="formClick formReviewClick" value="Submit" />
      </form>
    );
  }


}

export default ReviewForm;
