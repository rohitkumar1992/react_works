import React, { Component } from 'react';
import {Link} from "react-router-dom";
const Sidebar =(props)=>{
  return(        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
        

            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#ui-basic1" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon mdi mdi-content-copy"></i>
                <span class="menu-title">Listings</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic1">
                <ul class="nav flex-column sub-menu">
                  <Link to="/selleraccount/list"><li class="nav-item">
                    <a class="nav-link" href="#">My Listings </a>
                  </li></Link>
                  <Link to="/selleraccount/approvalrequest"><li class="nav-item">
                    <a class="nav-link" href="#">Track Approval Requests</a>
                  </li></Link>
                  <Link to="/selleraccount/upload"><li class="nav-item">
                    <a class="nav-link" href="#">Upload</a>
                  </li></Link>
                </ul>
              </div>
            </li>

                    <Link to="/selleraccount/inventory"><li class="nav-item">
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




            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="menu-icon mdi mdi-restart"></i>
                <span class="menu-title">Payments</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Payments Overview</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Previous Payments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Transactions</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> Statements</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"> 500 </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>  );
}
export default Sidebar;
