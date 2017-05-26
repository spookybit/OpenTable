import React from 'react';
import { Link } from 'react-router-dom';
import ReservationListItem from './reservation_list_item';

class ReservationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.indexReservation(this.props.currentUser.id);
  }

  reservationListItem() {
    // debugger;
    const reservations = this.props.reservations;

    return Object.keys(reservations).map((key, idx) => {
      return <ReservationListItem key={idx}
        currentUser={this.props.currentUser}
        deleteReservation={this.props.deleteReservation}
        reservation={reservations[key]}
        />;
    });

  }

  render () {
    const {restaurant} = this.props;
    return (
      <div>
        {this.reservationListItem()}
      </div>
    );
  }


}

export default ReservationPage;
