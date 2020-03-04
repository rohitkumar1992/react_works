import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../Login/login';
import PhoneLoginOtp from '../../container/PhoneLogin/PhoneLoginotp';
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
   boxShadow            : "0px 0px 5px 0px #000",
   zIndex:'999'
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
   boxShadow            : "0px 0px 5px 0px #000",
   zIndex:'999'
  }
};

class modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      loginModal:false,
      signUpModal:false,
    };

    this.openModal = this.openModal.bind(this);
  }
  componentWillMount()
  {
    this.setState({loginModal: true});
  }
  openModal() {
    this.setState({modalIsOpen: true,loginModal:true});
  }
  closeModal=()=>{
     this.setState({modalIsOpen: false,loginModal:true});
  }
  render() {
  if(this.state.loginModal) {
    return (
      <div>
      <a class="nav-link"  href="javascript:;" onClick={this.openModal}>Login</a>
      <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStylesSignUp}
      contentLabel="Example Modal"
    >
    <button class="close" onClick={this.closeModal}>X</button>
      <div class="login_f"><Login {...this.props}/></div>
    </Modal></div>);
    }
  }
}
export default withRouter(modal);
// if(this.state.loginModal)
// {
//   return (
//     <div>
//
// <a class="nav-link"  href="javascript:;" onClick={this.openModal}>Login</a>
//       <Modal
//         isOpen={this.state.modalIsOpen}
//         onAfterOpen={this.afterOpenModal}
//         onRequestClose={this.closeModal}
//         ariaHideApp={false}
//         style={customStylesLogin}
//         contentLabel="Example Modal"
//       >
//
//         <Login />
//        {/*<h4 class="toggle-sign-msg" onClick={this.showSignUpmodal.bind(this)}>create an account</h4>*/}
//         <div class="toggle-sign-msg"> <span class="toggle-sign-msg "> Do Not have an account? </span> <div class="link" onClick={this.showSignUpmodal.bind(this)}>Create Account</div></div>
//       </Modal>
//     </div>
//   );
// }
// if(this.state.signUpModal) {
// return (
//   <div >
//     <Modal
//       isOpen={this.state.modalIsOpen}
//       onAfterOpen={this.afterOpenModal}
//       onRequestClose={this.closeModal}
//       style={customStylesSignUp}
//       contentLabel="Example Modal"
//     >
//       <Signup changeModal={this.changeModal.bind(this)}/>
//      <div class="toggle-sign-msg">  Already a member? <div class="link"  onClick={this.showLoginModal.bind(this)}>Login</div> </div>
//     </Modal>
//   </div>
// );
// }
// if(this.state.phoneLogin) {
//   return (
//     <div>
//       {this.props.account=='vendor'?<a class="nav-link text-white"  style={{fontWeight:'bold',cursor:'pointer'}} onClick={this.openModal}>Register as a Vendor</a>:<button type="button" id="dropdownMenu1"  class="btn btn-white btn-login" onClick={this.openModal}>{this.props.tag=="services"?"Get Started":"Login"}  </button>}
//     <Modal
//     isOpen={this.state.modalIsOpen}
//     onAfterOpen={this.afterOpenModal}
//     onRequestClose={this.closeModal}
//     style={customStylesSignUp}
//     contentLabel="Example Modal"
//   >
//   <div class="close-btn" onClick={this.closeModal}> </div>
//     <h2  class="login-title pb-8"  ref={subtitle => this.subtitle = subtitle}>Login with Phone Number</h2>
//     <PhoneLogin role={this.props.account}/>
//   </Modal></div>);
//   }
