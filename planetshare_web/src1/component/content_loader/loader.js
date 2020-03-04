import React, { Component } from 'react';
import './loader.css';
const Loader = (props)=>{
  return (
    <div style={{textAlign:'center'}}><div className="loader"></div><span style={{fontSize:'20px'}}>Sending Request....</span></div>
  );
}
export default Loader;
