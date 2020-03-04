import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {GETPACKS,TAG,TOKEN,USERID,HEADER,CHANGE_STATUS,CREATEPACKS,backdropStyle,contentStyle} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader';
import  Modal from 'boron-react-modal/ScaleModal';
import SearchComponent from '../../Component/SearchComponent/SearchComponent';
import Pagination from "react-js-pagination";
import cogoToast from 'cogo-toast';
class Packs extends Component {
  state={
    isLoading:false,packList:[],
    currentPage:1,
    total:1,itemsCountPerPage:8,pageRangeDisplayed:3,pack_type:'image',vidSelect:false,imgSelect:true,err_result:[],modal_load:false,showCount:false,form_pack_type:'image'
}
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${GETPACKS}?page=${page}`,{
      'tag':TAG,
      'pack_type':this.state.pack_type,
      'searchKeyword':keyword,
      'page_limit':this.state.itemsCountPerPage,
      'user_id':USERID
    }).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({packList:response.data,currentPage:response.current_page,total:response.total});
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
  packType=(type)=>{
    if(type=="image")
    {
      this.setState({pack_type:'image',imgSelect:true,vidSelect:false},function()
    {
      this.getData(this.state.currentPage,'');
    })
    }
    else {
      this.setState({pack_type:'video',imgSelect:false,vidSelect:true},function()
    {
      this.getData(this.state.currentPage,'');
    })
    }
  }
  showModal=()=>{
       this.refs.modal.show();
   }
   hideModal=()=>{
     this.setState({err_result:[]})
       this.refs.modal.hide();
   }
   formSubmit=(e)=>{
     e.preventDefault();
     var pack_name=e.target.pack_name.value.trim();
     var pack_desc=e.target.pack_desc.value.trim();
     var pack_price=e.target.pack_price.value.trim();
     var pack_expire_time=e.target.pack_expire_time.value.trim();
     var pack_type=e.target.pack_type.value.trim();
     var pack_count=1;
     if(this.state.showCount)
     {
         pack_count=e.target.pack_count.value.trim();
     }
     var popular_content=e.target.popular_content.value.trim();
     var single_pack=e.target.apack_type.value.trim();
     var content_type=''
     var number_pattern=/^[0-9]+$/;
     if(single_pack=='')
     {
       cogoToast.error('Please Select Pack Type');
       return false;
     }
     if(popular_content=='')
     {
       cogoToast.error('Please Select Popular Content');
       return false;
     }
     if(pack_type=="video")
     {
        content_type=e.target.content_type.value.trim();
       if(content_type=='')
       {
         cogoToast.error('Content Type Field Is Mandatory');
         return false;
       }
     }
     // if(!pack_price.match(number_pattern) || !pack_count.match(number_pattern) || !pack_expire_time.match(number_pattern))
     // {
     //   cogoToast.error('Something Went Wrong');
     //   return false;
     // }
     axios.post(CREATEPACKS,{
       'tag':TAG,
        pack_type:this.state.form_pack_type,
        pack_name:pack_name,
        pack_desc:pack_desc,
        pack_expire_time:pack_expire_time,
        pack_count:pack_count,
        content_type:content_type,
        pack_price:pack_price,
        popular_content:popular_content,
        single_pack:single_pack,
        pack_expire_time:pack_expire_time,
       'user_id':USERID
     },HEADER).then((res)=>{
       if(res.data.success==3)
       {
         this.setState({err_result:res.data.error})
       }
         if(res.data.success==1)
         {
           var response=res.data;
           this.setState({modal_load:true});
           setTimeout(()=>{
             this.setState({modal_load:false,err_result:[]})
             this.refs.modal.hide();},1000);
           //setTimeout(()=>this.props.history.push('/packs'),1000)
         }
     }).catch((error)=>{

     })
   }
  render() {
    const {packList,isLoading,err_result,modal_load,pack_type}=this.state;
    const tableContent=packList.map((res,key)=>{
      return(<tr key={key}><td>{res.request_id}</td>
                <td>{res.pack_name}</td>
                <td>{res.pack_count}</td>
                <td>{res.pack_price}</td>
                <td>{res.popular_content==1?"Popular":"Normal"}</td>
                <td>{res.pack_expire_time}</td>
                {pack_type=="video" &&<td>{res.content_type}</td>}
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
    });
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="PackList"/>
          <div class="adds_area">
            <button type="button" className="s_btn" onClick={this.showModal}>Create packs<i class="fa fa-plus"></i></button>
          </div>
          <div class="adds_select">
            <h3>Packs</h3>

            <select onChange={(e)=>this.packType(e.target.value)}><option value="image" selected={this.state.imgSelect}>Image</option><option value="video" selected={this.state.vidSelect}>Video</option></select>
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
                  {!modal_load && <form class="form_control" onSubmit={this.formSubmit}>
                    <div class="field_area">
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Pack Name</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="pack_name" required/>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Description</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <textarea  name="pack_desc" required></textarea>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Category</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <select name="pack_type" required onChange={(e)=>{this.setState({form_pack_type:e.target.value})}}>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                          </select>
                        </div>
                      </div>
                      <div class="fields pack_check">
                        <div class="label">
                            <label>
                                <span>Pack Type</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <div class="field">
                            <div class="radiobox">
                              <input type="radio" id="single_pack" name="apack_type" value="1" onClick={()=>this.setState({showCount:false})} required/>
                              <label for="single_pack">Single</label>
                            </div>
                          </div>
                          <div class="field">
                            <div class="radiobox">
                              <input type="radio" id="multiple_pack" name="apack_type" value="0" onClick={()=>this.setState({showCount:true})} required/>
                              <label for="multiple_pack">Multiple</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="fields pack_check">
                        <div class="label">
                            <label>
                                <span>Popular Content</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <div class="field">
                            <div class="radiobox">
                              <input type="radio" id="y_popular_content" name="popular_content" value="1" required/>
                              <label for="y_popular_content">Yes</label>
                            </div>
                          </div>
                          <div class="field">
                            <div class="radiobox">
                              <input type="radio" id="n_popular_content" name="popular_content" value="0" required/>
                              <label for="n_popular_content">No</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.state.showCount && <div class="fields">
                        <div class="label">
                            <label>
                                <span>Count</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="pack_count" required/>
                        </div>
                      </div>}
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Price</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="pack_price" required/>
                        </div>
                      </div>
                      <div class="fields">
                        <div class="label">
                            <label>
                                <span>Expire Time(In Days)</span>
                            </label>
                        </div>
                        <div class="inputbox">
                          <input type="text" name="pack_expire_time" required/>
                        </div>
                      </div>
                      {this.state.form_pack_type=="video" &&  <div class="fields">
                          <div class="label">
                              <label>
                                  <span>Content Type</span>
                              </label>
                          </div>
                          <div class="inputbox">
                            <input type="text" name="content_type"/>
                          </div>
                        </div>}
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
                  }
                  {modal_load && <div><h3>Creating Pack.....</h3></div>}
                  <span id="error_msg" style={{color:'red'}}></span>

                </div>
              </div>
          </Modal>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Pack Id</th>
                  <th>Pack Name</th>
                  <th>Pack Count</th>
                  <th>Pack Price</th>
                  <th>Content Type</th>
                  <th>Expire Time(in days)</th>
                  {pack_type=="video" && <th>Content</th>}
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
