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
    // debugger;
    return (
      <div className="reservListItem">
        <img className="reservImg" src={reservation.img} />
        <div className="reservDescript">
          You have a reservation for {reservation.num_guests} at {reservation.name}
        </div>
        <div className="reservTime">
          <div>
            <li>
              Date: {reservation.date}
            </li>
            <li>
              At: {reservation.time_slot}
            </li>
          </div>
          <div>
            <div className="cancelReserv" onClick={this.handleClick}>Cancel Reservation</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationListItem;
