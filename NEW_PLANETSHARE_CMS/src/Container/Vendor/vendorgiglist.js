import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,VENDORGIGLIST,USERID,HEADER,CHANGE_STATUS,GIGINFO,backdropStyle,contentStyle,toUpperCaseFilter} from '../../url.js';
import Moment from 'react-moment';
import BreadCrumb from '../../Component/breadcrumb';
import axios from 'axios';
import $ from 'jquery';
import Loader from '../../Component/Loader/loader';
import  Modal from 'boron-react-modal/ScaleModal';
import Pagination from "react-js-pagination";
import ReactJWPlayer from 'react-jw-player';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
class VendorInfo extends Component {
  state={
    isLoading:false,vendorinfo:[],
    currentPage:1,
    total:1,itemsCountPerPage:10,pageRangeDisplayed:3,
    vendor_id:0,gig_data:[]
}
  componentDidMount()
  {
    this.setState({vendor_id:this.props.match.params.vendor_id},function(){this.getData(1,'')});
  }
  getData=(page,keyword)=>{
    axios.post(`${VENDORGIGLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID,
      'vendor_id':this.state.vendor_id
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,total:response.total,vendorinfo:response.data});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  status=(Id,status)=>{
    var name="";
    var btn_name="btn-success";
    if(status==1)
    {
      name="Active";
    }
    if(status==2)
    {
      name="Pending";
      btn_name="btn-primary";
    }
    if(status==0)
    {
      name="Inactive";
      btn_name="btn-danger";
    }
    if(status==3)
    {
      name="Disapproved";
      btn_name="btn-danger";
    }
      return( <div class="status_btn">
              <button type="button" className={`btn ${btn_name} btn-sm`}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'vendorgiglist',
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
  showModal=(gig_id,vendor_id)=>{
    axios.post(GIGINFO,{
      'tag':'dash',
      'user_id':USERID,
      'gig_id':gig_id,
      'vendor_id':vendor_id
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          this.setState({gig_data:res.data.data},function()
        {
            this.refs.modal.show();
        })
        }
        else {

        }
    }).catch((error)=>{

    })
   }
   hideModal=()=>{
     this.setState({err_result:[]})
       this.refs.modal.hide();
   }
  render() {
    const {vendorinfo,isLoading,gig_data}=this.state;
    const tableContent=(vendorinfo.length>0?vendorinfo.map((res,key)=>{
      return(<tr key={key}><td onClick={()=>this.showModal(res.id,res.vendor_id)} style={{cursor:'pointer'}}>{res.vendor_service_gigs_id}</td>
                <td>{res.gig_title}</td>
                <td>{res.vendor_name}</td>
                <td><Moment filter={toUpperCaseFilter} element="span"  format="DD/MM/YYYY HH:mm" add={{hours:5.5}}>{res.created_at}</Moment></td>
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
    }):<tr>
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="Vendor Gigs List"/>

          <div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Create Gig<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Gigs</h3>

            <select ><option value="image" selected={this.state.imgSelect}>All</option><option value="video" selected={this.state.vidSelect}>Inqueue</option>
            <option value="language" selected={this.state.langSelect}>Pending</option>
            <option value="language" selected={this.state.langSelect}>Active</option>
            <option value="language" selected={this.state.langSelect}>Inactive</option></select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <Modal className="m_show model_s_gig" ref="modal"  backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title">Gig Description</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <ReactJWPlayer
                style={{backgroundColor:'grey'}}
                ref={(ref) => { this.player = ref }}
                playerId='jw-player'
                image={`${gig_data.gig_image_1}`}
                playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                file={gig_data.gig_video_url}
                aspectRatio="16:9"
                isAutoPlay={true}
                controls={true}
                repeat="true"
                  customProps={{
                    controls: true,
                    repeat: true,
                    stretching: 'fill',
                    preload: 'auto',
                    volume: 100,
                    width: '100%',
                    height: '100%',
                }}
                />
              </div>
          </Modal>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Gig Id</th>
                  <th>Title</th>
                  <th>Vendor Name</th>
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
    );
  }
 else {
   return(<div id="content"><Loader/></div>);
 }
  }
}

export default Authentication(VendorInfo);
