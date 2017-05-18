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

  openModal(formType) {
    return e => this.setState({modalOpen: true, formType: formType});
  }

  sessionLinks () {
    return (
      <nav className="login-signup">
        <button onClick={this.openModal("login")}>Login</button>
        <button onClick={this.openModal("sign up")}>Sign Up</button>
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
    return (
      <div>
        {this.greeting()}
        <Modal
          contentLabel="Form"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
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
