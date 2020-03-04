import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {USER_DETAILS} from '../../url.js';
// import './modal.css';

class UserDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      user_details:[]
    };
  }
componentDidMount()
{
  this.setState({id:this.props.match.params.id});
  this.getData(this.props.match.params.id);
}
  getData=(id)=>
  {
  axios.post(USER_DETAILS, {
      user_id:id,
      })
    .then(response=>{
      if(response.data.success=='1')
      {
            this.setState({user_details:response.data.data});
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
      return (
        <div>
                  <div class="row">
                            <div class="col-md-3" >
                                <div class="profile-img">
                                        <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-user-png-6.png" style={{width:'180px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-5" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Account Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.AccountId}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.email}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>User Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.name}</p>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested At</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.created_at}</p>
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

                                    </div>

                                </div>
        </div>
      );
  }
}
export default UserDetails;
