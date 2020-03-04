import React, { Component } from 'react';
import axios from 'axios';
import {REGISTER} from '../../url';
class Signup extends Component {
  signupHandler=(e)=>
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
        <div id="signup">

         {/*----------form start-------------*/}

           <form onSubmit={this.signupHandler}>
              <div class=" ">
                 {/*----------name-------------*/}
                  <div class="form-group">
                    <label for="name">NAME:</label>
                        <div class="inner-addon right-addon">
                          <span class="fa fa-user"> </span>
                          <input type="text" class="form-control" id="name" placeholder="Enter name" name="username" required/>
                          <span class="focus-border">  	<i></i></span>
                        </div>
                  </div>

                  {/*----------email-------------*/}

                  <div class="form-group">
                        <label for="email">EMAIL:</label>
                        <div class="inner-addon right-addon">
                          <span class="fa fa-envelope"> </span>
                          <input type="email" class="form-control" id="email1" placeholder="Enter email" name="email" required/>
                          <span class="focus-border">  	<i> </i></span>
                       </div>
                  </div>

                  {/*----------password----------------*/}

                  <div class="form-group">
                    <label for="pwd">PASSWORD:</label>
                      <div class="inner-addon right-addon">
                            <span class="fa fa-lock"></span>
                           <input type="password" class="form-control" id="pwd1" placeholder="Enter password" name="pswd" required/>
                            <span class="focus-border">  	<i></i></span>
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="repwd">REPASSWORD:</label>
                      <div class="inner-addon right-addon">
                          <span class="fa fa-lock"></span>
                          <input type="password" class="form-control" id="repwd1" placeholder="Enter repassword" name="repswd" required/>
                         <span class="focus-border">  	<i></i></span>
                     </div>
                  </div>
          </div>
          <div class="row">
              <div class="col-md-4"><label for="buyer">Buyer</label><input type="radio" name="role" id="buyer" value="buyer" required/></div>
              <div class="col-md-4"><label for="seller">Seller</label><input type="radio" name="role" id="seller" value="seller" required/></div>
              <div class="col-md-4"><label for="vendor">Vendor</label><input type="radio" name="role" id="vendor" value="vendor" required/></div>
          </div>
          <button type="submit" class=" mt-16 btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom">Submit</button>
      </form>
         {/*----------form end-------------*/}
</div>
    );
  }
}
export default Signup;
