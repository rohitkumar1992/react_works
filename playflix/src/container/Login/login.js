import React from 'react';
import Signup from '../../container/Signup/signup';
import PhoneLogin from '../../container/PhoneLogin/PhoneLogin';
import PhoneLoginOtp from '../../container/PhoneLogin/PhoneLoginotp';
import axios from 'axios'
class Login extends React.Component{
  state={
    signUp:false,
    phoneLogin:true,
    phoneLoginOtp:false,
    openUrl:'',
    mobile_num:'',
    token:'',
    response_user_id:''
  }
  componentDidMount()
  {
    // ade46788d77e90ed7e532ce83873716e
    // 2882019856
    // localStorage.setItem('token','5e4ba595fc7379577492eae26eedd746')
    // localStorage.setItem('userid',327)
    }
  openOTP=(mobile_num,token)=>{
  //  alert('hi')
    this.setState({phoneLoginOtp:true,phoneLogin:false,signUp:false,mobile_num:mobile_num,token:token})
  }
  openSignup=(response_user_id)=>{
    this.setState({phoneLoginOtp:false,phoneLogin:false,signUp:true,response_user_id:response_user_id})
  }
  openMobile=()=>{
      this.setState({phoneLoginOtp:false,phoneLogin:true,signUp:false,response_user_id:'',token:'',mobile_num:''})
  }
  render()
  {
    if(this.state.phoneLogin)
    {
      return(<div class="login_f"><PhoneLogin openOTP={this.openOTP.bind(this)} {...this.props} /></div>)
    }
    if(this.state.phoneLoginOtp)
    {
      return(<div class="login_f"><PhoneLoginOtp openSignup={this.openSignup.bind(this)} openMobile={this.openMobile.bind(this)} mobile_num={this.state.mobile_num} token={this.state.token} {...this.props}/></div>)
    }
    if(this.state.signUp)
    {
      return(<div class="login_f"><Signup openOTP={this.openOTP.bind(this)} mobile_num={this.state.mobile_num} token={this.state.token} user_id={this.state.response_user_id} {...this.props}/></div>)
    }

  }
}
export default Login;
