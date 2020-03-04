import React, { Component } from 'react';
import './loader.css';
const Loader = (props)=>{
  return (
    <div style={{textAlign:'center'}}><div className="loader"></div><span style={{fontSize:'20px'}}>{props.content} Loading....</span></div>
  );
}
export default Loader;
