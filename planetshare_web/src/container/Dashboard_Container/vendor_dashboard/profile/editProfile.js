import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {VENDOR_PROFILE,VENDOR_UPDATE_PROFILE} from '../../../../url';
import {Link} from 'react-router-dom';
import './profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './modal.css';

class EditVendorProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      vendor_details:[]
    };
  }
componentDidMount()
{
  this.getData(localStorage.getItem('userid'));
}
  getData=(id)=>
  {
  axios.post(VENDOR_PROFILE, {
      user_id:id,
      })
    .then(response=>{
      if(response.data.success=='1')
      {
            this.setState({vendor_details:response.data.profile});
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}
updateDetails=(e)=>{
  e.preventDefault();
  if(window.confirm('Are you sure you want to update?'))
  {
  var accountHolderName=e.target.accountHolderName.value;
  var companyName=e.target.companyName.value;
  var companyInfo=e.target.companyInfo.value;
  var country=e.target.country.value;
  var accountNumber=e.target.accountNumber.value;
  var bankName=e.target.bankName.value;
  var address=e.target.address.value;
  var city=e.target.city.value;
  var phoneNumber=e.target.phoneNumber.value;
  var pinCode=e.target.pinCode.value;
  var ifsc=e.target.ifsc.value;
axios.post(VENDOR_UPDATE_PROFILE, {
    user_id:localStorage.getItem('userid'),
    accountHolderName:accountHolderName,
    companyName:companyName,
    companyInfo:companyInfo,
    country:country,
    accountNumber:accountNumber,
    bankName:bankName,
    address:address,
    city:city,
    phoneNumber:phoneNumber,
    pinCode:pinCode,
    ifsc:ifsc
    })
  .then(response=>{
    if(response.data.success=='1')
    {
      toast("Updating Your Profile");
  setTimeout(()=>this.props.history.push('/dashboard/vendor/profile'),2000);
    }
  })
  .catch(function (error) {
    console.log(error);
});
}
else {
  return false;
}
}
  render() {
    const {vendor_details}=this.state;
      return (
        <div  class="veder_account_info" style={{marginTop:'100px'}}>
        <ToastContainer autoClose={2000}/>
        <form id="acc_details" onSubmit={this.updateDetails}>
          <h1>Update Your Profile</h1>
          <div class="fields">
            <h2>Basic Info</h2>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="pwd" >Account Id:</label>
                  <input type="text" class="form-control effect-7"  name="accountId" Value={vendor_details.accountId} required disabled/>
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >Phone Number:</label>
                  <input type="text" class="form-control effect-7"  name="phoneNumber" Value={vendor_details.phoneNumber} required />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="pwd" >Company Name:</label>
                  <input type="text" class="form-control effect-7"  name="companyName" Value={vendor_details.companyName} required />
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >Company Info:</label>
                  <input type="text" class="form-control effect-7"  name="companyInfo" Value={vendor_details.companyInfo} required />
                </div>
              </div>
            </div>
          </div>
          <div class="fields">
            <h2>Located At</h2>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="pwd" >Address:</label>
                  <input type="text" class="form-control effect-7"  name="address" Value={vendor_details.address} required />
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >City:</label>
                  <input type="text" class="form-control effect-7"  name="city" Value={vendor_details.city} required />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="pwd" >Country:</label>
                  <input type="text" class="form-control effect-7"  name="country" Value={vendor_details.country} required />
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >PinCode:</label>
                  <input type="text" class="form-control effect-7"  name="pinCode" Value={vendor_details.pinCode} required />
                </div>
              </div>
            </div>
          </div>
          {((vendor_details.accountHolderName==null || vendor_details.accountHolderName=='') && vendor_details.bankName==null &&vendor_details.accountNumber==null ) && <div class="fields last">
              <h2>Bank Detail</h2>
              <div class="row">
                <p class="fill_msg">Please provide your payout details <br/><span><Link to="/dashboard/vendor/addbankdetails">Click Here</Link></span></p>
              </div>
            </div>}
        {(vendor_details.accountHolderName!=null && vendor_details.bankName!=null &&vendor_details.accountNumber!=null )&& <div class="fields last">
            <h2>Bank Detail</h2>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="accountHolderName" >Account Holder name:</label>
                  <input type="text" class="form-control effect-7"  id="accountHolderName" name="accountHolderName" Value={vendor_details.accountHolderName} required />
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >Bank Name:</label>
                  <input type="text" class="form-control effect-7"  name="bankName" Value={vendor_details.bankName} required />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="pwd" >Account Number:</label>
                  <input type="text" class="form-control effect-7"  name="accountNumber" Value={vendor_details.accountNumber} required />
                </div>
                <div class="form-group input_4">
                  <label for="pwd" >IFSC:</label>
                  <input type="text" class="form-control effect-7"  name="ifsc" Value={vendor_details.ifsc} required />
                </div>
              </div>
            </div>
          </div>}
          <div class="buttons">
            <button type="submit" class="acount_btn">Update</button>
          </div>
        </form>
        </div>
      );
  }
}
export default EditVendorProfile;
