import React, { Component } from 'react';
import Signup from './signup';
import Login from './login';
import axios from 'axios';
import {LOGIN,REGISTER} from '../../url';
class LoginSignup extends Component {
  signinHandler(e)
  {
    e.preventDefault();
    // console.log(e.target.email.value +e.target.pswd.value);
    axios.post(LOGIN, {
          email:e.target.email.value,
          password:e.target.pswd.value,
          role_id:'2'
        })
        .then(response=>{
          if(response.data.success){
            localStorage.setItem('username',response.data.user_email)
            window.location.href='/';
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  signupHandler(e)
  {
    e.preventDefault();
    // var email=e.target.email.value;
    // var name=e.target.username.value;
    var password=e.target.pswd.value;
    var repassword=e.target.repswd.value;
    var role=e.target.role.value;
    var role_id='';
    // alert(email+"---"+name+"--"+"--"+password+"---"+repassword+"--"+role_id);
    if(password != repassword)
    {
        alert("password not matched");
          return false;
    }
    if(role ==  "seller")
    {
      role_id=3;
    }
     if(role ==  "buyer")
    {
      role_id=2;
    }
    if(role ==  "vendor" ){
      role_id=4;
    }
    axios.post(REGISTER, {
          email:e.target.email.value,
          name:e.target.name.value,
          password:e.target.pswd.value,
          repassword:e.target.repswd.value,
          role_id:role_id
        })
        .then(response=>{
          if(response.data.success)
          {
            window.location.href='/';
          }
          // ;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return (
      <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-md">
              <div class="modal-content pl-48 pr-48">
                <div class="modal-header">
                  <div class="col-12 col-sm-6 offset-md-3">
                    <a class="navbar-brand" href="#" class="img-responsive" style={{width: "100%"}}>
                      <img src="img/login-logo.png"  />
                    </a>
                  </div>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="form">
                  <p class="login-heading text-center">Your Video Any Where, Any Time</p>
                  <p class="section-paragraph text-center">Register or sign in below to access your comprehensive video solution</p>
                      {/*<Login clicked={this.signinHandler}/>*/}
                        {/*<Signup clicked={this.signupHandler}/>*/}
                        <Login clicked={this.signinHandler}/>
            </div>
          </div>
      </div>
  </div>
);
  }
}
export default LoginSignup;
// <ul class="tab-group">
//   <li class="tab active"><a href="#signup">Sign Up</a></li>
//   <li class="tab "><a href="#login">Log In</a></li>
// </ul>
// <div class="tab-content">
// <Signup />
// </div>
