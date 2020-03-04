import React from 'react';
import OtpInput from "react-otp-input";
import axios from 'axios';
import {LOGIN,COUNTRYCODE,PARTNER_ID,GET_TOKEN,USERID,UUID} from '../../url';
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
  import Loader from 'react-loader-spinner';
  import $ from 'jquery';
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast,cssTransition} from 'react-toastify';
  const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: 750,
  });
class PhoneLoginOtp extends React.Component{
  state={OTP:'',otpShow:'',warning:false,isSubmit:false,waitLogin:false,timer:30,intervalId:''}
  componentDidMount()
  {

      var intervalId =setInterval(this.startTimer, 1000);
      this.setState({intervalId: intervalId});
  }
  startTimer=()=>{
  if(this.state.timer>0)
      {
    this.setState({timer:this.state.timer-1})
  }
  else {
     clearInterval(this.state.intervalId);
  }
 }
 componentDidUnMount()
 {
   clearInterval(this.state.intervalId);
 }
  formSubmit=async (e)=>{
    e.preventDefault();
     clearInterval(this.state.intervalId);
    this.setState({isSubmit:true})
    var formData=new FormData();
    formData.append('country',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('os','linux');
    formData.append('uuid',UUID);
    formData.append('tag','verify');
    formData.append('name','web');
    formData.append('type','web');
    formData.append('mobile',this.props.mobile_num);
    formData.append('authprovider','web');
    formData.append('otp',this.state.OTP);
    let response= await axios.post(LOGIN,formData,{headers:{'token':this.props.token}});
     //console.log(response);
      if(response.data.status=='1')
      {
      this.props.openSignup(response.data.userid)
      }
      if(response.data.status=='2'){
        localStorage.setItem('userid',response.data.userid)
        localStorage.setItem('token',this.props.token)
        this.setState({waitLogin:true})
    setTimeout(()=>this.props.history.push('/'),2000);
      }
      else{
        this.setState({warning:true,isSubmit:false})
      }

  }
  handleChange=(otp)=>{
     if (otp.toString().length<=6)
     {
      this.setState({OTP:otp.toString()})}
     }
     sendOTP=()=>{
       clearInterval(this.state.intervalId);
       var formData=new FormData();
       formData.append('userid',USERID);
       formData.append('country',COUNTRYCODE);
       formData.append('partnerid',PARTNER_ID);
       formData.append('os','linux');
       formData.append('uuid',UUID);
       formData.append('tag','generate');
       formData.append('name','web');
       formData.append('type','web');
       formData.append('mobile',this.props.mobile_num);
       formData.append('authprovider','web');
       axios.post(LOGIN,formData,{
           headers: {
             'token': this.props.token
           }
         }).then((response)=>{
           if(response.data.status==1)
           {
              toast("OTP has been send",{ transition: Zoom,});
             this.setState({timer:30},function(){
              var intervalId =setInterval(()=>this.startTimer(), 1000);
              this.setState({intervalId: intervalId});
             })
           }
         }).catch((error)=>{
           console.log(error);
         })
     }
  render()
  {
    if(!this.state.waitLogin)
    {
    return(<div class="mobnum mobotp" id="mobile_number">
    <ToastContainer autoClose={1000}/>
    <div class="popup_l">
      <img src="images/popup_logo.png" alt="" />
    </div>
    <form  onSubmit={this.formSubmit}>
        <div class="fields phn" style={{minWidth: "275px"}}>
            <h2>OTP Verification!</h2>
            <p class="otp">Enter the OTP you received to <span>{this.props.mobile_num}</span></p>
            <p style={{color:'red',cursor:'pointer'}} onClick={()=>{this.props.openMobile()}}>Signin with different number</p>
            {/*<div class="field otp">
              <div class="inputbox">
                <span><input type="text" alt="" /></span>
                <span><input type="text" alt="" /></span>
                <span><input type="text" alt="" /></span>
                <span><input type="text" alt="" /></span>
                <span><input type="text" alt="" /></span>
                <span><input type="text" alt="" /></span>
              </div>
            </div>
            <div class="otptime">
              <a href="javascript:;" class="backbtn">Resend OTP</a>
              <span>00:60</span>
              </div>*/}
              {/*<input type="text" name="mycode" id="pincode-input1"/>*/}
              <div>
                   <OtpInput
                     onChange={(otp) =>this.handleChange(otp)}
                     numInputs={6}
                     isInputNum={true}
                     value={this.state.OTP}
                     separator={<span>-</span>}
                     shouldAutoFocus={true}
                     inputStyle={{width:'45px',color:'black'}}
                   />
                 </div>
                 <div class="resendotp">
                <span class="timer">00:00:{this.state.timer}</span>
                {this.state.timer==0 && <button type="button" class="btn btn-resend" onClick={()=>this.sendOTP()}>Resend OTP</button>}
               </div>
               <p class="signotp" onClick={()=>{this.props.openMobile()}}><span>Signin with different number</span></p>
        </div>
        {this.state.warning && <span class="valid_error" style={{color:'red'}}>Incorrect OTP</span>}
        
          {!this.state.isSubmit && <div class="buttons">
            <button type="submit" disabled={(this.state.OTP.length)==6?false:true}>Continue</button>
        </div>}
        {this.state.isSubmit && <div class="buttons">
            <button type="submit" disabled>Loading....</button>
        </div>}
        <div class="clearfix"></div>
    </form>
    </div>)
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
export default PhoneLoginOtp;
