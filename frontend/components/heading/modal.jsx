import Modal from 'react-modal';
import React from 'react';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: "false",
      onRequestClose: "",
      afterOpenModal: "",
      closeTimeoutMS: "",
      style: ""
    };
  }

  render() {
    return(
      <Modal
        isOpen={this.state.isOpen}
        onRequestClose={this.state.onRequestClose}
        afterOpenModal={this.state.afterOpenModal}
        closeTimeoutMS={this.state.closeTimeoutMS}
        style={this.state.style}
      >

      </Modal>
    );
  }
}
