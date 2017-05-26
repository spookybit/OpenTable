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
      <div className="searchPage">
        <div className="searchResultsLabel">
          <div className="searchResultsLabelText">
            Upcoming Reservations
          </div>
        </div>
        <div className="restReviews">
          {this.reservationListItem()}
        </div>
      </div>
    );
  }


}

export default ReservationPage;
