import React from 'react';
import {Link} from 'react-router-dom';
function Footer()
{
  return(
    <footer class="home_footer">
        <article class="footer_t">
            <div class="row">
                <div class="col-sm-6">
                    <div class="box l">
                      <p>© Copyright 2018 Planetshare. All rights reserved.</p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="box r">
                        <div class="social">
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
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </article>
    </footer>
  );
}
export default Footer;
