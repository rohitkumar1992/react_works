import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../../container/Login/login';
import Signup from '../../container/Signup/signup';
import PhoneLogin from '../../container/PhoneLogin/PhoneLogin';
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
      phoneLogin:false,
      phoneLoginOtp:false,
      openUrl:'',
      mobile_num:'',
      headers:'',
      response_user_id:''
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount()
  {
    this.setState({phoneLogin: true});
    // this.setState({openUrl:this.props.openUrl});
    // if(this.props.openUrl=='loginModal')
    // {
    //   this.setState({phoneLogin: true});
    // }
    // if(this.props.openUrl=='signUpModal')
    // {
    //   this.setState({signUpModal: true});
    // }
    // else {
    //   this.setState({loginModal: true});
    // }
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal=()=>{
    // if(this.state.openUrl=="signUpModal")
    // {
    //       this.setState({modalIsOpen: false,signUpModal:true,loginModal:false,phoneLogin:false,phoneLoginOtp:false});
    // }
    // if(this.state.openUrl=="loginModal")
    // {
    //       this.setState({modalIsOpen: false,signUpModal:false,loginModal:true,phoneLogin:true,phoneLoginOtp:false});
    // }
    // alert('hi')
     this.setState({modalIsOpen: false,signUpModal:false,loginModal:false,phoneLogin:true,phoneLoginOtp:false});
  }
  // showSignUpmodal()
  // {
  //   this.setState({signUpModal:true,loginModal:false,phoneLogin:false,phoneLoginOtp:false});
  // }
  // showLoginModal()
  // {
  //   this.setState({signUpModal:false,loginModal:true,phoneLogin:false,phoneLoginOtp:false});
  // }
  // phoneLogin()
  // {
  //   this.setState({phoneLogin:true,signUpModal:false,loginModal:false,phoneLoginOtp:false});
  // }
  // phoneLoginOtp()
  // {
  //   this.setState({phoneLogin:false,signUpModal:false,loginModal:false,phoneLoginOtp:true});
  // }
  changeModalLogin=(role,mobile_num,headers)=>{
    // if(role=="mobile")
    // {
    //     this.setState({phoneLogin:true,signUpModal:false,loginModal:false,phoneLoginOtp:false});
    // }
    if(role=="otp")
    {
        this.setState({phoneLogin:false,signUpModal:false,loginModal:false,phoneLoginOtp:true,mobile_num:mobile_num,headers:headers});
    }

  }
  changeModalOtp=(role,user_id)=>{
  if(role=="signup")
  {
      this.setState({phoneLogin:false,signUpModal:true,loginModal:false,phoneLoginOtp:false,response_user_id:user_id});
  }
}
  render() {

  if(this.state.phoneLogin) {
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
      <div class="login_f"><PhoneLogin changeModal={this.changeModalLogin.bind(this)}/></div>
    </Modal></div>);
    }
    if(this.state.phoneLoginOtp) {
      return (
        <div>
        <a class="nav-link"  href="javascript:;" onClick={this.openModal}>Login</a>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStylesSignUp}
        contentLabel="Example Modal"
      >  <button class="close" onClick={this.closeModal}>X</button>
        <div class="login_f"><PhoneLoginOtp changeModal={this.changeModalOtp.bind(this)} mobile_num={this.state.mobile_num} headers={this.state.headers} {...this.props}/></div>
      </Modal></div>);
      }
      if(this.state.signUpModal) {
      return (
        <div >
          <a class="nav-link"  href="javascript:;" onClick={this.openModal}>Login</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStylesSignUp}
            contentLabel="Example Modal"
          >  <button class="close" onClick={this.closeModal}>X</button>
            <div class="login_f"><Signup  headers={this.state.headers} user_id={this.state.response_user_id} {...this.props}/></div>
          </Modal>
        </div>
      );
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
