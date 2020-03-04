import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {VENDOR_DETAILS} from '../../url.js';
import {Link} from 'react-router-dom'

class UserDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      user_details:[],
      service_details:[]
    };
  }
componentDidMount()
{
  this.setState({id:this.props.match.params.id});
  this.getData(this.props.match.params.id);
}
  getData=(id)=>
  {
  axios.post(VENDOR_DETAILS, {
      vendor_id:id,
      })
    .then(response=>{
      if(response.data.success=='1')
      {
            this.setState({user_details:response.data.vendor_basic_details,service_details:response.data.vendor_service_details});
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
    content=<button className="inactive_button  btn-danger"  style={{cursor:'pointer',width:'68px'}}>Inactive</button>;
  }
  if(status=='1' || status==1)
  {
    content=<button className="active_button btn-primary"  style={{cursor:'pointer',width:'68px'}}>Active</button>;
  }
  return content;
}
  render() {
    const {user_details}=this.state;
    const service_cards=this.state.service_details.length>=0 && this.state.service_details.map((result,key)=>{
      return(<div class="col-xl-3 col-md-3 mb-4" style={{marginTop:'30px'}}>
                            <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                                <Link to={`/vendor/details/${result.services}/${result.vendor_id}`}><a href="" class="link_col"><div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{result.services.toUpperCase()}</div>
                                  </div>
                                  <div class="col-auto">
                                    <i class="fa fa-calendar fa-2x text-gray-300"></i>
                                  </div>
                                </div></a></Link>
                              </div>
                            </div>
                          </div>);
    })
      return (
        <div>
                  <div class="row">
                            <div class="col-md-2" >
                                <div class="profile-img">
                                        <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-user-png-6.png" style={{width:'150px',height:'150px'}}/>
                                </div>
                                </div>
                                <div class="col-md-5" >
                                      <div class="row">
                                          <div class="col-md-6">
                                              <label>Account Holder name</label>
                                          </div>
                                          <div class="col-md-6">
                                              <p>{user_details.accountHolderName}</p>
                                          </div>
                                      </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Account Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.accountId}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Company Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.companyName}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Company Info</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.companyInfo}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Country</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.country}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Account Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.accountNumber}</p>
                                                    </div>
                                                </div>
                                                          <div class="row">
                                                              <div class="col-md-6">
                                                                  <label>Bank Name</label>
                                                              </div>
                                                              <div class="col-md-6">
                                                                  <p>{user_details.bankName}</p>
                                                              </div>
                                                          </div>
                                                  </div>
                                                <div class="col-md-5" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.address}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>City</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.city}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Pincode</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.pinCode}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested At</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.created_at}</p>
                                                    </div>
                                                </div>  <div class="row">
                                                                  <div class="col-md-6">
                                                                      <label>IFSC Code</label>
                                                                  </div>
                                                                  <div class="col-md-6">
                                                                      <p>{user_details.ifsc}</p>
                                                                  </div>
                                                              </div>
                                                              <div class="row">
                                                                  <div class="col-md-6">
                                                                      <label>Phone Number</label>
                                                                  </div>
                                                                  <div class="col-md-6">
                                                                      <p>{user_details.phoneNumber}</p>
                                                                  </div>
                                                              </div>
                                                              <div class="row">
                                                                  <div class="col-md-6">
                                                                      <label>Status</label>
                                                                  </div>
                                                                  <div class="col-md-6">
                                                                      <p>{this.status(user_details.status,user_details.payment_id)}</p>
                                                                  </div>
                                                              </div>
                                          </div></div>
                                <div class="row">
                                {this.state.service_details.length>0?service_cards:<h5>No Service Added Yet</h5>}
                                                    </div>
        </div>
      );
  }
}
export default UserDetails;
