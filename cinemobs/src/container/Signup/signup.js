import React from 'react';
import axios from 'axios';
import {LOGIN,COUNTRYCODE,PARTNER_ID,USER_DETAILS} from '../../url';
 import Loader from 'react-loader-spinner'
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 import $ from 'jquery'
class Signup extends React.Component{
  state={
    isSubmit:false,waitLogin:false
  }
  formSubmit=(e)=>{
    //this.props.changeModal('mobile')
    e.preventDefault();
    this.setState({isSubmit:true})
    var fname=e.target.fname.value.trim();
    var lname=e.target.lname.value.trim();
    var email=e.target.email.value.trim();
    var formData=new FormData();
    formData.append('userid',this.props.user_id);
    // formData.append('country',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('email',email);
    formData.append('fname',fname);
    formData.append('lname',lname);
    formData.append('authuid','32543654');
    formData.append('authprovider','facebook /google/application');
    axios.post(USER_DETAILS,formData,{
        headers: {
          'token':this.props.headers
        }
      }).then((response)=>{
        //console.log(response);
        if(response.data.status==1)
        {
          localStorage.setItem('userid',this.props.userid);
          this.setState({waitLogin:true})
          setTimeout(()=>this.props.history.push('/'),2000);
        }
        else{
          alert('Error')
        }

      }).catch((error)=>{
        console.log(error);
      })
  }
  render()
  {
    if(!this.state.waitLogin)
    {
    return(<div id="login_form">
    <div class="popup_l">
      <img src="images/popup_logo.png" alt="" />
    </div>
    <form onSubmit={this.formSubmit}>
        <div class="fields">
            <div class="field">
              <label>First Name</label>
              <div class="inputbox">
                  <input type="text" placeholder="First Name" alt="" name="fname"/>
              </div>
            </div>
            <div class="field">
              <label>Last Name</label>
              <div class="inputbox">
                  <input type="text" placeholder="Last Name" alt="" name="lname"/>
              </div>
            </div>
            <div class="field">
              <label>Email</label>
              <div class="inputbox">
                  <input type="email" placeholder="Email" alt="" name="email"/>
              </div>
            </div>
        </div>
        {!this.state.isSubmit && <div class="buttons">
            <button type="submit">Sign up with Email</button>
        </div>}
        {this.state.isSubmit && <div class="buttons">
            <button type="submit" disabled>Loading...</button>
        </div>}
        <div class="or">
          <span>Or</span>
        </div>
        <div class="social_btn">
          <a href="javascript:;" class="btn btn_fb"><img src="images/icon_fb.png" alt="" /> Facebook</a>
          <a href="javascript:;" class="btn btn_g"><img src="images/icon_google.png" alt="" /> Google</a>
        </div>
        <div class="clearfix"></div>
    </form></div>)
  }
  else {
    return(<div class="mobnum login_load" id="mobile_number">
    <div class="popup_l">
      <img src="images/popup_logo.png" alt="" />
    </div>
    <Loader
        type="Rings"
        color="#9012cd"
        height={100}
        width={100}
     />
     <p>Signing In ,Please Wait</p>
  </div>)
  }
  }
}
export default Signup;
