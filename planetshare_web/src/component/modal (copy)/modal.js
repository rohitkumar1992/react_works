import React, { Component } from 'react';
import Modal from 'react-modal';
import Login from '../../container/login_signup/login';
import Signup from '../../container/login_signup/signup';
const customStylesLogin = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '40%',
    height                : '95%',
    overflow              :  'hidden',
  }
};
const customStylesSignUp = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '40%',
    height                : '95%',
    overflow              :  'hidden',
  }
};
class modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      loginModal:true,
      signUpModal:false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  showSignUpmodal()
  {
    this.setState({signUpModal:true,loginModal:false});
  }
  showLoginModal()
  {
    this.setState({signUpModal:false,loginModal:true});
  }
  render() {
    if(this.state.loginModal)
    {
      return (
        <div>
        <button type="button" id="dropdownMenu1"  class="btn btn-white btn-login dropdown-toggle" onClick={this.openModal}>Login  </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStylesLogin}
            contentLabel="Example Modal"
          >
                    <button onClick={this.closeModal}>close</button>
            <h2 ref={subtitle => this.subtitle = subtitle}>Login</h2>
            <Login />
            <h4 onClick={this.showSignUpmodal.bind(this)}>create an account</h4>
          </Modal>
        </div>
      );
  }
  else {
    return (
      <div>
      <button type="button" id="dropdownMenu1"  class="btn btn-white btn-login dropdown-toggle" onClick={this.openModal}>Login  </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStylesSignUp}
          contentLabel="Example Modal"
        >
                  <button onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>Signup</h2>
          <Signup />
          <h4 onClick={this.showLoginModal.bind(this)}>Login</h4>
        </Modal>
      </div>
    );
  }
  }
}
export default modal;
