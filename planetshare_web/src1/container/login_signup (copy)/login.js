import React, { Component } from 'react';
import axios from 'axios';
import {LOGIN} from '../../url';
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
          console.log(response);
          if(response.data.success=="1" || response.data.success==1){
            localStorage.setItem('username',response.data.user_email)
            window.location.href='/';
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return (
      <div id="login" >
        <form  onSubmit={this.signinHandler}>
         <div class="form-group">
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
             <input type="password" class="form-control" id="pwd1" placeholder="Enter password" name="pswd" required />
              <span class="focus-border">  	<i></i></span>
        </div>
      </div>
          <div class="row">
              <div class="col-md-4"><label for="buyer">Buyer</label><input type="radio" name="role" id="buyer" value="buyer" required/></div>
              <div class="col-md-4"><label for="seller">Seller</label><input type="radio" name="role" id="seller" value="seller" required/></div>
              <div class="col-md-4"><label for="vendor">Vendor</label><input type="radio" name="role" id="vendor" value="vendor" required/></div>
          </div>
          <p class="forgot"><a href="#">Forgot Password?</a></p>

          <button type="submit" class="btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" > Log In</button>

        </form>

      </div>

    );
  }
}
export default Login;
