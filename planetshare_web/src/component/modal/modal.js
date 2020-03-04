import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../../container/login_signup/login';
import Signup from '../../container/login_signup/signup';
import PhoneLogin from '../../container/login_signup/phonelogin';
const customStylesLogin = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '30%',
    minWidth              :'30%',
    height                : 'auto',
    overflow              :  'hidden',
    borderRadius          :   "10px",
   border                :"none",
   boxShadow            : "0px 0px 5px 0px #000"
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
    width                 : '30%',
    height                : 'auto',
    overflow              :  'hidden',
    borderRadius          :   "10px",
   border                :"none",
   boxShadow            : "0px 0px 5px 0px #000"
  }
};

class modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      loginModal:false,
      signUpModal:false,
      phoneLogin:false,
      openUrl:''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount()
  {
    this.setState({openUrl:this.props.openUrl});
    if(this.props.openUrl=='loginModal')
    {
      this.setState({loginModal: true});
    }
    if(this.props.openUrl=='signUpModal')
    {
      this.setState({signUpModal: true});
    }
    else {
      this.setState({loginModal: true});
    }
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    if(this.state.openUrl=="signUpModal")
    {
          this.setState({modalIsOpen: false,signUpModal:true,loginModal:false,phoneLogin:false});
    }
    if(this.state.openUrl=="loginModal")
    {
          this.setState({modalIsOpen: false,signUpModal:false,loginModal:true,phoneLogin:false});
    }
  }
  showSignUpmodal()
  {
    this.setState({signUpModal:true,loginModal:false,phoneLogin:false});
  }
  showLoginModal()
  {
    this.setState({signUpModal:false,loginModal:true,phoneLogin:false});
  }
  phoneLogin()
  {
    this.setState({phoneLogin:true,signUpModal:false,loginModal:false});
  }
  render() {
    if(this.state.loginModal)
    {
      return (
        <div>
        {/*{this.props.account=='vendor'?<a class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} onClick={this.openModal}>Register as a Vendor</a>:<button type="button" id="dropdownMenu1"  class={this.props.tag=="services"?"btn btn-lg btn-primary":"btn btn-white btn-login"} onClick={this.openModal}>{this.props.tag=="services"?"Get Started":"Login"}</button>}*/}
          {(this.props.tag!='role_vendor' && this.props.tag!='role_seller') && <span  style={{cursor:'pointer'}}  class={this.props.tag=="services"?"btn btn-lg btn-primary get_start":"nav-link text-white modal_login_button"} onClick={this.openModal}>{this.props.tag=="services"?"Get Started":"Join Free"}</span>}
          {this.props.tag=="role_vendor" && <p class="lead mb-0 text-left offset-lg-1"><button  type="button"style={{cursor:'pointer'}}  class="btn btn-lg btn-primary get_start" onClick={this.openModal}>Get Started</button></p>}
          {this.props.tag=="role_seller" && <p class="lead mb-0 text-left offset-lg-1"><button  type="button"style={{cursor:'pointer'}}  class="btn btn-lg btn-primary get_start" onClick={this.openModal}>Get Started</button></p>}

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            ariaHideApp={false}
            style={customStylesLogin}
            contentLabel="Example Modal"
          >
                    <div class="close-btn" onClick={this.closeModal}> </div>
            <h2 class="login-title pb-8" ref={subtitle => this.subtitle = subtitle}>Log In</h2>
            <Login clicked={this.phoneLogin.bind(this)} redirect_url={this.props.location.pathname} redirect_tag={this.props.tag} role={this.props.account}/>
           {/*<h4 class="toggle-sign-msg" onClick={this.showSignUpmodal.bind(this)}>create an account</h4>*/}
            <div class="toggle-sign-msg"> <span class="toggle-sign-msg "> Do Not have an account? </span> <div class="link" onClick={this.showSignUpmodal.bind(this)}>Create Account</div></div>
          </Modal>
        </div>
      );
  }
  if(this.state.signUpModal) {
    return (
      <div>
      {this.props.account=='vendor'?<a class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} onClick={this.openModal}>Register as a Vendor</a>:<button type="button" id="dropdownMenu1"  class="btn btn-white btn-login " onClick={this.openModal}>{this.props.tag=="services"?"Get Started":"Login"}</button>}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStylesSignUp}
          contentLabel="Example Modal"
        >
                    <div class="close-btn" onClick={this.closeModal}> </div>
          <h2  class="login-title pb-8" ref={subtitle => this.subtitle = subtitle}>Create Account</h2>
          <Signup role={this.props.tag} redirect_url={this.props.location.pathname}/>
         <div class="toggle-sign-msg">  Already a member? <div class="link"  onClick={this.showLoginModal.bind(this)}>Login</div> </div>
        </Modal>
      </div>
    );
  }
  if(this.state.phoneLogin) {
    return (
      <div>
        {this.props.account=='vendor'?<a class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} onClick={this.openModal}>Register as a Vendor</a>:<button type="button" id="dropdownMenu1"  class="btn btn-white btn-login" onClick={this.openModal}>{this.props.tag=="services"?"Get Started":"Login"}  </button>}
      <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStylesSignUp}
      contentLabel="Example Modal"
    >
    <div class="close-btn" onClick={this.closeModal}> </div>
      <h2  class="login-title pb-8"  ref={subtitle => this.subtitle = subtitle}>Login with Phone Number</h2>
      <PhoneLogin role={this.props.account}/>
    </Modal></div>);
    }
  }
}
export default withRouter(modal);
