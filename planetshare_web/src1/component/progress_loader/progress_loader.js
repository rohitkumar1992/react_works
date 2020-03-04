import React, { Component } from 'react';
 import Loader from 'react-loader-spinner'
import './progress_loader.css';
const ProgLoader = (props)=>{
  return (
    <div class={props.name}><Loader
         type="ThreeDots"
         color="#00BFFF"
         height="20"
         width="25"
         color="white"
      /> </div>

  );
}
export default ProgLoader;
  {/*<div style={{textAlign:'center'}}><div className=""></div><span style={{fontSize:'20px'}}>Loading....</span></div>*/}
