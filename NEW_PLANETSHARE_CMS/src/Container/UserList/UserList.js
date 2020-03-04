import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,USERLIST,USERID,HEADER,CHANGE_STATUS,toUpperCaseFilter} from '../../url.js';
import Moment from 'react-moment';
import BreadCrumb from '../../Component/breadcrumb';
import Pagination from "react-js-pagination";
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader';
import SearchComponent from '../../Component/SearchComponent/SearchComponent'
import cogoToast from 'cogo-toast';
class UserList extends Component {
  state={
    isLoading:false,userList:[],    currentPage:1,
        total:1,itemsCountPerPage:10,pageRangeDisplayed:3
}
// static getDerivedStateFromProps(props,state)
// {
//   console.log(state);
//   console.log(props);
// }
// getSnapshotBeforeUpdate(prevProps,prevState)
// {
//   console.log(prevState);
// }
// componentDidUpdate()
// {
//   console.log('update');
// }
  componentDidMount()
  {
    this.getData(1,'')
  }
  getData=(page,keyword)=>{
    axios.post(`${USERLIST}?page=${page}`,{
      'tag':'dash',
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,userList:response.data,total:response.total});
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
    cogoToast.loading('Updating Status').then(() => {axios.post(CHANGE_STATUS,{
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
    cogoToast.success('Status Changed Successfully');
  });
  }
  handlePageChange=(pageNumber)=>{
    this.setState({current_page: pageNumber},function()
  {
    this.getData(pageNumber,'')
  });
  }
  render() {
    const {userList,isLoading,total_pages}=this.state;
    const tableContent=(userList.length >0?userList.map((res,key)=>{
      return(<tr key={key}><td>{res.Accountid}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
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
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
                          <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
                          <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
                      </div>
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
          <BreadCrumb name="UserList"/>

          <div class="adds_area">
            <button type="button" class="s_btn" onClick={this.showModal}>Create User<i class="fa fa-plus"></i></button>
          </div>
          <SearchComponent getData={this.getData} currentPage={this.state.currentPage}/>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>User Name</th>
                  <th>Email</th>
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

export default Authentication(UserList);
// <tr>
//   <td>87</td>
//   <td>Tester</td>
//   <td>test@gmail.com</td>
//   <td>Male</td>
//   <td>2019-07-08</td>
//   <td>Application</td>
//   <td>
//     <div class="status_btn">
//       <button type="button" class="btn btn-success btn-sm">Active</button>
//     </div>
//   </td>
//   <td>
//     <select>
//       <option>Pending</option>
//       <option>In Process</option>
//       <option>Close</option>
//     </select>
//   </td>
// </tr>
// <tr>
//   <td>87</td>
//   <td>Tester</td>
//   <td>test@gmail.com</td>
//   <td>Male</td>
//   <td>2019-07-08</td>
//   <td>Application</td>
//   <td>
//     <div class="status_btn">
//       <button type="button" class="btn btn-success btn-sm">Active</button>
//     </div>
//   </td>
//   <td>
//     <div class="dropdown">
//       <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Active
//       </button>
//       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//           <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
//           <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
//           <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
//       </div>
//   </div>
//   </td>
// </tr>
// <tr>
//   <td>87</td>
//   <td>Tester</td>
//   <td>test@gmail.com</td>
//   <td>Male</td>
//   <td>2019-07-08</td>
//   <td>Application</td>
//   <td>
//     <div class="status_btn">
//       <button type="button" class="btn btn-success btn-sm">Active</button>
//     </div>
//   </td>
//   <td>
//     <a href="javascript:;"><i class="fa fa-check-square" aria-hidden="true"></i></a>
//     <a href="javascript:;"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
//   </td>
// </tr>
// <tr>
//   <td>87</td>
//   <td>Tester</td>
//   <td>test@gmail.com</td>
//   <td>Male</td>
//   <td>2019-07-08</td>
//   <td>Application</td>
//   <td>
//     <div class="status_btn">
//       <button type="button" class="btn btn-success btn-sm">Active</button>
//     </div>
//   </td>
//   <td>
//     <select>
//       <option>Pending</option>
//       <option>In Process</option>
//       <option>Close</option>
//     </select>
//   </td>
// </tr>
// <tr>
//   <td>87</td>
//   <td>Tester</td>
//   <td>test@gmail.com</td>
//   <td>Male</td>
//   <td>2019-07-08</td>
//   <td>Application</td>
//   <td>
//     <div class="status_btn">
//       <button type="button" class="btn btn-success red btn-sm">Inactive</button>
//     </div>
//   </td>
//   <td>
//     <div class="dropdown">
//       <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Active
//       </button>
//       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//           <a class="dropdown-item" href="javascript:;"><i class="fa fa-eye" aria-hidden="true"></i> View Entries</a>
//           <a class="dropdown-item" href="javascript:;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>
//           <a class="dropdown-item" href="javascript;;"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
//       </div>
//   </div>
//   </td>
// </tr>
