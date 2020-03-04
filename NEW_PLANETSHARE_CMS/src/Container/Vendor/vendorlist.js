import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,VENDORLIST,USERID,HEADER,CHANGE_STATUS,SELLER_VENDOR_INFO,toUpperCaseFilter} from '../../url.js';
import Moment from 'react-moment';
import Pagination from "react-js-pagination";
import BreadCrumb from '../../Component/breadcrumb';
import axios from 'axios';
import $ from 'jquery';
import Loader from '../../Component/Loader/loader';
import Portal from '../../Component/Portal/portal';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
class VendorList extends Component {
  state={
    isLoading:false,vendorList:[],
    currentPage:1,
    total:1,itemsCountPerPage:10,pageRangeDisplayed:3,show_vendor_desc:false,vendor_desc:[]
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${VENDORLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,vendorList:response.data,total:response.total});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  status=(Id,status)=>{
    var name="";
    var btn_name='';
    if(status==1)
    {
      btn_name="btn-success"
      name="Active";
    }
    if(status==0)
    {
      btn_name="btn-danger"
      name="Inactive";
    }
    if(status==2)
    {
      btn_name="btn-primary"
      name="Pending";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${btn_name} btn-sm`} id={`status_${Id}`}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'vendorlist',
      'id':Id,
      'status':status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
  this.getData(this.state.currentPage,'')
        }
    }).catch((error)=>{

    })
  }
  getVendorInfo=(id)=>{
    axios.post(`${SELLER_VENDOR_INFO}`,{
      'tag':'dash',
      'id':id,
      'login_type':'vendor',
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data;
          this.setState({vendor_desc:response.data,show_vendor_desc:true});
          $("#portal_modal").addClass("show")
        }
    }).catch((error)=>{

    })
  }
  handlePageChange=(pageNumber)=>{
    this.setState({current_page: pageNumber},function()
  {
    this.getData(pageNumber)
  });
  }
  render() {
    const {vendorList,isLoading}=this.state;
    const tableContent=(vendorList.length>0?vendorList.map((res,key)=>{
      return(<tr key={key}>
                <td  onClick={()=>this.getVendorInfo(res.id)}><img src={res.profile_pic} style={{width:'60px',height:'50px'}}/></td>
                <td><Link to={`/vendor/info/${res.id}`}>{res.Accountid}</Link></td>
                <td>{res.fname}&nbsp;{res.lname}</td>
                <td>{res.phone_number==null?"None":res.phone_number}</td>
                <td><Moment filter={toUpperCaseFilter} element="span"  format="DD/MM/YYYY HH:mm" add={{hours:5.5}}>{res.created_at}</Moment></td>
                <td>{this.status(res.id,res.status)}</td>
                <td>
                <div class="action_buttons">
                  <a href="javascript:" class="btn"><i class="fa fa-pencil"></i></a>
                  <a class="btn" href="javascript:"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                  <div class="dropdown">
                    <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    {res.status==2 && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,1)}><i class="fa fa-eye" aria-hidden="true"></i>Approved</a>
                    </div>}
                    {(res.status!=2) && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {res.status==1 && <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,0)}><i class="fa fa-eye" aria-hidden="true" ></i>Inactive</a>}
                        {res.status==0 && <a class="dropdown-item" href="javascript:;" onClick={()=>this.changeStatus(res.id,1)}><i class="fa fa-eye" aria-hidden="true" ></i>Active</a>}
                    </div>}
                  </div>
                </div>
                </td></tr>)
    }):<tr>
        <td colspan="7"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="VendorList"/>
          {(this.state.show_vendor_desc) &&<Portal  result={this.state.vendor_desc} modalType="vendor_info"  onChange={()=>{this.setState({show_vendor_desc:false,vendor_desc:[]})}}></Portal>}
          <div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Add Vendor<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Vendors</h3>

            <select ><option value="image" selected={this.state.imgSelect}>All</option><option value="video" selected={this.state.vidSelect}>Inactive</option>
    <option value="video" selected={this.state.vidSelect}>Active</option>
            </select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>

          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Profile Pic</th>
                  <th>Vendor Id</th>
                  <th>Vendor Name</th>
                  <th>Phone Number</th>
                  <th>Register Date</th>
                  <th>Status</th>
                  <th class="ac">Action</th>
                </tr>
              </thead>
              <tbody>
              {tableContent}

              </tbody>
            </table>
            <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.getData}
                      itemClass='page-item'
                      linkClass="page-link bold"
                    />
          </div>
        </div>
      </div>
    );
  }
 else {
   return(<div id="content"><Loader/></div>);
 }
  }
}

export default Authentication(VendorList);
