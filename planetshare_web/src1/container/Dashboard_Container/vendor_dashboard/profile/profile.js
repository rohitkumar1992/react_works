import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {VENDOR_PROFILE} from '../../../../url';
import './profile.css';
// import './modal.css';

class VendorProfile extends React.Component {
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
status(status,payment_id)
{
  var content='';
  if(status=='0' || status==0)
  {
    content=<b class="font-weight-bold text-primary" style={{width:'2em',height:'2em',cursor:'pointer'}} >Inactive</b>;
  }
  if(status=='1' || status==1)
  {
    content=<b class="font-weight-bold text-primary" style={{width:'2em',height:'2em',cursor:'pointer'}} >Active</b>;
  }
  return content;
}
  render() {
    const {vendor_details}=this.state;
      return (
        <div class="disply_prof" style={{marginTop:'100px'}}>
          <div class="container">
            <h1>My Profile</h1>
            <div class="row vendor_profile">
                <div class="col-md-4 col-lg-3">
                  <div class="p_box">
                    <div class="profile-img">
                      <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-user-png-6.png" style={{width:'150px',height:'150px'}}/>
                      <Link to="/dashboard/vendor/editprofile"><button class="btn ml-3 mt-3" style={{color:'white',cursor:'pointer',padding:'5px',background:'rgb(12, 120, 206)'}}><i class="fa fa-edit"/>&nbsp;Edit Profile</button></Link>
                      <div class="name_comp">
                        <p>{vendor_details.companyName}</p>
                        <p>{this.status(vendor_details.status,vendor_details.payment_id)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 col-lg-9">
                  <div class="vendor_info">
                    <div class="table">
                      <div class="table_r">

                        <div class="table_c">
                            <label class="label_for_vendor">Account Id</label>
                            <p>{vendor_details.accountId}</p>
                        </div>
                        <div class="table_c">
                            <label class="label_for_vendor">Company Info</label>
                            <p>{vendor_details.companyInfo}</p>
                        </div>
                      </div>
                      <div class="table_r">
                        <div class="table_c">
                            <label class="label_for_vendor">Company Name</label>
                            <p>{vendor_details.companyName}</p>
                        </div>
                        <div class="table_c">
                            <label class="label_for_vendor">Account Holder name</label>
                              {(vendor_details.accountHolderName==null  || vendor_details.accountHolderName=='' )  && <p>Not Provided</p>}
                              {vendor_details.accountHolderName!=null && <p>{vendor_details.accountHolderName}</p>}
                        </div>

                      </div>
                      <div class="table_r">
                        <div class="table_c">
                            <label class="label_for_vendor">Country</label>
                            <p>{vendor_details.country}</p>
                        </div>
                        <div class="table_c">
                            <label class="label_for_vendor">Account Number</label>
                            {(vendor_details.accountNumber==null || vendor_details.accountNumber=='' ) && <p>Not Provided</p>}
                            {vendor_details.accountNumber!=null  && <p>{vendor_details.accountNumber}</p>}
                        </div>
                      </div>
                      <div class="table_r">
                        <div class="table_c">
                            <label class="label_for_vendor">Address</label>
                            <p>{vendor_details.address}</p>
                        </div>
                        <div class="table_c">
                            <label class="label_for_vendor">Bank Name</label>
                            {vendor_details.bankName==null  && <p>Not Provided</p>}
                            {vendor_details.bankName!=null && <p>{vendor_details.bankName}</p>}
                        </div>
                      </div>
                      <div class="table_r">
                        <div class="table_c">
                            <label class="label_for_vendor">City</label>
                            <p>{vendor_details.city}</p>
                        </div>
                        <div class="table_c">
                          <label class="label_for_vendor">IFSC Code</label>
                          {vendor_details.ifsc==null && <p>Not Provided</p>}
                          {vendor_details.ifsc!=null && <p>{vendor_details.ifsc}</p>}
                        </div>

                      </div>
                      <div class="table_r">
                        <div class="table_c">
                          <label class="label_for_vendor">Requested At</label>
                          <p>{vendor_details.created_at}</p>
                        </div>
                        <div class="table_c">
                            <label class="label_for_vendor">Pincode</label>
                            <p>{vendor_details.pinCode}</p>
                        </div>
                      </div>
                      <div class="table_r">
                        <div class="table_c">
                          <label class="label_for_vendor">Phone Number</label>
                          <p>{vendor_details.phoneNumber}</p>
                        </div>
                        <div class="table_c">
                          <label class="label_for_vendor">Status</label>
                          <p>{this.status(vendor_details.status,vendor_details.payment_id)}</p>
                        </div>
                      </div>
                    </div>
                    {/*<div class="col-md-5" >
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Account Holder name</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.accountHolderName}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Account Id</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.accountId}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Company Name</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.companyName}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Company Info</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.companyInfo}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Country</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.country}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Account Number</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.accountNumber}</p>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <label class="label_for_vendor">Bank Name</label>
                          </div>
                          <div class="col-md-6">
                              <p>{vendor_details.bankName}</p>
                          </div>
                      </div>
                    </div>
                    <div class="col-md-5" >
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">Address</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.address}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">City</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.city}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">Pincode</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.pinCode}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">Requested At</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.created_at}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">IFSC Code</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.ifsc}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">Phone Number</label>
                            </div>
                            <div class="col-md-6">
                                <p>{vendor_details.phoneNumber}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="label_for_vendor">Status</label>
                            </div>
                            <div class="col-md-6">
                                <p>{this.status(vendor_details.status,vendor_details.payment_id)}</p>
                            </div>
                        </div>
                    </div>*/}
                  </div>
                </div>
            </div>
          </div>
        </div>
      );
  }
}
export default VendorProfile;
