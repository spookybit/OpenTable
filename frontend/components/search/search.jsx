import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
      location_id: 0
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
    const search = {
      restaurant: {
        location_id: this.state.location_id,
        name: this.state.restaurantName
      }
    };
    this.props.makeSearch(search);
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Restaurant name"
          value={this.state.restaurantName}
          onChange={this.update('restaurantName')}
          />
        <select onChange={this.update('location_id')}>
          <option disabled selected>City</option>
          <option value="1">Japan</option>
          <option value="2">San Francisco</option>
          <option value="3">Los Angeles</option>
          <option value="4">New York</option>
          <option value="5">Seattle</option>
          <option value="6">Austin</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
