import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,GETBIDLIST,USERID,HEADER,CHANGE_STATUS,IMAGEDATA,backdropStyle,contentStyle,toUpperCaseFilter} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import Loader from '../../Component/Loader/loader'
import axios from 'axios';
import  Modal from 'boron-react-modal/ScaleModal';
import Moment from 'react-moment';
import $ from 'jquery';
import Pagination from "react-js-pagination";
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
class SellerImageList extends Component {
  state={
    isLoading:false,bidList:[],
    currentPage:1,
    total:1,itemsCountPerPage:10,pageRangeDisplayed:3,image_data:{}
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${GETBIDLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,total:response.total,bidList:response.data});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
    }).catch((error)=>{

    })
  }
  status=(status)=>{
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
    if(status==4)
    {
      name="Inqueue";
      btn_name="btn-info";
    }

      return( <div class="status_btn">
              <button type="button" className={`btn ${btn_name} btn-sm`}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'bidding',
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
  showModal=(image_id)=>{
    axios.post(IMAGEDATA,{
      'tag':'dash',
      'user_id':USERID,
      'image_id':image_id,
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          this.setState({image_data:res.data.data},function()
        {
            this.refs.modal.show();
        })
        }
        else {

        }
    }).catch((error)=>{

    })
   }
  render() {
    const {bidList,isLoading,image_data}=this.state;
      const object_check=$.isEmptyObject(image_data)
    const tableContent=(bidList.length>0?bidList.map((res,key)=>{
      return(<tr key={key}>
                <td onClick={()=>{this.props.history.push(`/seller/bidding/bid_desc/${res.id}`)}} style={{cursor:'pointer'}}><img src={res.poster_url} style={{width:'60px'}}/></td>
                <td>{res.request_id}</td>
                <td>{res.main_title.title}</td>
                <td>{res.production_studios}</td>
                {res.box_office_price!=null && <td><i className={res.box_office_price.currency=="USD"?"fa fa-usd":"fa fa-inr"}></i>&nbsp;{res.box_office_price.price}</td>}
                {res.box_office_price==null && <td>Not Defined</td>}
                <td><Moment filter={toUpperCaseFilter} element="span"  format="DD/MM/YYYY HH:mm" add={{hours:5.5}}>{res.created_at}</Moment></td>
                <td>{this.status(res.status)}</td>
                <td>
                <div class="action_buttons">
                  <a href="javascript:" class="btn"><i class="fa fa-pencil"></i></a>
                  <a class="btn" href="javascript:"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                  <div class="dropdown">
                    <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <td colspan="8"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="BidList"/>
          {/*<div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Add Image<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Images</h3>
            <select ><option value="image" selected={this.state.imgSelect}>All</option><option value="video" selected={this.state.vidSelect}>Inqueue</option>
            <option value="language" selected={this.state.langSelect}>Pending</option>
            <option value="language" selected={this.state.langSelect}>Active</option>
            <option value="language" selected={this.state.langSelect}>Inactive</option></select>
          </div>*/}
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          {/*<Modal className="m_show vd_dsc" ref="modal"  backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <div class="modal-content" style={{}}>
                <div class="modal-header text-center">
                  <h4 class="modal-title">Image Description ({image_data.request_id})</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="vd_info_desc">
                  <div class="box l">
                    <div class="img_box">
                      <img src={image_data.large_thumb} style={{width:350,height:250}}/>
                    </div>
                  </div>
                  <div class="box r">
                    <ul class="vd_info_list">
                      <li>
                        <p><span>Seller Name :</span> <span class="vl">{image_data.seller_name}</span></p>
                      </li>
                      <li>
                        <p><span>Request Id :</span> <span class="vl">{image_data.request_id}</span></p>
                      </li>
                      <li>
                        <p><span>Artist Name :</span> <span class="vl">{image_data.artist_name}</span></p>
                      </li>
                      <li>
                        <p><span>Title :</span> <span class="vl">{image_data.title}</span></p>
                      </li>
                      <li>
                        <p><span>Dimension :</span> <span class="vl">{image_data.dimension}</span>
                        <span>Size :</span> <span class="vl">{image_data.size} bytes</span>
                        <span>Extension :</span> <span class="vl">{image_data.extension}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Keywords :</span>
                          {!object_check && image_data.keywords.split(',').map((res,key)=>{
                            return(<a href="javascript:" class="btn btn_catlist" key={key}>{res}</a>)
                          })}
                        </p>
                      </li>
                      <li>
                      <p>
                      <span>Category :</span>
                      {!object_check &&<a href="javascript:" class="btn btn_catlist">{image_data.get_image_cat.name}</a>}
                      </p>
                      </li>
                      <li>
                        <p>
                        <span>License Rights :</span>
                        {!object_check && image_data.license_rights.split(',').map((res,key)=>{
                          return(<a href="javascript:" class="btn btn_catlist" key={key}>{res}</a>)
                        })}
                        </p>
                      </li>
                      <li>
                        <p><span>Short Description :</span> <span class="vl">{image_data.short_desc}</span></p>
                      </li>
                      <li>
                        <p><span>Description :</span> <span class="vl">{image_data.description}</span></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </Modal>*/}
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Thumburl</th>
                  <th>Bid Id</th>
                  <th>Title</th>
                  <th>Production Studio</th>
                  <th>Price</th>
                  <th>Register Date</th>
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

export default Authentication(SellerImageList);
