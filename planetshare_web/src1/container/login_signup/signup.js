import React, { Component } from 'react';
import axios from 'axios';
import {withRouter,Link} from 'react-router-dom';
import {REGISTER,LOGIN,SOCIALLOGIN} from '../../url';
import $ from 'jquery';
import ProgresLoader from '../../component/progress_loader/progress_loader';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './signupCSS.css'
class Signup extends Component {
  state={
    progressLoader:false,
    role_name:'',
    privacyPolicy:false
  }
  componentDidMount()
  {
    this.setState({role_name:this.props.role});
    if(this.props.role=="role_vendor" && localStorage.getItem('userid')!=null)
    {
      this.props.history.push('/dashboard/vendordetails')
    }
    if(this.props.role=="role_seller" && localStorage.getItem('userid')!=null)
    {
      this.props.history.push('/dashboard/sellerdetails')
    }
  }
  signupHandler=(e)=>
  {
    e.preventDefault();
    var role_name=this.state.role_name;
    $('#error_msg_'+role_name).html('');
    var email=e.target.email.value;
    // var name=e.target.username.value;
    var password=e.target.pswd.value;
    var repassword=e.target.repswd.value;
    var name=e.target.name.value;
    var pass_match=/(?=[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[@\!#\$\^%])(?=.*[A-Z]).{8,}/;
    var name_match=/^[A-Za-z ]+$/;
    if(!name.match(name_match))
    {
        $('#error_msg_'+role_name).html('Name Must Be In Characters');
        return false;
    }
    // if(!password.match(pass_match))
    // {
    //    $('#error_msg_'+role_name).html('Password Must Be In Requested Format');
    //   return false;
    // }
        if(password!=repassword)
        {
            $('#error_msg_'+role_name).html('Password Should Be Same ');
            return false;
        }

      axios.post(REGISTER, {
          email:e.target.email.value,
          name:e.target.name.value,
          password:e.target.pswd.value,
          repassword:e.target.repswd.value,
          role_id:'2'
        })
        .then(response=>{
          if(response.data.success==1 || response.data.success=='1')
          {
            this.signinHandler(email,password);
          }
          if(response.data.success==0|| response.data.success=='0')
          {
              $('#error_msg_'+role_name).html('Email Id Already Exist');
              return false;
          }
          // ;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  signinHandler=(email,password)=>
  {
    this.setState({progressLoader:true});
    axios.post(LOGIN, {
          email:email,
          password:password,
          role_id:'2'
        })
        .then(response=>{
          if(response.data.success=="1" || response.data.success==1){
            localStorage.setItem('username',response.data.user_email);
            localStorage.setItem('Name',response.data.name);
            localStorage.setItem('AccountId',response.data.account_id);
            localStorage.setItem('cartvalue',0);
            localStorage.setItem('userid',response.data.user_id);
            var redirect_url=this.props.redirect_url;
            if(this.props.role=="services")
            {
              setTimeout(()=>this.props.history.push(redirect_url),2000);
              return false;
            }
              if(this.props.role=="role_vendor")
              {

                setTimeout(()=>this.props.history.push('/dashboard/vendordetails'),2000);
                return false;
              }
              if(this.props.role=="role_seller")
              {
                setTimeout(()=>this.props.history.push('/dashboard/sellerdetails'),2000);
                return false;
              }
              else {
                setTimeout(()=>this.props.history.push('/web'),2000);
                return false;
              }

          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  responseFacebook = (response) => {
    console.log(response);
    if(response.name==null)
    {
      console.log('false');
      return false;
    }
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
  failure=()=>{
    // this.props.history.push('/web');
  }
    socialLogin=(name,email,picture,id,provider)=>{
      this.setState({progressLoader:true});
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
            localStorage.setItem('Name',response.data.name);
            localStorage.setItem('AccountId',response.data.AccountId);
            localStorage.setItem('cartvalue',0);
            localStorage.setItem('userid',response.data.id);
            var redirect_url=this.props.redirect_url;
            if(this.props.role=="services")
            {
              setTimeout(()=>this.props.history.push(redirect_url),2000);
              return false;
            }
            if(this.props.role=="role_vendor")
            {
              setTimeout(()=>this.props.history.push('/dashboard/vendordetails'),2000);
              return false;
            }
            if(this.props.role=="role_seller")
            {
              setTimeout(()=>this.props.history.push('/dashboard/sellerdetails'),2000);
              return false;
            }
            else{
              setTimeout(()=>this.props.history.push('/web'),2000);
              return false;
            }
          }
          else {
                this.setState({progressLoader:false});
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return (
      <div>

        <div id="signup"  class="login_form">

         {/*----------form start-------------*/}

           <form onSubmit={this.signupHandler}>
           <div class="col-12 col-sm-12 col-md-10 offset-md-1">
                    {/* <FacebookLogin
                appId="622122471548659"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="btn-facebook btn btn-md btn-block text-uppercase text-sm btn-padding mt-16"
                icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}>
            </i>}
            textButton = "&nbsp;&nbsp;Sign Up with Facebook"  />
                <GoogleLogin
clientId="927707433203-9ed21i55s02thg8m1d1qraukooo22ebr.apps.googleusercontent.com"
                buttonText="Sign Up with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.failure}
                cookiePolicy={'single_host_origin'}
                className="btn-google btn btn-md btn-block text-uppercase text-sm btn-padding text-center mt-16"
                textButton ="<span>&nbsp;&nbsp;Sign Up with Google</span>"
                />*/}
           </div>
           {/*<hr class="style-four" />
           <div class="form-group pt-8">
            <p class="login-heading text-center" style={{ color:'#000', }}>Register with Your Email</p>
            </div>*/}
              <div class=" ">

                  <div class="form-group">
                        <div class="inner-addon right-addon">
                          <span class="fa fa-user"> </span>
                          <input type="text" class="form-control" id="name" placeholder="Enter name" name="username" required/>
                          <span class="focus-border"> <i></i></span>
                        </div>
                  </div>


                  <div class="form-group">
                        <div class="inner-addon right-addon">
                          <span class="fa fa-envelope"> </span>
                          <input type="email" class="form-control" id="email1" placeholder="Enter email" name="email" required/>
                          <span class="focus-border"> <i> </i></span>
                       </div>
                  </div>

                  {/*----------password----------------*/}

                  <div class="form-group">
                      <div class="inner-addon right-addon">
                            <span class="fa fa-lock"></span>
                           <input type="password" title="Password must consist of minimum 8 characters and first letter must be in uppercase with one special character" class="form-control" id="pwd1" placeholder="Enter password" name="pswd" required/>
                            <span class="focus-border"> <i></i></span>
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="inner-addon right-addon">
                          <span class="fa fa-lock"></span>
                          <input type="password" title="Password must consist of minimum 8 characters and first letter must be in uppercase with one special character" class="form-control" id="repwd1" placeholder="Confirm password" name="repswd" required/>
                         <span class="focus-border"> <i></i></span>
                     </div>
                  </div>
          </div>
          <div class="row" style={{marginLeft:'-50px'}}><div class="col-md-2"><input type="checkbox" style={{marginLeft:'27px',position:'relative'}} required/></div><div class="col-md-10 term" > <span style={{fontSize:'13px',color:'#000'}}>I agree to the</span> <Link to="/terms_condition"><a href="#"><span style={{fontSize:'13px'}}>Terms of service </span></a></Link> <span style={{fontSize:'13px',color:'#000'}}>and</span> <Link to="/privacy_policy"><a href="#"><span style={{fontSize:'13px'}}>Privacy policy</span></a></Link></div></div>

           <center><span style={{color:'red'}} id={`error_msg_${this.props.role}`}></span></center>
          {this.state.progressLoader && <button  class="dis_button mt-16 btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" style={{minHeight:'35px', backgroundColor: 'rgba(202,52,100,1)'}} disabled>
          {this.props.loader_content!="register"  && <div>{this.state.progressLoader?<div>Loading....<ProgresLoader name="prog_loader1"/></div>:"Register"}</div>}
          {this.props.loader_content=="register" && <div>{this.state.progressLoader?<div>Loading....<ProgresLoader name="prog_loader"/></div>:"Register"}</div>}
          </button>}
          {!this.state.progressLoader && <button type="submit" class="dis_button mt-16 btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" style={{minHeight:'35px', backgroundColor: 'rgba(202,52,100,1)'}} >
              Register
          </button>}
      </form>
</div></div>
    );
  }
}
export default withRouter(Signup);
