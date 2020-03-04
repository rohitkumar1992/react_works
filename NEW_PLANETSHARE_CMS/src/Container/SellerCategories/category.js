import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {GETCATEGORIES,TAG,TOKEN,USERID,HEADER,CHANGE_STATUS,CREATECATEGORY,backdropStyle,contentStyle,toUpperCaseFilter} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader';
import  Modal from 'boron-react-modal/ScaleModal';
import Moment from 'react-moment';
import Pagination from "react-js-pagination";
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
import cogoToast from 'cogo-toast';

class Packs extends Component {
  state={
    isLoading:false,catList:[],
    currentPage:1,
    total:1,itemsCountPerPage:8,pageRangeDisplayed:3,cat_type:'image',langSelect:false,vidSelect:false,imgSelect:true,imgs:[],btn_disabled:false,err_result:[]
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${GETCATEGORIES}?page=${page}`,{
      'tag':this.state.cat_type,
      'page_limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    }).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({catList:response.data,currentPage:response.current_page,total:response.total});
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
              <button type="button" className={`btn ${status==1?'btn-success':'btn-danger'} btn-sm`} id={`status_${Id}`}>{name}</button>
            </div>);
  }
  changeStatus=(Id,status)=>{
    return false;
    axios.post(CHANGE_STATUS,{
      'tag':'dash',
      'user_id':USERID,
      'role':'userlist',
      'id':Id,
      'status':!status
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var list=this.state.userList;
            for(var i=0;i<list.length;i++)
            {
              if(list[i].id==Id)
              {
                list[i].status=!status;
              }
            }
            this.setState({userList:list});
        }
    }).catch((error)=>{

    })
  }
  catType=(type)=>{
    if(type=="image")
    {
      this.setState({cat_type:'image',imgSelect:true,vidSelect:false,langSelect:false},function()
    {
      this.getData(1);
    })
    }
    else if(type=="video") {
      this.setState({cat_type:'video',imgSelect:false,vidSelect:true,langSelect:false},function()
    {
      this.getData(1);
    })
    }
    else{
      this.setState({cat_type:'language',imgSelect:false,vidSelect:false,langSelect:true},function()
    {
      this.getData(1);
    })
    }
  }
  formSubmit=(e)=>{
    e.preventDefault();
    this.setState({btn_disabled:true});
    var formData=new FormData();
    formData.append('user_id',USERID);
    formData.append('tag',this.state.cat_type);
    formData.append('desc',e.target.cat_desc.value);
    formData.append('icon',e.target.cat_icon.value);
    formData.append('name',e.target.cat_name.value);
    formData.append('file',this.state.imgs[0]);
    axios.post(CREATECATEGORY,formData,HEADER).then((res)=>{
        if(res.data.success==3)
        {
          this.setState({btn_disabled:false,err_result:res.data.error});
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        }
        else if(res.data.success==1)
        {
          this.refs.modal.hide();
            cogoToast.success('Category Created Successfully');
            this.setState({btn_disabled:false},function()
          {
            this.getData(this.state.currentPage,'')
          });
        }
        else {

        }
    }).catch((error)=>{

    })

  }
  showModal=()=>{
       this.refs.modal.show();
   }
   hideModal=()=>{
     this.setState({err_result:[]})
       this.refs.modal.hide();
   }
   _onChange= (event)=>{
     if(event.target.files.length>1)
     {
     alert('Maximum one file is allowed');
       return false;
     }
     this.setState({
         imgs: event.target.files
     })
 }
  render() {
    const {catList,isLoading,err_result}=this.state;
    const tableContent=(catList.length>0?catList.map((res,key)=>{
      return(<tr key={key}>
                <td><img src={res.large_img} style={{width:'60px',height:'50px'}}/></td>
                <td>{res.requestid}</td>
                <td>{res.name}</td>
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
                          <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                      </div>
                    </div>
                  </div>
                </td>
                </tr>)
    }):<tr>
        <td colspan="6"><span class="noresult">No Result Found</span></td>
      </tr>)
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="CategoryList"/>
          <div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Add Category<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Category</h3>
            <select onChange={(e)=>this.catType(e.target.value)}><option value="image" selected={this.state.imgSelect}>Image</option><option value="video" selected={this.state.vidSelect}>Video</option>
            <option value="language" selected={this.state.langSelect}>Language</option></select>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <Modal className="m_show" ref="modal"  backdropStyle={backdropStyle} contentStyle={contentStyle}>
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header text-center">
                    <h4 class="modal-title">Create Category</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form class="form_control" onSubmit={this.formSubmit}>
                    <div class="field_area">
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Category Name</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="cat_name" required/>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Icon</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="cat_icon" required/>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Description</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <textarea  name="cat_desc" required></textarea>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Category Type</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <select name="pack_type" required onChange={(e)=>{this.setState({cat_type:e.target.value})}}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="build_gal">
                        <div class="upload_area">
                            <label>Thumbnail <span>Upload thumbnail that describe or are related to your category.</span></label>
                            <ul class="browse_list">
                                <li>
                                    <div class="upl_box">
                                        <div class="drag_area">
                                            <span>Drag a Photo or</span>
                                            <label for="gig_upload">
                                            <input
                                                ref="file"
                                                type="file"
                                                name="user[image]"
                                                accept="image/*"
                                                id="gig_upload"
                                                required
                                                onChange={this._onChange}/>
                                                <input type="file"  />
                                                <span>Browse</span>
                                                {this.state.imgs && [...this.state.imgs].map((file)=>(
                                                      <img src="" id="upload_img"  src={URL.createObjectURL(file)} alt="" />   ))}

                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                      <div class="modal-footer">
                      {err_result.length >0 && <div class="error_box">
                              <ul>
                                {err_result.map((res,key)=>{
                                  return(<li key={key}><p>{res}</p></li>)
                                })}
                              </ul>
                            </div>}
                        <button type="submit"  class="btn btndefault" disabled={this.state.btn_disabled}>Save</button>
                      </div>

                  </form>
                  <span id="error_msg" style={{color:'red'}}></span>

                </div>
              </div>
          </Modal>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Request Id</th>
                  <th>Category Name</th>
                  <th>Created At</th>
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

export default Authentication(Packs);
