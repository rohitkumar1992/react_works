import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,VENDORSERVICELIST,USERID,HEADER,CHANGE_STATUS,toUpperCaseFilter} from '../../url.js';
import Moment from 'react-moment';
import BreadCrumb from '../../Component/breadcrumb';
import Pagination from "react-js-pagination";
import axios from 'axios';
import $ from 'jquery';
import Loader from '../../Component/Loader/loader';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
class SellerList extends Component {
  state={
    isLoading:false,sellerList:[],
    currentPage:1,
       total:1,itemsCountPerPage:10,pageRangeDisplayed:3
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${VENDORSERVICELIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,total:response.total,sellerList:response.data});
          setTimeout(()=>this.setState({isLoading:true}),1000)
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
    if(status==0)
    {
      name="Inactive";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${status==1?'btn-success':'btn-danger'} btn-sm`} id={`status_${Id}`} onClick={()=>this.changeStatus(Id,status)}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'vendorservicelist',
      'id':Id,
      'status':!status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var list=this.state.sellerList;
            for(var i=0;i<list.length;i++)
            {
              if(list[i].id==Id)
              {
                list[i].status=!status;
              }
            }
            this.setState({sellerList:list})
            //this.getData(1,10)
          // if(status==1)
          // {
          //   $('#status_'+Id).removeClass( "btn-success" ).addClass( "btn-danger" )
          //   $('#status_'+Id).html('Inactive');
          // }
          // if(status==0)
          // {
          //   $('#status_'+Id).removeClass( "btn-danger" ).addClass( "btn-success" );
          //   $('#status_'+Id).html('Active');
          // }
        }
    }).catch((error)=>{

    })
  }
  render() {
    const {sellerList,isLoading}=this.state;
    const tableContent=(sellerList.length>0?sellerList.map((res,key)=>{
      return(<tr key={key}>
                <td>{key+1}</td>
                <td>{res.service_id}</td>
                <td>{res.service_name}</td>
                <td>{res.parent_id}</td>
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
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                          <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                      </div>
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
          <BreadCrumb name="ServiceList"/>

          <div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Create Service<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Services</h3>

        <select ><option value="image" selected={this.state.imgSelect}>All</option><option value="video" selected={this.state.vidSelect}>Inactive</option>
<option value="video" selected={this.state.vidSelect}>Active</option>
        </select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>

          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Service Id</th>
                  <th>Service Name</th>
                  <th>Parent Id</th>
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

export default Authentication(SellerList);
