import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import ChildNavbar from '../childnavbar/childnavbar';
import LISTING from '../mylisting/mylisting.js';
import NAVUPLOAD from './upload_nav/upload_nav.js';
import MYORDERS from './myorders/myorders.js';
import HOMEDATA from '../homedashboard/homedashboard.js';
import DUBBINGPREVIEW from '../dubbing/preview_page/preview_page.js';
import TRANSCODINGPREVIEW from './preview_page/preview_page.js';
import TRANSCODING_PAYMENT_PREVIEW from './payment_preview_page/payment_preview_page.js';
import UPLOADFORM from './form/form.js';
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
    <ChildNavbar listing="My Subtitles" tag="subtitling"/>
    <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
       <div class="col-12 col-md-12">
       <Switch>
       <Route path="/dashboard/buyer/service/subtitling" exact={true} component={HOMEDATA}/>
         <Route path="/dashboard/buyer/service/subtitling/upload" component={NAVUPLOAD}/>
         <Route path="/dashboard/buyer/service/subtitling/uploadform/:tag/:id" component={UPLOADFORM}/>
         <Route path="/dashboard/buyer/service/subtitling/myorders" exact={true} component={MYORDERS}/>
         <Route path="/dashboard/buyer/service/subtitling/preview/:subtitle_id" component={TRANSCODING_PAYMENT_PREVIEW}/>
         <Route path="/dashboard/buyer/service/subtitling/myorders/preview/:subtitle_id" component={TRANSCODINGPREVIEW}/>
       </Switch>
       </div>
      </div>
  </div>
</body>
)
}
}
export default SellerAccount;
