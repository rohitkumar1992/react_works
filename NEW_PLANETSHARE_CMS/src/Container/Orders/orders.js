import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,GETORDERS,USERID,HEADER,toUpperCaseFilter} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import Pagination from "react-js-pagination";
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
import Moment from 'react-moment';
import cogoToast from 'cogo-toast';
class UserList extends Component {
  state={
    isLoading:false,orderList:[],    currentPage:1,
        total:1,itemsCountPerPage:10,pageRangeDisplayed:3
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${GETORDERS}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,orderList:response.data,total:response.total});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  status=(Id,status)=>{
    var name="";
    if(status==null)
    {
      name="Pending";
    }
    if(status!=null)
    {
      name="Completed";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${status!=null?'btn-success':'btn-danger'} btn-sm`} id={`status_${Id}`}>{name}</button>
            </div>);
  }
  handlePageChange=(pageNumber)=>{
    this.setState({current_page: pageNumber},function()
  {
    this.getData(pageNumber,'')
  });
  }
  render() {
    const {orderList,isLoading,total_pages}=this.state;

    const tableContent=(orderList.length >0?orderList.map((res,key)=>{
      return(<tr key={key}><td>{res.order_id}</td>
                <td>{res.user_info.name}</td>
                <td>{res.pack_price}</td>
                <td><Moment filter={toUpperCaseFilter} element="span"  format="DD/MM/YYYY HH:mm" add={{hours:5.5}}>{res.created_at}</Moment></td>
                <td><Moment filter={toUpperCaseFilter} element="span" add={{ days:res.order_info.pack_expire_time,hours:5.5 }} format="DD/MM/YYYY">{res.created_at}</Moment></td>
                <td>{this.status(res.id,res.payment_id_1)}</td>
                {/*<td>
                  <div class="action_buttons">
                    <a href="javascript:" class="btn"><i class="fa fa-pencil"></i></a>
                    <a class="btn" href="javascript:"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                    <div class="dropdown">
                      <a href="javascript:" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                          <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                      </div>
                    </div>
                  </div>
                </td>*/}</tr>)
    }):<tr>
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="OrderList"/>
          <div class="adds_select">
            <h3>Orders</h3>

            <select ><option value="image" selected={this.state.imgSelect}>All</option></select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>User Name</th>
                  <th>Pack Price</th>
                  <th>Buy Date</th>
                  <th>Expire Date</th>
                  <th >Status</th>
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

export default Authentication(UserList);
