import React from 'react';


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num_guests: "",
      time_slot: "",
      date: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault;
    this.state.restaurant_id = this.props.currentRestaurant.id;
    this.props.createReservation(this.state);
  }


  render() {
    return (
      <form>

      </form>
    );
  }

}

export default ReservationForm;
