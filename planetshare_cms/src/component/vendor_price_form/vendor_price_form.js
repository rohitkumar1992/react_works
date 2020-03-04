import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
const VendorPrice = (props)=>{
  return (
    <div class=" mb-0 text-gray-800">{props.lang}--{props.price}</div>
  );
}
export default VendorPrice;
