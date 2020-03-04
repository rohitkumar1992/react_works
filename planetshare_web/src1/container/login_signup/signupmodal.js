import React, { Component } from 'react';
import Signup from './signup';
import Login from './login';
class LoginSignup extends Component {
  const signinHandler=(e)=>{
      e.preventDefault();
      alert('hi');
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
