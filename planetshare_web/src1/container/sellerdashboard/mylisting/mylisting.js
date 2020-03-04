import React, { Component } from 'react';
import axios from 'axios';
import thumb from '../../../video_thumb.png';
import { Link} from "react-router-dom";
import {Button} from 'primereact/button';
import {VIDEOLIST,VIDEO_CHANGESTATUS} from '../../../url.js';
import SearchBar from '../../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Action from '../../../component/Action/action.js';
import VideoCards from '../videocards/videocards.js';
class VideoList extends Component {
  state={
    list:[],
    show:false,
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    pageNumber:'1',
    activeListing:'',inactiveListing:'',blockedListing:''
  }
      componentDidMount()
      {
        this.handlePageChange('1');
      }
      video_thumb(host_url)
      {
  return <a href={host_url} target="_blank"><img src={thumb} class="video_img"/></a>
      }
      action(status,video_id) {
       return (
         <div style={{textAlign:'left',marginLeft:'0px', verticalAlign:'middle'}}>
               <i className="fa fa-trash " style={{width:'2em',height:'0.01em',cursor:'pointer',color:'#d9534f'}} ></i>
               <i className="fa fa-edit" style={{width:'2em',height:'0.01em',cursor:'pointer',color:'green'}} ></i>
               <i style={{width:'2em',height:'0.01em'}} ><Action status={status} video_id={video_id}  status_change={this.statuschange.bind(this)} tag="mylist"/></i>
        </div>);
   }
   statuschange(status,video_id)
   {
     // alert(status+"---"+video_id);
     axios.post(VIDEO_CHANGESTATUS, {
         video_id:video_id,
         status:status
         })
       .then(response=>{
         this.handlePageChange(this.state.pageNumber);
       })
       .catch(function (error) {
         console.log(error);
     });
   }
   handlePageChange=(pageNumber)=> {
   var email=localStorage.getItem('username');
     axios.post(`${VIDEOLIST}?page=${pageNumber}`, {
       email:email
     })
   .then(response=>{
     if(response.data.success)
     {
   var result=response.data.data;
   this.setState({
                 activePage:result.current_page,
                 itemsCountPerPage:result.per_page,
                 totalItemsCount:result.total,
                 list:result.data,
                 show:true,
                 pageNumber:pageNumber,
                 activeListing:response.data.active_listings,
                 inactiveListing:response.data.inactive_listings,
                 blockedListing:response.data.blocked_listings
                 });
               }
   })
   .catch(function (error) {
     console.log(error);
   });
     }
     status(status)
     {
       var content='';
       if(this.props.tag!="request")
       {
         if(status=='0' || status==0 || status)
         {
           content=<img src="/img/inactive .png"  className="status_img" style={{cursor:'pointer'}}/>
          // content=<button className="btn inactive_button  btn-danger btn1"  style={{cursor:'pointer'}}>Inactive</button>;
         }
         if(status=='1' || status==1)
         {
           content=<img src="/img/active.png" className="status_img"  style={{cursor:'pointer'}}/>
           //content=<button className="btn active_button btn-success btn1"  style={{cursor:'pointer'}}>Active</button>;
         }
       }
       else
       {
         if(status=='0' || status==0 || status=='1' || status==1)
         {
           content=<img src="/img/approve.png" className="status_img"  style={{cursor:'pointer'}}/>
           //content=<button className="btn inactive_button  btn-success btn1"  style={{cursor:'pointer'}}>Approved</button>;
         }
         if(status=='2' || status==2)
         {
           content=<img src="/img/Pending.png" className="status_img"  style={{cursor:'pointer'}}/>
           //content=<button className="btn active_button btn-danger btn1"  style={{cursor:'pointer'}}>Pending</button>;
         }
         if(status=='3' || status==3)
         {
           content=<img src="/img/Rejected.png" className="status_img"  style={{cursor:'pointer'}}/>
           //content=<button className="btn active_button btn-danger btn1"  style={{cursor:'pointer'}}>Disapproved</button>;
         }
      }
       return content;
     }
  render()
  {
    const videolist=(this.state.list.length!='0' && this.state.list.map((result,key)=>{
      if(result.status=='1' || result.status=='0')
      {
    return (
      <tr>
      <td>{this.video_thumb(result.host_url)}</td>
      <td>{result.request_id}</td>
      <td>{result.title}</td>
      <td>{result.cast}</td>
      <td>{result.director}</td>
        <td>{result.Premium=='0'?'Free':'Premium'}</td>
      <td>{result.Premium=='0'?'0':result.Price}</td>
      <td >{this.status(result.status)}</td>
       <td>{this.action(result.status,result.video_id)}</td>
    </tr>)}
  }));
  const approvalrequest=(this.state.list.map((result,key)=>{
  return (
    <tr>
    <td>{this.video_thumb(result.host_url)}</td>
    <td>{result.request_id}</td>
    <td>{result.title}</td>
    <td>{result.description}</td>
    <td>{result.cast}</td>
    <td>{result.director}</td>
    <td>{result.Premium=='0'?'Free':'Premium'}</td>
    <td>{result.Premium=='0'?'0':result.Price}</td>
    <td >{this.status(result.status)}</td>
  </tr>)
}));
  const cards=( <div className="row w-100"><VideoCards value={this.state.activeListing} content="Active"/>
    <VideoCards value={this.state.inactiveListing} content="Inactive"/>
    <VideoCards value="0" content="Blocked"/></div>)
    return (
      <div className="top_div">
      <h5 className="p-4">Video List</h5>
      {this.props.tag!="request"&& <div>{cards}</div>}
      <br/><br/><br/>
      <div class="table-responsive table-hover" >
      <div class="col-md-4 float-left"><Link to="/selleraccount/upload"><button class="btn fa fa-upload btn-primary btn1">Upload</button></Link></div>
          <div class="col-md-4 float-right"><input type="text" placeholder="Search By Title Or User" style={{color:'black'}}/></div>
    {this.state.show && <table class="table">
    <thead>
      <tr>
        <th scope="col" class="font-weight-bold large">Thumbnail</th>
        <th scope="col">Request Id</th>
        <th scope="col">Title</th>
        {this.props.tag=="request"&& <th scope="col">Description</th>}
        <th scope="col">Cast</th>
        <th scope="col">Director</th>
        <th scope="col">Tag</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
        {this.props.tag!="request"&& <th scope="col">Action</th>}
      </tr>
    </thead>
      {this.props.tag!="request" && <tbody>{videolist}</tbody>}
      {this.props.tag=="request" && <tbody>{approvalrequest}</tbody>}
    </table>}
    </div>
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
export default VideoList;
