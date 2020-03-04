import React, { Component } from 'react';
import './login.css';
import $ from 'jquery';
import axios from 'axios';
import {LOGIN,TAG} from '../../url.js';
class Login extends Component {
  constructor(props)
  {
    super(props);
  }
formsubmit(e)
{
    e.preventDefault();
    $('#err_msg').html('');
      var emailid=e.target.email.value;
      var password=e.target.password.value;
      axios.post(LOGIN, {
      email:emailid,
      password:password,
      tag:TAG
    })
    .then(response=>{
        if(response.data.success=='1'){
          localStorage.setItem('status','Y');
          localStorage.setItem('name',response.data.name);
          localStorage.setItem('planetshare_token',response.data.token);
          localStorage.setItem('email',response.data.email);
          localStorage.setItem('seller_id',response.data.seller_id);
          localStorage.setItem('user_id',response.data.user_id);
          $('#login_button').html('Loading....');
          //setTimeout(()=>this.props.history.push('/'),1500);
          setTimeout(()=>window.location.href='/',1000);

        }
        else {
          $('#err_msg').html('Invalid Credentials');
        }
    })
    .catch(function (error) {
      console.log(error);
    });
}
togglePass=(id,id2)=>{
var x = document.getElementById(id);
if (x.type === "password") {
 $('#'+id2).removeClass('fa fa-eye-slash');
 $('#'+id2).addClass('fa fa-eye');
 x.type = "text";
} else {
  $('#'+id2).removeClass('fa fa-eye');
  $('#'+id2).addClass('fa fa-eye-slash');
 x.type = "password";
}
}
  render() {
    return (
      <div>
      <div class="Login_main">
          <div class="login_container">
      <center>
      <div class="s_middle">
            <div id="s_login">
              <center><span id="err_msg" style={{color:'red',fontSize:'18px'}}></span></center>
              <form onSubmit={this.formsubmit}>

                <fieldset class="clearfix">

                  <p ><span class="fa fa-user"></span><input type="email" id="email" Placeholder="Email"name="email" required/></p>
                  <p>
                    <span class="fa fa-lock"></span>
                    <input type="password" id="password" Placeholder="Password" name="password" required/>
                    <span class="icon_eye" onClick={()=>this.togglePass('password','eyepass')}><i id="eyepass" class="fa fa-eye-slash" style={{color:'white'}}></i></span>
                  </p>

                   <div>
                                      {/*<span style={{width:'48%', textAlign:'left',  display:'inline-block'}}><a class="small-text" href="#">Forgot
                                      password?</a></span>*/}
                                      <span style={{width:'50%', textAlign:'right', marginLeft:'-50px', display:'inline-block'}}><button type="submit" value="Sign In" id="login_button">Sign In</button></span>
                                  </div>

                </fieldset>
      <div class="clearfix"></div>
              </form>

              <div class="clearfix"></div>

            </div>
            &nbsp;&nbsp;
            <div class="logo"><img src='/pay_logo.png'/>

                <div class="clearfix"></div>
            </div>

            </div>
      </center>
          </div>

      </div>
      </div>
)
}
}
export default Login;
