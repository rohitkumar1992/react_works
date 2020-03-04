import React, { Component } from 'react';
import axios from 'axios';
import {PHONELOGIN,VERIFYOTP} from '../../url';
import './phonelogin.css';
import $ from 'jquery';
import PinInput from 'react-pin-input';
import UserDeatilsP from '../../component/login_with_phone/userdetails.js';
class PhoneLogin extends Component {
  state={
    phoneNumber:'',
    otp_box:false,
    details_box:false,
    phoneNumber:''
  }
  getPhoneNumber=(e)=>
  {
    var phoneNumber=e.target.value;
    if(e.target.value.length=='10' || e.target.value.length==10){
      axios.post(PHONELOGIN, {
        mobile:phoneNumber
          })
          .then(response=>{
            this.setState({otp_box:true,phoneNumber:phoneNumber});
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  }
  submitOtp=(value)=>
  {
    axios.post(VERIFYOTP, {otp:value
        })
        .then(response=>{
          if(response.data.success=='1' || response.data.success==1)
          {
                $("#btnSubmit").show();
          }
          else {
            $('#error_msg').html('<p>Invalid OTP</p>');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  changeOtp = () =>{
    $('#error_msg').html('');
  }
  nextpage = () =>{
    console.log('yes');
    this.setState({details_box:true,otp_box:false})
  }
  render() {
    if(!this.state.details_box)
    {
    return (
        <div id="signup">
           <form onSubmit={this.signupHandler}>
              <div class=" ">
                  <div class="form-group">
                    <label for="name">Enter Mobile Number:</label>
                        <div class="inner-addon right-addon">
                          <span class="fa fa-user"> </span>
                          <input type="text" class="form-control effect-7" id="name" placeholder="Enter name" name="username" required maxlength="10" onChange={this.getPhoneNumber}/>
                          <span class="focus-border">  	<i></i></span>
                        </div>
                  </div>
                  <div class="confirmation_code split_input large_bottom_margin" data-multi-input-code="true" id="otp_box" style={{display:'none'}}>
              			<div class="confirmation_code_group">
          					<div class="split_input_item input_wrapper"><input type="text" class="inline_input effect-7" maxlength="1"/> <span class="focus-border">  	<i></i></span></div>
          					<div class="split_input_item input_wrapper"><input type="text" class="inline_input effect-7" maxlength="1"/> <span class="focus-border">  	<i></i></span></div>
                    <div class="split_input_item input_wrapper"><input type="text" class="inline_input effect-7" maxlength="1"/> <span class="focus-border">  	<i></i></span></div>
                    <div class="split_input_item input_wrapper"><input type="text" class="inline_input effect-7" maxlength="1"/> <span class="focus-border">  	<i></i></span></div>
          					</div>
                  </div>
                  {this.state.otp_box && <PinInput
                    length={4}
                    initialValue=""
                    secret
                    onChange={(value, index) => {this.changeOtp()}}
                    type="numeric"
                    id="otp_box"
                    style={{padding: '10px',display:'flex',flex:'wrap'}}
                    inputStyle={{borderColor: 'red'}}
                    inputFocusStyle={{borderColor: 'blue'}}
                    onComplete={(value, index) => {this.submitOtp(value)}}
                  />}
                  </div>
                  <span id="error_msg" class="error_msg"></span>
          <button type="button" class=" mt-16 btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" id="btnSubmit"  onClick={this.nextpage} style={{display:'none'}}>Next</button>
      </form>
    </div>
    );
  }
  else {
    return(<div>
      <UserDeatilsP phoneNumber={this.state.phoneNumber}/>
      </div>);
  }
  }
}
export default PhoneLogin;
