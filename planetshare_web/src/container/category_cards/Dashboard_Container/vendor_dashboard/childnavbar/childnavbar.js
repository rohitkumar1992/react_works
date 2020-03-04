import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './childnavbar.css';
const ChildNavbar =(props)=>{
  return(<nav class="navbar navbar-expand-md navbar-light fixed-top" style={{marginTop:'58px',zIndex:'1000',height:'50px',backgroundColor:'rgba(181, 219, 252, 0.1)'}}>
            <span style={{fontSize:'25px',padding:'10px',color:'black'}}>{props.head}</span>
        </nav>);
}
export default ChildNavbar;
