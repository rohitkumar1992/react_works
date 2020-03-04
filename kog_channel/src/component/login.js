import React from 'react'
class Login extends React.Component{
state={isLogin:true,isSignup:false}
  render()
  {
    return(
      <div class="inner_wrap">
        <div class="login" id="login">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <button type="button" class="close">&times;</button>
                      {this.state.isLogin && <div class="row">
                          <div class="col-sm-6">
                              <div class="box l">
                                  <img src="images/signin_image.jpg" alt="" />
                                  <a class="signup" href="javascript:;" onClick={()=>{this.setState({isLogin:false,isSignup:true})}}>Create an account</a>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="box r">
                                  <h2>Log In</h2>
                                  <form action="javascript:;">
                                      <div class="fields">
                                          <div class="inputbox">
                                              <i class="fa fa-user-o" aria-hidden="true"></i>
                                              <input type="text" placeholder="Your name" alt="" />
                                          </div>
                                          <div class="inputbox">
                                              <i class="fa fa-lock" aria-hidden="true"></i>
                                              <input id="password-field" type="password" placeholder="Password" alt="" />
                                              <i toggle="#password-field" class="fa vp fa-eye" aria-hidden="true"></i>
                                          </div>
                                          <div class="inputbox check">
                                              <input id="remember" type="checkbox" alt="" />
                                              <label for="remember">Remember me</label>
                                          </div>
                                      </div>
                                      <div class="buttons">
                                          <button type="button">Log in</button>
                                      </div>
                                  </form>
                                  {/*<div class="social">
                                    <label>Or Login with</label>
                                    <ul>
                                      <li>
                                          <a href="javascript:;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                      </li>
                                      <li>
                                          <a href="javascript:;"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                      </li>
                                    </ul>
                                  </div>*/}
                              </div>
                          </div>
                      </div>}
                    {this.state.isSignup &&  <div class="row sgup">
                          <div class="col-sm-6">
                              <div class="box r">
                                  <h2>Sign up</h2>
                                  <form action="javascript:;">
                                      <div class="fields">
                                          <div class="inputbox">
                                              <i class="fa fa-user-o" aria-hidden="true"></i>
                                              <input type="text" placeholder="Your name" alt="" />
                                          </div>
                                          <div class="inputbox">
                                              <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                              <input type="email" placeholder="Your email" alt="" />
                                          </div>
                                          <div class="inputbox">
                                              <i class="fa fa-lock" aria-hidden="true"></i>
                                              <input id="password" type="password" placeholder="Password" alt="" />
                                              <i toggle="#password" class="fa vp fa-eye" aria-hidden="true"></i>
                                          </div>
                                          <div class="inputbox">
                                              <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                              <input id="confirm_pass" type="password" placeholder="Confirm Password" alt="" />
                                              <i toggle="#confirm_pass" class="fa vp fa-eye" aria-hidden="true"></i>
                                          </div>
                                          <div class="inputbox check">
                                              <input id="remember" type="checkbox" alt="" />
                                              <label for="remember">I agree all statements in <a href="javascript:;">Terms of service</a></label>
                                          </div>
                                      </div>
                                      <div class="buttons">
                                          <button type="button">Register</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="box l">
                                  <img src="images/signup_image.jpg" alt="" />
                                  <a class="signup" href="javascript:;" onClick={()=>{this.setState({isLogin:true,isSignup:false})}}>Already member</a>
                              </div>
                          </div>
                      </div>}
                  </div>
              </div>
        </div>
      </div>
      )
  }
}
export default Login;
