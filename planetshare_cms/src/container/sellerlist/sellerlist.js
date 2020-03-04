import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter,Link} from "react-router-dom";
import {Button} from 'primereact/button';
import {SELLER_LIST,VIDEO_CHANGESTATUS} from '../../url.js';
import SearchBar from '../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Loader from '../../component/loader/loader.js';

class VideoList extends Component {
  state={
    list:[],
    show:false,
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    pageNumber:'1',
    search:'',
    loader:false,
    status_change_loader:false
  }
  componentWillReceiveProps(nextProps){
this.handlePageChange('1');
}
      componentDidMount()
      {
        this.handlePageChange('1');
      }
   // statuschange(status,video_id,user_id)
   // {
   //  this.setState({status_change_loader:true})
   //   axios.post(VIDEO_CHANGESTATUS, {
   //       video_id:video_id,
   //       status:status,user_id:user_id
   //       })
   //     .then(response=>{
   //       this.setState({status_change_loader:false});
   //       setTimeout(()=>this.handlePageChange(this.state.pageNumber),500);
   //     })
   //     .catch(function (error) {
   //       console.log(error);
   //   });
   // }
   handlePageChange=(pageNumber,searchKeyword)=> {
   var email=localStorage.getItem('email');
     axios.post(`${SELLER_LIST}?page=${pageNumber}`, {
       email:email,
       searchKeyword:searchKeyword,
       request_coming_from:'dash'
     })
   .then(response=>{
   var result=response.data.data;
   setTimeout(()=>{this.setState({
                 activePage:result.current_page,
                 itemsCountPerPage:result.per_page,
                 totalItemsCount:result.total,
                 list:result.data,
                 show:true,
                 pageNumber:pageNumber,
                 loader:true
                 });
               },1000);
   })
   .catch(function (error) {
     console.log(error);
   });
     }
     status(status)
     {
       var content='';
       if(status=='0' || status==0)
       {
         content=<button className="inactive_button  btn-danger"  style={{cursor:'pointer',width:'68px'}}>Inactive</button>;
       }
       if(status=='1' || status==1)
       {
         content=<button className="active_button btn-success"  style={{cursor:'pointer',width:'68px'}}>Active</button>;
       }
       return content;
     }
     searchHandler(e)
     {
       this.setState({search:e.target.value});
       this.handlePageChange('1',e.target.value);
     }
  render()
  {
    const videolist=(this.state.list.length>0 && this.state.list.map((result,key)=>{
    return (
      <tr>
      <td ><Link to={`/seller/details/${result.user_id}`}><a href="#" class="link_col">{result.accountId}</a></Link></td>
            <td class="ser_width">{result.name}</td>
      <td class="ser_width">{result.DisplayName}</td>
      <td class="ser_width">{result.phoneNumber}</td>
      <td class="ser_width">{result.created_at}</td>
      <td class="ser_width" >{this.status(result.status)}</td>
    </tr>)
  }));
  if(!this.state.loader)
  {
  return (<Loader content="Seller List"/>);
  }
  else {
    return (
      <div >
      <SearchBar placeholder="Search By Name,Id Or Title" clicked={this.searchHandler.bind(this)} />
      <h2 >Seller List</h2>
      <br/><br/><br/>
      {this.state.status_change_loader==true && <div style={{marginTop:'-30px'}}><Loader content=""/></div>}
      {this.state.status_change_loader==false && <div class="table-responsive" >
    {this.state.show && <table class="table">
    <thead >
      <tr>
        <th scope="col">Account Id</th>
        <th scope="col">Name</th>
        <th scope="col">Display Name</th>
        <th scope="col">PhoneNumber</th>
        <th scope="col">Registered On</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    {this.state.list.length>0 && <tbody>
     {videolist}
    </tbody>}
    {this.state.list.length<=0 && <tbody>
     No result Found
    </tbody>}
    </table>}
    </div>}
    {this.state.totalItemsCount > this.state.itemsCountPerPage &&<div className="d-flex justify-content-end">
    <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={this.state.totalItemsCount}
              pageRangeDisplayed={this.state.pageRangeDisplayed}
              onChange={this.handlePageChange}
              itemClass='page-item'
              linkClass="page-link bold"
            /></div>}
    </div>

    )
  }
  }
}
export default VideoList;
