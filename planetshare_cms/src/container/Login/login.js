import React, { Component } from 'react';
import './login.css';
import logo from './logo.png';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import {LOGIN} from '../../url.js';
class Login extends Component {
formsubmit=(e)=>
{
  e.preventDefault();
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
          this.props.history.push('/Dashboard');
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
      <div class="limiter">
    		<div class="container-login100">
            			       <div class="center ">	<p style={{color:'black',fontSize:'26px'}}>Super Admin</p></div>
    			<div class="wrap-login100">
              <img src="img/bg-01.jpg"/>
    					<span class="login100-form-title-1">
    					</span>
    				  <form class="login100-form validate-form "   onSubmit={this.formsubmit}>
    					     <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
    						          <span class="label-input100">Email</span>
    						          <input class="input100" type="email" name="username"  id='email' placeholder="Enter Email"/>
    						          <span class="focus-input100"></span>
    					     </div>
        					<div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
              						<span class="label-input100">Password</span>
              						<input class="input100" type="password" name="pass"  id="password" placeholder="Enter password"/>
              						<span class="focus-input100"></span>
        					</div>

    					{/*<div class="flex-sb-m w-full p-b-30 mt-4">
    						<div class="contact100-form-checkbox">
    							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
    							<label class="label-checkbox100" for="ckb1">
    								Remember me
    							</label>
    						</div>
    						</div>*/}


      					<div class="container-login100-form-btn mt-5">
      						<button type="submit" class="login100-form-btn">
      							     Login
      						</button>
      					</div>
    				 </form>
    			</div>
    		</div>
    	</div>
      </div>
)
}
}
}
export default Login;
