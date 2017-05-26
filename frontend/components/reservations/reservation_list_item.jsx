import React from 'react';

class ReservationListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {restaurant} = this.props;

    return (
      <div>
        {restaurant.date}
        {restaurant.num_guests}
        {restaurant.time_slot}
        {restaurant.name}
      </div>
    );
  }
}

export default ReservationListItem;
