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
<body>
  <div class="container-scroller">
    <ChildNavbar listing="My Dubbs" tag="dubbing"/>
    <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
       <div class="col-12 col-md-12">
       <Switch>
       <Route path="/dashboard/buyer/service/dubbing" exact={true} component={HOMEDATA}/>
         <Route path="/dashboard/buyer/service/dubbing/upload" component={NAVUPLOAD}/>
         <Route path="/dashboard/buyer/service/dubbing/uploadform/:tag/:id" component={UPLOADFORM}/>
         <Route path="/dashboard/buyer/service/dubbing/myorders" exact={true} component={MYORDERS}/>
         <Route path="/dashboard/buyer/service/dubbing/preview/:dubb_id"  component={PAYMENTPREVIEW}/>
         <Route path="/dashboard/buyer/service/dubbing/myorders/preview/:dubb_id" component={DUBBINGPREVIEW}/>
       </Switch>
       </div>
      </div>
  </div>
</body>
)
}
}
export default SellerAccount;
