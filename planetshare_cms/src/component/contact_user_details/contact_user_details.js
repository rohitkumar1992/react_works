import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {USERQUERYSINGLERECORD} from '../../url.js';
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
  axios.post(USERQUERYSINGLERECORD, {
      contact_id:id,
      })
    .then(response=>{
      if(response.data.success=='1')
      {
            this.setState({user_details:response.data.data[0]});
      }
      else
      {
        this.props.history.push('/')
      }
    })
    .catch(function (error) {
      console.log(error);
  });
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
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.name}</p>
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
                                                        <label>Mobile Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.mobile}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Subject</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.subject}</p>
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
                                                        <label>Message</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{user_details.message}</p>
                                                    </div>
                                                </div>

                                    </div>

                                </div>
        </div>
      );
  }
}
export default UserDetails;
