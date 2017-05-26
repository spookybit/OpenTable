import React from 'react';

class ReservationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.indexReservation(this.props.currentUser.id);
  }

  render () {
    return (
      <div>yes</div>
    );
  }

}

export default ReservationPage;
