import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,CONTACTLIST,USERID,HEADER,CHANGE_STATUS,toUpperCaseFilter,backdropStyle,contentStyle} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import Pagination from "react-js-pagination";
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader';
import  Modal from 'boron-react-modal/ScaleModal';
import Moment from 'react-moment';
import cogoToast from 'cogo-toast';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
class UserList extends Component {
  state={
    isLoading:false,contactList:[],    currentPage:1,
        total:1,itemsCountPerPage:10,pageRangeDisplayed:3,searchKeyword:'',contact_data:[]
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${CONTACTLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,contactList:response.data,total:response.total});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  status=(Id,status)=>{
    var name="";
    if(status==1)
    {
      name="Resolved";
    }
    if(status==0)
    {
      name="Pending";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${status==1?'btn-success':'btn-danger'} btn-sm`} id={`status_${Id}`} onClick={()=>this.changeStatus(Id,status)}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    cogoToast.loading('Updating Status').then(() => {axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'contactquery',
      'id':Id,
      'status':!status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var list=this.state.contactList;
            for(var i=0;i<list.length;i++)
            {
              if(list[i].id==Id)
              {
                list[i].status=!status;
              }
            }
            this.setState({contactList:list});
        }
    }).catch((error)=>{

    })
    cogoToast.success('Status Changed Successfully');
  });
  }
  handlePageChange=(pageNumber)=>{
    this.setState({current_page: pageNumber},function()
  {
    this.getData(pageNumber,'')
  });
  }
  showModal=(contact_id)=>{
    let contactList=this.state.contactList.filter((data)=>data.id==contact_id);
  this.setState({contact_data:contactList[0]},function()
  {this.refs.modal.show();
});
   }
   hideModal=()=>{
     this.setState({err_result:[]})
       this.refs.modal.hide();
   }
  render() {
    const {contactList,isLoading,total_pages,contact_data}=this.state;
    const tableContent=(contactList.length >0?contactList.map((res,key)=>{
      return(<tr key={key}><td onClick={()=>{this.showModal(res.id)}} style={{cursor:'pointer'}}>{res.request_id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone_number}</td>
                <td><Moment filter={toUpperCaseFilter} element="span"  add={{ hours: 5.5 }} format="DD/MM/YYYY HH:mm">{res.created_at}</Moment></td>
                <td>{this.status(res.id,res.status)}</td></tr>)
    }):<tr>
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="ContactList"/>
          <div class="adds_select">
            <h3>Contacts</h3>

            <select ><option value="image" selected={this.state.imgSelect}>All</option></select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <Modal className="m_show model_s" ref="modal"  backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <div class="modal-content" style={{}}>
                <div class="modal-header text-center">
                  <h4 class="modal-title">Query Information ({contact_data.request_id})</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="vd_info_desc">
                  {/*<div class="box l">
                    <div class="img_box">
                      <img src={image_data.large_thumb} style={{width:350,height:250}}/>
                    </div>
                  </div>*/}

                    <ul class="vd_info_list">
                      <li>
                        <p><span>User Name :</span> <span class="vl">{contact_data.name}</span></p>
                      </li>
                      <li>
                        <p><span>Request Id :</span> <span class="vl">{contact_data.request_id}</span></p>
                      </li>
                      <li>
                        <p><span>Email:</span> <span class="vl">{contact_data.email}</span></p>
                      </li>
                      <li>
                        <p><span>Phone Number :</span> <span class="vl">{contact_data.phone_number}</span></p>
                      </li>
                      <li>
                        <p><span>Subject :</span> <span class="vl">{contact_data.subject}</span></p>
                      </li>
                      <li>
                        <p><span>Message :</span> <span class="vl">{contact_data.message}</span></p>
                      </li>
                      <li>
                      <p>
                        <span>Request At :</span> <span class="vl">{contact_data.created_at}</span>
                        </p>
                      </li>

                    </ul>

                </div>
              </div>
          </Modal>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Request Id</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Request At</th>
                  <th>Status</th>
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
