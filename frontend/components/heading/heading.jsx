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

  sessionLinks () {
    return (
      <nav className="header">
        <div className="dropdown">
          <button className="dropdown-button">Choose your location</button>
          <div className="dropdown-content">
            <Link to="j">Tokyo</Link>
            <Link to="s">San Francisco</Link>
            <Link to="n">New York</Link>
            <Link to="p">Paris</Link>
          </div>
        </div>
        <div>
          <button onClick={this.openModal("login")}>Login</button>
          <button onClick={this.openModal("sign up")}>Sign Up</button>
        </div>
      </nav>
    );

  }

  personalGreeting(currentUser) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button"
          onClick={this.props.logout}>Log Out</button>
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
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : 'center',
        left            : 'center',
        right           : 'center',
        bottom          : 'center',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
      }
    };
    return (
      <div>
        {this.greeting()}
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
// onRequestClose={this.props.onRequestClose}
// afterOpenModal={this.props.afterOpenModal}
// closeTimeoutMS={this.props.closeTimeoutMS}
// style={this.props.style}

export default Heading;
