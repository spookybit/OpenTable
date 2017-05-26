import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';

class Heading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      formType: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.favoriteIndex = this.favoriteIndex.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({modal_props: {isOpen: true}});
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      this.setState({modalOpen: false});
    }
  }

  openModal(formType) {
    return e => this.setState({modalOpen: true, formType: formType});
  }

  dropdownLocations() {
    return (
      <div className="dropdown">
        <button className="dropdown-button">Choose your location</button>
        <div className="dropdown-content">
          <Link to="/city/Tokyo">Tokyo</Link>
          <Link to="/city/San Francisco">San Francisco</Link>
          <Link to="/city/Los Angeles">Los Angeles</Link>
          <Link to="/city/New York">New York</Link>
          <Link to="/city/Seattle">Seattle</Link>
          <Link to="/city/Austin">Austin</Link>
        </div>
      </div>
    );
  }


  sessionLinks () {
    return (
      <nav className="header">
        <div className="headerLeft">
          <Link to="/">
            <img src="http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_256/v1495602139/munchk_logo_ms6dmf.png" className="logoheader"/>
          </Link>
          {this.dropdownLocations()}
        </div>
        <div className="headerRight">
          <button onClick={this.openModal("login")}>Login</button>
          <button onClick={this.openModal("sign up")}>Sign Up</button>
        </div>
      </nav>
    );

  }

  userDropdown(currentUser) {
    return (
      <div className="userDropdown">
        <button className="user-dropdown-button">Hi, {currentUser.username}</button>
        <div className="user-dropdown-content">
          <Link to="/reservations">Reservations</Link>
          <Link to="/favorites">Favorites</Link>

        </div>
      </div>
    );
  }

  personalGreeting(currentUser) {
    return (
      <hgroup className="header">
        <div className="headerLeft">
          <Link to="/">
            <img src="http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_256/v1495602139/munchk_logo_ms6dmf.png" className="logoheader"/>
          </Link>
          {this.dropdownLocations()}
        </div>
        <div className="userOptions">
          {this.userDropdown(currentUser)}
          <button className="header-button"
            onClick={this.props.logout}>Log Out</button>
        </div>
      </hgroup>
    );
  }

  greeting() {
    const {currentUser} = this.props;
    return currentUser ? this.personalGreeting(currentUser) : this.sessionLinks();
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  render() {
    const style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '20vh',
    left                       : '25vw',
    right                      : '25vw',
    bottom                     : '10vh',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};
// <div> <img src="http://res.cloudinary.com/drgxeu7sx/image/upload/c_scale,w_32/v1495132837/food-2074638_640_vbsknn.png"/></div>
    return (
      <div>
        {this.greeting()}
        <i></i>
        <Modal
          contentLabel="Form"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={style}
        >
          <SessionFormContainer formType={this.state.formType}/>
        </Modal>
      </div>
    );
  }
}

export default Heading;
