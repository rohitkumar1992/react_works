import React from 'react';
import axios from 'axios';
import {LOGIN,COUNTRYCODE,PARTNER_ID,GET_TOKEN,USERID,UUID,LOGOUT} from '../../url';
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import {MobileCode} from '../countrycode'
 import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class PhoneLogin extends React.Component{
  state={
    mobile_num:'',isSubmit:false,device_info:[],user_id:''
  }
  openNav=()=> {
document.getElementById("myNav_sell").style.height = "100%";
}

closeNav=()=> {
document.getElementById("myNav_sell").style.height = "0%";
}
componentDidMount()
{
  document.getElementById("myNav_sell").style.height = "0%";
}
  formSubmit=(e)=>{
    e.preventDefault();
    if(e.target.mobile_num.value.trim()=='' || e.target.mobile_num.value.trim().length!=10)
    {
      toast("Mobile Number Must Be Of 10 Digit",{ transition: Zoom,});
      return false
    }
    $('#mob_num').prop('disabled', true);
    this.setState({isSubmit:true});
      this.getToken(e.target.mobile_num.value.trim());
  }
  getToken=(mobile_num)=>{
    var formData1=new FormData();
    formData1.append('partnerid',PARTNER_ID);
    axios.post(GET_TOKEN,formData1).then((response)=>{
        if(response.status=='200'){
          this.setState({token:response.data.Token},function(){
            this.sendOTP(mobile_num,response.data.Token)
          })
        }
        else{
          $('#mob_num').prop('disabled', false);
          this.setState({isSubmit:false});
        }
      }).catch((error)=>{
        console.log(error);
      })
  }
  sendOTP=(mobile_num,token)=>{
    var formData=new FormData();
    formData.append('userid',USERID);
    formData.append('country',COUNTRYCODE);
    formData.append('partnerid',PARTNER_ID);
    formData.append('os','linux');
    formData.append('uuid',UUID);
    formData.append('tag','generate');
    formData.append('name','web');
    formData.append('type','web');
    formData.append('mobile',mobile_num);
    formData.append('authprovider','web');
    axios.post(LOGIN,formData,{
        headers: {
          'token': token
        }
      }).then((response)=>{
        //console.log(response);
        if(response.data.status=='4'){
          $('#mob_num').prop('disabled', false);
          this.setState({isSubmit:false});
          console.log(response.data);
          //toast(response.data.msg,{ transition: Zoom,});

          this.setState({device_info:response.data.Device_info,user_id:response.data.userid},function(){this.openNav()})
          return false;
        }
        else {
            this.props.openOTP(mobile_num,token)
        }
      }).catch((error)=>{
        console.log(error);
      })
  }
  onChangeInput=(e)=>{
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({mobile_num: e.target.value})
      }
   }
   logout=(uuid)=>{
     var formData=new FormData();
     formData.append('userid',this.state.user_id);
     formData.append('countrycode',COUNTRYCODE);
     formData.append('partnerid',PARTNER_ID);
     formData.append('uuid',uuid);
     axios.post(LOGOUT,formData).then((response)=>{
       if(response.data.status==0)
       {
         console.log(response);
         toast(response.data.msg,{ transition: Zoom,});
         $('#uid_'+uuid).html('Logged Out');
       }
     }).catch((error)=>{
       console.log(error);
     })
   }
  render()
  {
    return(<div  id="mobile_number" class="mobnum">
      <ToastContainer autoClose={2000}/>
      <div id="myNav_sell" class="overlay_sell">
          <a href="javascript:void(0)" class="closebtn_sell" onClick={()=>this.closeNav()}>&times;</a>
          <div class="avail_serv_list">
              <ul class="row">
                {this.state.device_info.length>0 && this.state.device_info.map((res,key)=>{
                  return(<li class="col-md-3 col-sm-4">
                    <div class="box">
                      <div class="img">
                        <img src="images/face8.jpg" alt="" />
                        <span class="name">{res.device_name}</span>
                      </div>
                      <p onClick={()=>this.logout(res.device_uuid)} style={{cursor:'pointer'}} id={`uid_${res.device_uuid}`}>Logout</p>
                    </div>
                  </li>)
                })}
              </ul>
          </div>
        </div>

    <div class="popup_l">
      <img src="images/popup_logo.png" alt="" />
    </div>
    <form onSubmit={this.formSubmit}>
        <div class="fields phn">
            <h2>Your Phone!</h2>
            <div class="field">
              <label><span>Phone Number</span></label>
              <div class="inputbox">
                  <div class="select_lang">
                    <select name="mobcode">

                      {MobileCode.map((res,key)=>{
                        return(<option values={res.dial_code} class="option" key={key} selected={COUNTRYCODE==res.code?true:false}>{res.dial_code}</option>)
                      })}
                      </select>
                  </div>
                  <input type="text" id="mob_num" placeholder="Enter Number" alt="" name="mobile_num"   maxlength="10" value={this.state.mobile_num} onChange={this.onChangeInput}/>
              </div>
            </div>
            <p>A 6 digit OTP will be sent to verify your mobile number!</p>
        </div>
        {!this.state.isSubmit && <div class="buttons">
            <button type="submit" >Continue</button>
        </div>}
        {this.state.isSubmit && <div class="buttons">
            <button type="submit" disabled>Loading...</button>
        </div>}
        <div class="clearfix"></div>
    </form>
    </div>)
  }
}
export default PhoneLogin;
