import React, { Component } from 'react';
import axios from 'axios';
import './loginCSS.css';
import {withRouter,Link} from 'react-router-dom';
import {SOCIALLOGIN,LOGIN} from '../../url';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import ProgresLoader from '../../component/progress_loader/progress_loader';
import $ from 'jquery';
class Login extends Component {
  state={
    progressLoader:false
  }
  componentDidMount()
  {
    if(this.props.redirect_tag=="role_vendor" && localStorage.getItem('userid')!=null)
    {
      this.props.history.push('/dashboard/vendordetails')
    }
    if(this.props.redirect_tag=="role_seller" && localStorage.getItem('userid')!=null)
    {
      this.props.history.push('/dashboard/sellerdetails')
    }
  }
  signinHandler=(e)=>
  {
    e.preventDefault();
      axios.post(LOGIN, {
          email:e.target.email.value,
          password:e.target.pswd.value,
          role_id:'2'
        })
        .then(response=>{
              this.setState({progressLoader:true});
          if(response.data.success=="1" || response.data.success==1)
          {
            localStorage.setItem('username',response.data.user_email);
            localStorage.setItem('Name',response.data.name);
            localStorage.setItem('AccountId',response.data.account_id);
            localStorage.setItem('cartvalue',0);
              localStorage.setItem('userid',response.data.user_id);
              var redirect_url=this.props.redirect_url;
              if(this.props.redirect_tag=="services")
              {
                setTimeout(()=>this.props.history.push(redirect_url),2000);
                return false;
              }
              if(this.props.redirect_tag=="role_vendor")
              {
                setTimeout(()=>this.props.history.push('/dashboard/vendordetails'),2000);
                return false;
              }
              if(this.props.redirect_tag=="role_seller")
              {
                setTimeout(()=>this.props.history.push('/dashboard/sellerdetails'),2000);
                return false;
              }
              else {
              setTimeout(()=>this.props.history.push('/web'),2000);
              return false;
            }
          }
          if(response.data.success=="0" || response.data.success==0)
          {
            // $('#disp_err').html('Error');
            alert("Incorrect Email Or Password");
            this.setState({progressLoader:false});
            return false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }
responseFacebook = (response) => {
  // console.log(response);
  if(response.name==null)
  {
    console.log('false');
    return false;
  }
  var name=response.name,email=response.email,picture=response.picture.data.url,Id=response.id;
  this.socialLogin(name,email,picture,Id,'Facebook');
}
responseGoogle = (response) => {
  // console.log(response);
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
          this.setState({progressLoader:true});
          var redirect_url=this.props.redirect_url;

          if(this.props.redirect_tag=="services")
          {
            setTimeout(()=>this.props.history.push(redirect_url),2000);
            return false;
          }
          if(this.props.redirect_tag=="role_vendor")
          {
            setTimeout(()=>this.props.history.push('/dashboard/vendordetails'),2000);
            return false;
          }
          if(this.props.redirect_tag=="role_seller")
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
  render() {

        return (
          <div>
          <div id="login" class="login_form">
            <form   onSubmit={this.signinHandler}>
             <div class="col-12 col-sm-12 col-md-10 offset-md-1">
             {/*<button class="btn btn-md btn-phone btn-block text-uppercase text-sm btn-padding " type="button" onClick={this.props.clicked}>Login with phone number</button>*/}
                    {/*   <FacebookLogin
                  appId="622122471548659"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={this.componentClicked}
                  callback={this.responseFacebook}
                  cssClass="btn-facebook btn btn-md btn-block text-uppercase text-sm btn-padding mt-16"
                  icon={<i className="fa fa-facebook" style={{marginLeft:'5px'}}>
              </i>}
              textButton = "&nbsp;&nbsp;Sign In with Facebook"  />
                  <GoogleLogin
                  clientId="927707433203-9ed21i55s02thg8m1d1qraukooo22ebr.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.failure}
                  cookiePolicy={'single_host_origin'}
                  className="btn-google btn btn-md btn-block text-uppercase text-sm btn-padding text-center mt-16"
                  textButton ="<span>&nbsp;&nbsp;Sign In with Google</span>"
                  />*/}
             </div>
             {/*<hr class="style-four" />*/}
             <div class="form-group pt-8">
              {/*<p class="login-heading text-center" style={{ color:'#000', }}>Your Video Any Where, Any Time</p>*/}
          <label for="email">EMAIL:</label>
             <div class="inner-addon right-addon" >
                    <span class="fa fa-envelope"></span>
                 <input type="email"  title="Your Email Address" class="form-control effect-7" id="email1" placeholder="Enter email" name="email" required/>
                  <span class="focus-border">  	<i></i></span>
           </div>
          </div>

          <div class="form-group">
          <label for="pwd">PASSWORD:</label>
            <div class="inner-addon right-addon">
                    <span class="fa fa-lock"></span>
                 <input type="password" title="Password must consist of minimum 8 characters and first letter must be in uppercase with one special character"  class="form-control effect-7" id="pwd1" placeholder="Enter password" name="pswd" required />
                  <span class="focus-border">  	<i></i></span>
            </div>
          </div>

            <div class="row" style={{marginLeft:'-50px'}}><div class="col-md-2"><input type="checkbox" style={{marginLeft:'27px',position:'relative'}} required/></div><div class="col-md-10 term" > <span style={{fontSize:'13px',color:'#000'}}>I agree to the</span> <Link to="/terms_condition"><a href="#"><span style={{fontSize:'13px'}}>Terms of service </span></a></Link> <span style={{fontSize:'13px',color:'#000'}}>and</span> <Link to="/privacy_policy"><a href="#"><span style={{fontSize:'13px'}}>Privacy policy</span></a></Link></div></div>
              {/*<div class="row" style={{marginLeft:'-50px'}}><div class="col-md-2"><input type="checkbox" style={{marginLeft:'40px',position:'relative',marginTop:'1px'}} required/></div><div class="col-md-10" ><Link to="/terms_condition"><a href="#"><p style={{color:'#0681cb'}}>I agree to the terms of service and privacy policy</p></a></Link></div></div>*/}
              <center style={{marginTop:'6px'}}><span style={{color:'red'}} id={`disp_err`}></span></center>
              {this.state.progressLoader && <button type="submit" id="dis_button" class="btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" disabled>Loading....<ProgresLoader name="prog_loader1"/></button>}
              {!this.state.progressLoader && <button type="submit" id="dis_button" class="btn btn-primary btn-submit btn-lg btn-block shadow-top-bottom" >Log In</button>}

            </form>

          </div>
          </div>

    );
  }
}
export default withRouter(Login);
