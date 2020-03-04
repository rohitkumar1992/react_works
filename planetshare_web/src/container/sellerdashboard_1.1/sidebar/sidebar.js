import React, { Component } from 'react';
import {Link} from "react-router-dom";
const Sidebar =(props)=>{
  return(<nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
          <Link to="/dashboard"><li class="nav-item">
        <a class="nav-link" href="#">
        <i class="menu-icon mdi mdi-home"></i>
        <span class="menu-title">Dashboard</span>
        </a>
        </li></Link>
          <span class="menu-title nav-link" style={{fontSize:'15px'}}><i class="fa fa-plus">&nbsp;&nbsp;</i>Seller</span>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#ui-basic1" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon mdi mdi-content-copy"></i>
                <span class="menu-title">Listings</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic1">
                <ul class="nav flex-column sub-menu">
                  <Link to="/dashboard/seller/list"><li class="nav-item">
                    <a class="nav-link" href="#">My Listings </a>
                  </li></Link>
                  <Link to="/dashboard/seller/approvalrequest"><li class="nav-item">
                    <a class="nav-link" href="#">Track Approval Requests</a>
                  </li></Link>
                  <Link to="/dashboard/seller/upload"><li class="nav-item">
                    <a class="nav-link" href="#">Upload</a>
                  </li></Link>
                </ul>
              </div>
            </li>

            <Link to="/dashboard/seller/inventory"><li class="nav-item">
              <a class="nav-link" href="#">
                <i class="menu-icon mdi mdi-table"></i>
                <span class="menu-title">Inventory</span>
              </a>
            </li></Link>
             <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#ui-basic2" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon mdi mdi-content-copy"></i>
                <span class="menu-title">Orders</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic2">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Active Orders</a>
                  </li>
                </ul>
              </div>
            </li>
            <span class="menu-title nav-link" style={{fontSize:'15px'}}><i class="fa fa-plus">&nbsp;&nbsp;</i>Vendor</span>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#sellerui-basic1" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon mdi mdi-content-copy"></i>
                <span class="menu-title">Listings</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="sellerui-basic1">
                <ul class="nav flex-column sub-menu">
                  <Link to="/dashboard/vendor/list"><li class="nav-item">
                    <a class="nav-link" href="#">My Listings </a>
                  </li></Link>
                  <Link to="/dashboard/vendor/approvalrequest"><li class="nav-item">
                    <a class="nav-link" href="#">Track Approval Requests</a>
                  </li></Link>
                  <Link to="/dashboard/vendor/upload"><li class="nav-item">
                    <a class="nav-link" href="#">Upload</a>
                  </li></Link>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#vendor_service" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon mdi mdi-content-copy"></i>
                <span class="menu-title">Services</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="vendor_service">
                <ul class="nav flex-column sub-menu">
                  <Link to="/dashboard/vendor/transcoding"><li class="nav-item">
                    <a class="nav-link" href="#">Transcoding</a>
                  </li></Link>
                  <Link to="/dashboard/vendor/dubbing"><li class="nav-item">
                    <a class="nav-link" href="#">Dubbing</a>
                  </li></Link>
                  <Link to="/dashboard/vendor/converter"><li class="nav-item">
                    <a class="nav-link" href="#">Audio Converter</a>
                  </li></Link>
                </ul>
              </div>
            </li>
          </ul>
        </nav>);
}
export default Sidebar;
