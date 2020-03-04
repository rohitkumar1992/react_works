import React, { Component } from 'react';
import './login.css';
import logo from './logo.png';
import $ from 'jquery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,withRouter,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import {LOGIN} from '../../url.js';
class Login extends Component {
  constructor(props)
  {
    super(props);
  }
formsubmit(e)
{
    e.preventDefault();
    $('#err_msg').html('');
      var emailid=document.getElementById('email').value;
      var password=document.getElementById('password').value;
      axios.post(LOGIN, {
      email:emailid,
      password:password
    })
    .then(response=>{
        if(response.data.success=='1'){
          localStorage.setItem('status','Y');
          localStorage.setItem('name',response.data.name);
          localStorage.setItem('token',response.data.access_token);
          localStorage.setItem('email',emailid);
          $('#login_button').html('Loading....');
           //setTimeout(()=>this.props.history.push('/'),1500);
          setTimeout(()=>window.location.href='/',1000);
  ;
        }
        else {
          $('#err_msg').html('Invalid Credentials');
        }
    })
    .catch(function (error) {
      console.log(error);
    });
}
  render() {
    if(localStorage.getItem('token'))
    {
      return <Redirect to='/Dashboard' />
    }
    else {
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

                  <p ><span class="fa fa-user"></span><input type="email" id="email" Placeholder="Username" required/></p>
                  <p><span class="fa fa-lock"></span><input type="password" id="password" Placeholder="Password" required/></p>

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
            <div class="logo"><img src={logo}/>

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
}
export default Login;
