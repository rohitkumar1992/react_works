import React, { Component } from 'react';
import axios from 'axios';
import './loginCSS.css';
import {withRouter} from 'react-router-dom';
import {SOCIALLOGIN,LOGIN} from '../../url';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
class Login extends Component {
  signinHandler=(e)=>
  {
    e.preventDefault();
    axios.post(LOGIN, {
          email:e.target.email.value,
          password:e.target.pswd.value,
          role_id:'2'
        })
        .then(response=>{
          if(response.data.success=="1" || response.data.success==1){
            localStorage.setItem('username',response.data.user_email)
            localStorage.setItem('AccountId',response.data.account_id);
            localStorage.setItem('cartvalue',0);
            localStorage.setItem('userid',response.data.user_id);
            var redirect_url=this.props.redirect_url;
            if(this.props.redirect_tag=="services")
            {
              console.log(this.props.redirect_url);
              this.props.history.push(redirect_url);
            }
            else {
            window.location.href='/';
          }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
responseFacebook = (response) => {
  console.log(response);
  var name=response.name,email=response.email,picture=response.picture.data.url,Id=response.id;
  this.socialLogin(name,email,picture,Id,'Facebook');
}
responseGoogle = (response) => {
  console.log(response);
  var name=response.w3.ig,email=response.profileObj.email,picture=response.profileObj.imageUrl,Id=response.googleId;
      this.socialLogin(name,email,picture,Id,'Google');
}
componentClicked =()=>{
}
  socialLogin=(name,email,picture,id,provider)=>{
  axios.post(SOCIALLOGIN, {
        user_name:name,
        user_email:email,
        provider_id:id,
        provider_name:provider,
        profile_pic:picture
      })
      .then(response=>{
        if(response.data.email!=''){
          localStorage.setItem('username',response.data.email);
          localStorage.setItem('AccountId',response.data.AccountId);
          localStorage.setItem('cartvalue',0);
          localStorage.setItem('userid',response.data.id);
          window.location.href='/';
        }

      })
      .catch(function (error) {
        console.log(error);
      });
}
  render() {

        return (
          <div id="login">
            <form  onSubmit={this.signinHandler}>
             <div class="col-12 col-sm-12 col-md-10 offset-md-1">
             <button class="btn btn-md btn-phone btn-block text-uppercase text-sm btn-padding " type="button" onClick={this.props.clicked}>Login with phone number</button>

             </div>


             <hr class="style-four" />
             <div class="form-group pt-8">
              <p class="login-heading text-center">Your Video Any Where, Any Time</p>

          <label for="email">EMAIL:</label>
             <div class="inner-addon right-addon">
                    <span class="fa fa-envelope"></span>
                 <input type="email" class="form-control effect-7" id="email1" placeholder="Enter email" name="email" required/>
                  <span class="focus-border">  	<i></i></span>
           </div>
          </div>

          <div class="form-group">
          <label for="pwd">PASSWORD:</label>
            <div class="inner-addon right-addon">
                    <span class="fa fa-lock"></span>
                 <input type="password" class="form-control effect-7" id="pwd1" placeholder="Enter password" name="pswd" required />
                  <span class="focus-border">  	<i></i></span>
            </div>
          </div>


              <button type="submit" class="btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" > Log In</button>
                <div class="col-md-12 col-sm-12 mx-auto text-center"><p class="forgot mx-auto"><a href="#">Forgot Password?</a></p></div>

            </form>

          </div>


    );
  }
}
export default withRouter(Login);
