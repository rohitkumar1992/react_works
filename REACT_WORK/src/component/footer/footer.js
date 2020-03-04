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
                                            <a href="javascript:;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
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
            <article class="footer_b">
                <aside class="container">
                    <p>Powered By</p>
                    <img src="images/footer_pl_logo.png" alt="" />
                </aside>
            </article>
            <div class="clearfix"></div>
        </footer>)
  }
}
export default Footer;
