import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,VENDORGIGLIST,USERID,HEADER,CHANGE_STATUS} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import axios from 'axios';
import $ from 'jquery';
class VendorInfo extends Component {
  state={
    isLoading:false,vendorinfo:[],
    currentPage:1,
    total:0,
    vendor_id:0
}
  componentDidMount()
  {
    this.setState({vendor_id:this.props.match.params.vendor_id},function(){this.getData(1,10)});
  }
  getData=(page,limit)=>{
    axios.post(VENDORGIGLIST,{
      'tag':'dash',
      'limit':limit,
      'user_id':USERID,
      'vendor_id':this.state.vendor_id
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,total:response.total,vendorinfo:response.data})
        }
    }).catch((error)=>{

    })
  }
  status=(Id,status)=>{
    var name="";
    if(status==1)
    {
      name="Active";
    }
    if(status==2)
    {
      name="Pending";
    }
    if(status==0)
    {
      name="InActive";
    }
    if(status==3)
    {
      name="Disapproved";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${status==1?'btn-success':'btn-danger'} btn-sm`}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'sellervideo',
      'id':Id,
      'status':status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          this.getData(1,10)
        }
    }).catch((error)=>{

    })
  }
  render() {
    const {vendorinfo}=this.state;
    const tableContent=vendorinfo.map((res,key)=>{
      return(<tr key={key}><td><Link to={`/vendor/info/${res.id}`}>{res.vendor_service_gigs_id}</Link></td>
                <td>{res.gig_title}</td>
                <td>{res.category_id}</td>
                <td>{res.subcategory_id}</td>
                <td>{res.created_at}</td>
                <td>{this.status(res.id,res.status)}</td>
                <td>
                <div class="action_buttons">
                  <a href="javascript:" class="btn"><i class="fa fa-pencil"></i></a>
                  <a class="btn" href="javascript:"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                  <div class="dropdown">
                    <a href="javascript:" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    {res.status==4 && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                    </div>}
                    {res.status==2 && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,1)}><i class="fa fa-eye" aria-hidden="true"></i>Approved</a>
                        <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,3)}><i class="fa fa-pencil-square-o" aria-hidden="true" ></i>Disapproved</a>
                        <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                    </div>}
                    {(res.status!=2 && res.sttaus!=4) && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {res.status==1 && <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,0)}><i class="fa fa-eye" aria-hidden="true" ></i>Inactive</a>}
                        {res.status==0 && <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,1)}><i class="fa fa-eye" aria-hidden="true" ></i>Active</a>}
                    </div>}
                  </div>
                </div>
                </td></tr>)
    })
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="Vendor Information"/>
          <div class="ttl_cards">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr1">
                  <div class="icon">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>26</span>
                  </div>
                  <div class="ttl">
                    <p>Total Registration</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr2">
                  <div class="icon">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>12</span>
                  </div>
                  <div class="ttl">
                    <p>Total User</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr3">
                  <div class="icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>124</span>
                  </div>
                  <div class="ttl">
                    <p>Total Subscription</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr4">
                  <div class="icon">
                    <i class="fa fa-inr" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>13</span>
                  </div>
                  <div class="ttl">
                    <p>Total Revenue</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Vendor Gig Id</th>
                  <th>Title</th>
                  <th>Category Id</th>
                  <th>Subcategory Id</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th class="ac">Action</th>
                </tr>
              </thead>
              <tbody>
              {tableContent}

              </tbody>
            </table>
          </div>
        </div>


      </div>
    );
  }
}

export default Authentication(VendorInfo);
