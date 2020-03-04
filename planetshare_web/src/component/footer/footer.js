import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
class Footer extends Component {
  render() {
    return (
    <footer class="" >
      <div class="footer_section">
        <div class="container">
          <div class="row">
	           <div class="col-lg-3 col-md-3 footer_logo">
	             <Link to="/"><img src="img/logo.png" alt="footer logo"/></Link>
	           </div>
             <div class="col-lg-6 col-md-6">
               <ul class="foot_menu term_page">
                 <li><Link to="/web/aboutus">About us &nbsp;|</Link></li>
                 <li><Link to="/web/contactus">Contact us &nbsp;|</Link></li>
                 <li><Link to="/web/terms_condition">Terms & Condition &nbsp;|</Link></li>
                 <li><Link to="/web/privacy_policy">Privacy Policy</Link></li>
               </ul>
             </div>
          	<div class="col-lg-3 col-md-3">
              <ul class="foot_social">
                <li><a href="https://www.facebook.com/Planetshare/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/Planetshare_" target="_blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href=" 	https://www.linkedin.com/company/planetshare" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC3WZWabEFmWwwkZtwGoRfVA" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
	      </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-sm-12"><p>© 2019 Copyright @ PLANETCAST All  Rights Reserved.</p></div>
		      </div>
		    </div>
		 </div>
    </footer>
);
}
}
export default Footer;
