import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Heading = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Heading;
//
// class Heading extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Modal: {
//         isOpen: "false",
//         onRequestClose: "",
//         afterOpenModal: "",
//         closeTimeoutMS: "",
//         style: ""
//       }
//     }
//   }
//
//   render() {
//     return (
//       <Modal
//         isOpen={this.state.modal.isOpen}>
//
//
//       </Modal>
//     );
//   }
// }
