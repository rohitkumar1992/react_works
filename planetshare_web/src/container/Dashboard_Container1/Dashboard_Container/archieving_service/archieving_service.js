import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import ChildNavbar from '../childnavbar/childnavbar';
import LISTING from '../mylisting/mylisting.js';
import NAVUPLOAD from './upload_nav/upload_nav.js';
import MYORDERS from '../dubbing/myorders/myorders.js';
import UPLOADFORM from './form/form.js';
import HOMEDATA from '../homedashboard/homedashboard.js';
import DUBBINGPREVIEW from '../dubbing/preview_page/preview_page.js';
import PAYMENTPREVIEW from '../dubbing/payment_preview_page/payment_preview_page.js';
import routes from "../routes";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from "react-router-dom";
class SellerAccount extends Component {
  render()
  {
    return(
      <center><div style={{marginTop:'80px'}}>
        <h4>Coming Soon</h4>
         </div></center>
)
}
}
export default SellerAccount;
