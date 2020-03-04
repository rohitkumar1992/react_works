import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './childnavbar.css';
const ChildNavbar =(props)=>{
  return(<nav class="navbar childnav navbar-expand-md navbar-light fixed-top" style={{marginTop:'44px',zIndex:'1000',height:'40px',backgroundColor:'white'}}>
          <ul class="nav  font-weight-bold">
          <Link to={`/dashboard/buyer/service/${props.tag}/upload`}>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <span class="menu-title">Upload</span>
              </a>
            </li>
          </Link>
          <Link to={`/dashboard/buyer/service/${props.tag}/myorders`}>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <span class="menu-title">{props.listing}</span>
              </a>
            </li>
          </Link>
          <Link to={`/dashboard/buyer/service/${props.tag}`}>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <span class="menu-title">My Analytics</span>
              </a>
            </li>
          </Link>
          </ul>
        </nav>);
}
export default ChildNavbar;
