import React from 'react';
class Footer extends React.Component{
  render()
  {
    return(    <footer class="home_footer">
            <article class="footer_t">
                <aside class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="box l">
                                <a href="index.html"><img src="images/f_logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="box m">
                                <ul class="links">
                                    <li><a href="javascript:;">FAQ</a></li>
                                    <li><a href="javascript:;">Privacy Policy</a></li>
                                    <li><a href="javascript:;">Contact</a></li>
                                    <li><a href="javascript:;">Terms of Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="box r">
                                <div class="social">
                                    <h5>Connect with us</h5>
                                    <ul>
                                        <li>
                                            <a href="javascript:;"><img src="images/icon_social1.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><img src="images/icon_social2.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><img src="images/icon_social3.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><img src="images/icon_social4.png" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="p_apps">
                                    <h5>Available on</h5>
                                    <ul>
                                        <li>
                                            <a href="javascript:;" class="btn btn_gp"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" class="btn btn_ap"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="clearfix"></div>
            </article>

            <div class="clearfix"></div>
            <div class="modal login_f" id="login_form">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="popup_l">
                  <img src="images/popup_logo.png" alt="" />
                </div>
                <form action="javascript:;">
                    <div class="fields">
                        <div class="field">
                          <label>First Name</label>
                          <div class="inputbox">
                              <input type="text" placeholder="First Name" alt="" />
                          </div>
                        </div>
                        <div class="field">
                          <label>Last Name</label>
                          <div class="inputbox">
                              <input type="text" placeholder="Last Name" alt="" />
                          </div>
                        </div>
                        <div class="field">
                          <label>Email</label>
                          <div class="inputbox">
                              <input type="email" placeholder="Email" alt="" />
                          </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="submit" data-dismiss="modal" data-toggle="modal" data-target="#mobile_number">Sign up with Email</button>
                    </div>
                    <div class="or">
                      <span>Or</span>
                    </div>
                    <div class="social_btn">
                      <a href="javascript:;" class="btn btn_fb"><img src="images/icon_fb.png" alt="" /> Facebook</a>
                      <a href="javascript:;" class="btn btn_g"><img src="images/icon_google.png" alt="" /> Google</a>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal login_f" id="mobile_number">
        <div class="modal-dialog">
            <div class="modal-content mobnum">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="popup_l">
                  <img src="images/popup_logo.png" alt="" />
                </div>
                <form action="javascript:;">
                    <div class="fields phn">
                        <h2>Your Phone!</h2>
                        <div class="field">
                          <label><span>Phone Number</span></label>
                          <div class="inputbox">
                              <div class="select_lang">
                                <ul>
                                  <li values="1" class="option"><img src="images/icon_lang.jpg" alt="" /></li>
                                </ul>
                              </div>
                              <input type="text" placeholder="Enter Number" alt="" />
                          </div>
                        </div>
                        <p>A 6 digit OTP will be sent to verify your mobile number!</p>
                        <a href="javascript:;" data-dismiss="modal" data-toggle="modal" data-target="#login_form" class="backbtn">Back</a>
                    </div>
                    <div class="buttons">
                        <button type="submit" data-dismiss="modal" data-toggle="modal" data-target="#otp_number">Continue</button>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal login_f" id="otp_number">
        <div class="modal-dialog">
            <div class="modal-content mobnum">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="popup_l">
                  <img src="images/popup_logo.png" alt="" />
                </div>
                <form action="javascript:;">
                    <div class="fields phn">
                        <h2>OTP Verification!</h2>
                        <p class="otp">Enter the OTP you received to <span>+91 08987 XXXXX</span></p>
                        <div class="field otp">
                          <div class="inputbox">
                            <span><input type="text" alt="" /></span>
                            <span><input type="text" alt="" /></span>
                            <span><input type="text" alt="" /></span>
                            <span><input type="text" alt="" /></span>
                            <span><input type="text" alt="" /></span>
                            <span><input type="text" alt="" /></span>
                          </div>
                        </div>
                        <div class="otptime">
                          <a href="javascript:;" class="backbtn">Resend OTP</a>
                          <span>00:60</span>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="submit">Continue</button>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
        </footer>)
  }
}
export default Footer;
