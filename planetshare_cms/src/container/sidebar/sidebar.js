import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,withRouter,
  HashRouter
} from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
<aside class="left-sidebar" style={{backgroundColor:'#141619'}} >
    <div class="scroll-sidebar">
        <nav class="sidebar-nav">
            <ul id="sidebarnav" class="p-t-30">
                <Link to="/dashboard"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li></Link>
                <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">VOD </span></a>
                    <ul aria-expanded="false" class="collapse  first-level">
                    {/*<Link to="#"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Upload</span></a></li></Link>*/}
                    <Link to="/videolist"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Video List</span></a></li></Link>
                    </ul>
                </li>
                  <Link to="/userlist"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i class="fa fa-user" style={{fontSize:"18px"}}></i><span class="hide-menu">UserList</span></a></li></Link>
                  <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Services </span></a>
                      <ul aria-expanded="false" class="collapse  first-level">
                      <Link to="/services/transcoding"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Transcoding</span></a></li></Link>
                      <Link  to={{
                        pathname:'/services/dubbing'}}><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Dubbing</span></a></li></Link>
                      <Link to="/services/subtitle"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Subtitle</span></a></li></Link>
                      <Link to="/services/tagging"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Auto Tagging</span></a></li></Link>
                      </ul>
                  </li>
                  <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Vendor </span></a>
                      <ul aria-expanded="false" class="collapse  first-level">
                      <Link to="/vendor/list"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Vendor List</span></a></li></Link>
                      <Link  to="#"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Transcations</span></a></li></Link>
                      </ul>
                  </li>
                  <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Seller </span></a>
                      <ul aria-expanded="false" class="collapse  first-level">
                      <Link to="/seller/list"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Seller List</span></a></li></Link>
                      <Link  to="#"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Transcations</span></a></li></Link>
                      </ul>
                  </li>
                  <Link to="/userquery"><li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i class="fa fa-question-circle" style={{fontSize:"18px"}}></i><span class="hide-menu">User Query</span></a></li></Link>
            </ul>
        </nav>

    </div>

</aside>)
}
}
export default withRouter(Sidebar);
