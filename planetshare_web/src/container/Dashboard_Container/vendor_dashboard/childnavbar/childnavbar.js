import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './childnavbar.css';
const ChildNavbar =(props)=>{
  return(
    <div class="verdor_heading">
        <h2 style={{fontSize:'25px',padding:'0px', marginBottom:'0px', textAlign: 'center', color:'black; margin:auto;'}}>{props.head}</h2>
    </div>);
}
export default ChildNavbar;
