import React from 'react';
import {currentDate, checkValidDate} from '../../util/current_day';
import { Link, withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num_guests: "",
      time_slot: "",
      date: "",
      errors: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);

  }

  componentWillReceiveProps () {
    this.setState({errors: false});
  }

  handleSubmit(e) {
    e.preventDefault;

    if (this.props.currentUser) {
      this.state.restaurant_id = this.props.currentRestaurant.id;
      this.state.user_id = this.props.currentUser.id;
      this.props.createReservation(this.state);
      this.props.history.push(`/reservations`);
    } else {
      this.setState({errors: true});
    }

  }

  displayErrors() {
    if (this.state.errors) {
      return (
        <div className="reservErrors">
          Please sign in to make a reservation
        </div>
      );
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getTimes() {
    const halfHours = ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM",
    "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM",
    "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM",
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
    "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM",
    "11:00 PM", "11:30 PM"];

    let i = halfHours.indexOf(this.props.currentRestaurant.open_time);
    let j = halfHours.indexOf(this.props.currentRestaurant.close_time) - 1;
    const times = halfHours.slice(i, j);

    return times.map((time, idx) => {
      return <option key={idx}>{time}</option>;
    });

  }

  render() {
    return (
      <form className="reservationForm" onSubmit={this.handleSubmit}>

        <div className="reservationHeader">

          Make a reservation

        </div>

        <div className="reservationInputs">
          <select className="numGuests" defaultValue="Number of Guests" onChange={this.update('num_guests')}>
            <option disabled>Number of Guests</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <select className="timeSlot" defaultValue="Time" onChange={this.update('time_slot')}>
            <option disabled>Time</option>
            {this.getTimes()}
          </select>

          <input type="date" className="reservationCalendar"
            min={currentDate()} max="2017-12-31"
            onChange={this.update('date')}/>

          <input className="reservationSubmit" type="submit" />

        </div>
        {this.displayErrors()}
      </form>
    );
  }

}

export default withRouter(ReservationForm);
