import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,SELLERLIST,USERID,HEADER,CHANGE_STATUS,SELLER_VENDOR_INFO,backdropStyle,contentStyle,toUpperCaseFilter} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import Loader from '../../Component/Loader/loader';
import Pagination from "react-js-pagination";
import axios from 'axios';
import $ from 'jquery';
import Moment from 'react-moment';
import  Modal from 'boron-react-modal/ScaleModal';
import Portal from '../../Component/Portal/portal';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
import cogoToast from 'cogo-toast';
class SellerList extends Component {
  state={
    isLoading:false,sellerList:[],
    currentPage:1,
       total:1,itemsCountPerPage:10,pageRangeDisplayed:3,show_seller_desc:false,seller_desc:[]
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${SELLERLIST}?page=${page}`,{
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
      cogoToast.loading('Updating Status').then(() => {axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'sellerlist',
      'id':Id,
      'status':status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          // var list=this.state.sellerList;
            // for(var i=0;i<list.length;i++)
            // {
            //   if(list[i].id==Id)
            //   {
            //     list[i].status=!status;
            //   }
            // }
            // this.setState({sellerList:list});
            this.getData(this.state.currentPage,'')
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
    cogoToast.success('Status Changed Successfully');
  });
  }
   getSellerInfo=(id)=>{
     axios.post(`${SELLER_VENDOR_INFO}`,{
       'tag':'dash',
       'id':id,
       'login_type':'seller',
       'user_id':USERID
     },HEADER).then((res)=>{
         if(res.data.success==1)
         {
           var response=res.data;
           this.setState({seller_desc:response.data,show_seller_desc:true});
           $("#portal_modal").addClass("show")
         }
     }).catch((error)=>{

     })
   }
  render() {
    const {sellerList,isLoading}=this.state;
    const tableContent=(sellerList.length>0?sellerList.map((res,key)=>{
      return(<tr key={key} onClick={()=>this.getSellerInfo(res.id)}><td>{res.Accountid}</td>
                <td>{res.display_name}</td>
                <td>{res.phone_number}</td>
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
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="SellerList"/>
          {(this.state.show_seller_desc) &&<Portal  result={this.state.seller_desc} modalType="seller_info"  onChange={()=>{this.setState({show_seller_desc:false,seller_desc:[]})}}></Portal>}
          <div class="adds_area">
            <button type="button" class="s_btn" >Add Seller<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Sellers</h3>
            <select ><option value="image" selected={this.state.imgSelect}>All</option><option value="video" selected={this.state.vidSelect}>Active</option>
            <option value="language" selected={this.state.langSelect}>Inactive</option></select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Seller Id</th>
                  <th>User Name</th>
                  <th>Mobile</th>
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
