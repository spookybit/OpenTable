import React from 'react';

class ReservationListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const user_id = this.props.currentUser.id;
    const reservation_id = this.props.reservation.id;
    this.props.deleteReservation(user_id, reservation_id);
  }

  render() {
    // debugger;

    const {reservation} = this.props;
    const {currentUser} = this.props;


    return (
      <div onClick={this.handleClick}>
        {reservation.date}
        {reservation.num_guests}
        {reservation.time_slot}
        {reservation.name}
      </div>
    );
  }
}

export default ReservationListItem;
