import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../childnavbar/childnavbar';
import LISTING from '../mylisting/mylisting.js';
import UPLOAD from '../chunkupload/resumable.js';
import APPROVALREQUEST from '../approvalrequest/approvalrequest.js';
import HOMEDATA from '../homedashboard/homedashboard.js';
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
    <div class="container-fluid page-body-wrapper" style={{backgroundColor:'#e9ebee'}}>
      <div class="" >
       <div class="col-12 col-md-12">
       <Switch>
       <Route path="/dashboard/seller" exact={true} component={HOMEDATA}/>
         <Route path="/dashboard/seller/list" component={LISTING}/>
         <Route path="/dashboard/seller/approvalrequest" component={APPROVALREQUEST}/>
         <Route path="/dashboard/seller/upload" component={UPLOAD}/>
       </Switch>
       </div>
      </div>
    </div>
  </div>
</body>
)
}
}
export default SellerAccount;
