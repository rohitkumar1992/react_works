import React, { Component } from 'react';
import axios from 'axios';
// import {REGISTER} from '../../url';
class UserDetails extends Component {
  formSubmit=(e)=>
  {
    e.preventDefault();
    var name=e.target.username.value;
    var email=e.target.email.value;
    var phoneNumber=e.target.phoneNumber.value;
    console.log(name +"--"+email+"--"+phoneNumber);
    localStorage.setItem('username',name);
    window.location.href='/';
  }
  render() {
    return (
        <div >
           <form onSubmit={this.formSubmit}>
              <div class=" ">
                 {/*----------name-------------*/}
                  <div class="form-group">
                  <div class="fb-btn"><div class="fb-wrap"><i class="fb-icon"></i><span>Create Account with Mobile Number</span></div></div>
                    <label for="name">NAME:</label>
                        <div class="inner-addon right-addon">
                          <span class="fa fa-user"> </span>
                          <input type="text" class="form-control" id="name" placeholder="Enter name" name="username" required/>
                          <span class="focus-border">  	<i></i></span>
                        </div>
                  </div>
                  <div class="form-group">
                        <label for="email">EMAIL:</label>
                        <div class="inner-addon right-addon">
                          <span class="fa fa-envelope"> </span>
                          <input type="email" class="form-control" id="email1" placeholder="Enter email" name="email" required/>
                          <span class="focus-border">  	<i> </i></span>
                       </div>
                  </div>
                  <input type="hidden" value={this.props.phoneNumber} name="phoneNumber"/>
          </div>

          <button type="submit" class=" mt-16 btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom">Submit</button>
      </form>
         {/*----------form end-------------*/}
</div>
    );
  }
}
export default UserDetails;
