import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showRestaurant(this.props.match.params.id);
  }

  render() {
    debugger;
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default Restaurant;
