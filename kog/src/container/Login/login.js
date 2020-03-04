import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {COUNTRYCODE,PARTNER_ID,LOGIN,UUID,SIGNUP} from '../../url';
import $ from 'jquery';
import Loader from 'react-loader-spinner';
import  nacl from 'tweetnacl'
import utils from'tweetnacl-util';
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
 const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Login extends React.Component{
  state={isLogin:true,isSignup:false,isLoading:false,startDate:new Date}
  componentDidMount()
  {
    this.props.history.push('/');
  }
  encryptPassword=(data)=>{
    const encodeBase64 = utils.encodeBase64
    // Our nonce must be a 24 bytes Buffer (or Uint8Array)
    const nonce = nacl.randomBytes(24)
    // Our secret key must be a 32 bytes Buffer (or Uint8Array)
    const secretKey = Buffer.from('useonlymysecretkeyonplanetcast17', 'utf8')
    // Make sure your data is also a Buffer of Uint8Array
    const secretData = Buffer.from(`${data}`, 'utf8')
    const encrypted = nacl.secretbox(secretData, nonce, secretKey)
    // We can now store our encrypted result and our nonce somewhere
    const result = `${encodeBase64(nonce)}:${encodeBase64(encrypted)}`
    return result
  }
  handleChange(value) {
   this.setState({startDate:value})
   }

   formLogin=(email,pass)=>{
          var formData=new FormData()
         formData.append('country',COUNTRYCODE);
         formData.append('partnerid',PARTNER_ID);
         formData.append('os','linux');
         formData.append('uuid',UUID);
         formData.append('name','web');
         formData.append('type','web');
         formData.append('authprovider','web');
         formData.append('email',email);
         formData.append('userpassword',pass);
         axios.post(LOGIN,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
           if(response.status==200)
           {
             toast(response.data.msg,{ transition: Zoom,});
             if(response.data.status==1 || response.data.status=="1")
             {
               //console.log(response.data.userid);
               this.setState({isLoading:true});
               localStorage.setItem('userid',response.data.userid)
               setTimeout(()=>this.props.history.push('/'),1000)

             }
           }
         }).catch((error)=>{

         })
   }
  formSubmit=(e,role)=>
  {
    e.preventDefault();
    $('#signup_error').html('')
    $('#login_error').html('')
    var formData=new FormData()
      formData.append('country',COUNTRYCODE);
      formData.append('partnerid',PARTNER_ID);
      formData.append('os','linux');
      formData.append('uuid',UUID);
      formData.append('name','web');
      formData.append('type','web');
      formData.append('authprovider','web');
    if(role=="login")
    {
        var lemail=e.target.lemail.value.trim();
        var lpass=e.target.lpass.value.trim();
        var pass=this.encryptPassword(lpass)
        formData.append('email',lemail);
        formData.append('userpassword',pass);
        axios.post(LOGIN,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
          if(response.status==200)
          {
            toast(response.data.msg,{ transition: Zoom,});
            if(response.data.status==1)
            {
              localStorage.setItem('userid',response.data.userid)
              setTimeout(()=>this.props.history.push('/'),1000)
              this.setState({isLoading:true});
            }
          }
        }).catch((error)=>{

        })
    }
    if(role=="register")
    {
      var dob=this.state.startDate.toLocaleDateString().split('/');
      var dobarray=[]
      dobarray.push(dob[2]);
      dobarray.push(dob[0])
      dobarray.push(dob[1])
      var DOB=dobarray.join('/')
      var semail=e.target.semail.value.trim();
      var spass=e.target.spass.value.trim();
      var scpass=e.target.scpass.value.trim();
      var sname=e.target.sname.value.trim();
      if(semail==''|| spass=='' || sname=='' || DOB=='')
      {
        $('#signup_error').html("All fields must be filled");
        return false;
      }
      if(spass!=scpass)
      {
        $('#signup_error').html("Password doesn't matched");
        return false;
      }
      var sPass=this.encryptPassword(spass)
      formData.append('dob','1996/03/22');
      formData.append('email',semail);
      formData.append('password',sPass);
      formData.append('Username',sname);
      formData.append('dob',DOB);
      axios.post(SIGNUP,formData,{headers:{'token':localStorage.getItem('token')}}).then((response)=>{
        if(response.status==200)
        {
          toast(response.data.Message,{ transition: Zoom,});
          if(response.data.status==1)
          {
            //this.setState({isLoading:true})
            this.formLogin(semail,sPass);
          }
        }
      }).catch((error)=>{

      })
    }
  }
   togglePass=(id)=>{
  var x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
  render()
  {

    if(!this.state.isLoading)
    {
    return(<div class="root">
    <ToastContainer autoClose={2000}/>
        <div class="login_f">
            <div class="login_signup">
                <div class="popup_l">
                  <img src="images/logo.png" alt="" />
                </div>
                {this.state.isLogin &&
                  <form onSubmit={(e)=>this.formSubmit(e,'login')}>
                      <div class="fields">
                          <h2>Log In</h2>
                          <div class="inputbox">
                              <label>Email</label>
                              <input type="email" placeholder="Your email" alt="" name="lemail" required/>
                          </div>
                          <div class="inputbox">
                              <label>Password</label>
                              <input id="password-field" type="password" placeholder="Password" name="lpass" alt="" required/>
                              {/*<i toggle="#password-field" class="fa vp fa-eye" aria-hidden="true" onClick={()=>this.togglePass('password-field')}></i>*/}
                          </div>
                          {/*<div class="inputbox check">
                              <input id="remember" type="checkbox" alt="" />
                              <label for="remember">Remember me</label>
                          </div>*/}
                      </div>
                      <div class="signup_btn text-center">
                        <p onClick={()=>this.setState({isLogin:false,isSignup:true})}>Create An Account</p>
                      </div>
                      <span class="valid_error"  id="login_error"></span>
                      <div class="buttons">
                          <button type="submit">Log in</button>
                      </div>
                  </form>
                }
              {this.state.isSignup &&
                  <form onSubmit={(e)=>this.formSubmit(e,'register')}>
                      <div class="fields">
                          <div class="inputbox">
                              <label>Name</label>
                              <input type="text" placeholder="Your name" alt=""  name="sname" required/>
                          </div>
                          <div class="inputbox">
                              <label>Email</label>
                              <input type="email" placeholder="Your email" alt=""  name="semail" required/>
                          </div>
                          <div class="inputbox">
                              <label>Password</label>
                              <input id="rpassword" type="password" placeholder="Password" alt=""   name="spass" required/>
                              {/*<i toggle="#password" class="fa vp fa-eye" aria-hidden="true" onClick={()=>this.togglePass('rpassword')}></i>*/}
                          </div>
                          <div class="inputbox">
                              <label>Confirm Password</label>
                              <input id="confirm_pass" type="password" placeholder="Confirm Password" alt=""  name="scpass" required/>
                              {/*<i toggle="#confirm_pass" class="fa vp fa-eye" aria-hidden="true" onClick={()=>this.togglePass('confirm_pass')}></i>*/}
                          </div>
                          {/*<div class="inputbox check">
                              <input id="remember" type="checkbox" alt="" />
                              <label for="remember">I agree all statements in <a href="javascript:;">Terms of service</a></label>
                          </div>*/}
                          <div class="inputbox">
                             <label>DOB</label>
                              <DatePicker
                                 selected={this.state.startDate}
                                 onChange={(value, e) => this.handleChange(value, e)}
                                 dateFormat="yyyy/MM/dd"
                                 showYearDropdown={true}
                                 showMonthDropdown={true}
                               />
                          </div>
                      </div>
                      <div class="signup_btn text-center">
                        <p onClick={()=>this.setState({isLogin:true,isSignup:false})}>Already a member</p>
                      </div>
                      <span class="valid_error" id="signup_error"></span>
                      <div class="buttons">
                          <button type="submit">Register</button>
                      </div>
                  </form>
                }
            </div>
        </div>
      </div> )
  }
  else {
    return(<div class="root">
        <div class="login_f">
            <div class="login_signup text-center">
                <div class="popup_l">
                  <img src="images/logo.png" alt="" />
                </div>
                    <Loader
                        type="Rings"
                        color="#f79e1c"
                        height={100}
                        width={100}

                     />
                     <p>Signing In ,Please Wait</p>
                   </div>
                  </div>
                </div>)
  }
}
}
export default Login;
