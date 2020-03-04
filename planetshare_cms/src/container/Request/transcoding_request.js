import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter} from "react-router-dom";
import {Button} from 'primereact/button';
import {TRANSCODE_ORDERS,TRANSCODE_ORDERS_STATUS,VIDEO_DOWNLOAD,TRANSCODE_VIDEO_DOWNLOAD} from '../../url.js';
import SearchBar from '../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Action from '../../component/Action/action.js';
import {Link,withRouter} from 'react-router-dom';
import thumb from '../../video_thumb.png';
import Loader from '../../component/loader/loader.js';
import SuccessAlert from '../../component/flashmessages/successalert';
import './request.css';
import Echo from 'laravel-echo';
class Request extends Component {
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
    statusMessage:'',
    status_change_loader:false
  }
  componentWillReceiveProps(nextProps){
this.handlePageChange('1');
}
      componentDidMount()
      {
        this.handlePageChange('1');
        // Echo.private('new-post').listen('PostCreated',(e)=>{
        //   console.log(e);
        // })
      }
      video_thumb(host_url,thumbnail,video_id)
      {
  return <img src={`${thumbnail}`} style={{width:'70px',height:'60px'}}/>
      }
      action(status,transcode_id,payment_id,file_name) {
          var payment_status=payment_id==null?6:status;
       return (
         <div style={{textAlign:'center',marginLeft:'-60px'}}>
               <i className="fa fa-trash " style={{width:'2em',height:'2em',cursor:'pointer',color:'#d9534f'}} ></i>
               <i className="fa fa-edit" style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} ></i>
               <i style={{width:'2em',height:'2em'}} ><Action tag="services_transcode" file_name={file_name} status={payment_status}  id={transcode_id} download_video={this.downloadVideo.bind(this)} status_change={this.statuschange.bind(this)}/></i>
        </div>);
   }
   downloadVideo=(video_id,title)=>
   {
     axios({
       url: TRANSCODE_VIDEO_DOWNLOAD, //your url
       method: 'POST',
       responseType: 'blob', // important
       data:{transcode_id:video_id},
     }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', title); //or any other extension
        document.body.appendChild(link);
        link.click();
     });
   }
   statuschange(status,transcode_id)
   {
      this.setState({status_change_loader:true})
     axios.post(TRANSCODE_ORDERS_STATUS, {
         transcode_id:transcode_id,
         status:status
         })
       .then(response=>{
         this.setState({statusMessage:'Status Updated',status_change_loader:false});
         this.handlePageChange(this.state.pageNumber);
       })
       .catch(function (error) {
         console.log(error);
     });
   }
   handlePageChange=(pageNumber,searchKeyword)=> {
   var email=localStorage.getItem('email');
     axios.post(`${TRANSCODE_ORDERS}?page=${pageNumber}`, {
       email:email,
       searchKeyword:searchKeyword,
       request_coming_from:'web'
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
                 loader:true,
                 statusMessage:''
                 });
               },1500);
   })
   .catch(function (error) {
     console.log(error);
   });
     }
     status(status,payment_id)
     {
       var content='';
       if(payment_id==null)
       {
         return <button className="inactive_button  btn-primary but_1"  style={{cursor:'pointer',width:'116px',height:'28px'}}>Payment Pending</button>
       }
       if(status=='0' || status==0)
       {
         content=<button className="inactive_button  btn-danger but_1"  style={{cursor:'pointer',width:'116',height:'28px'}}>Queued</button>;
       }
       if(status=='1' || status==1)
       {
         content=<button className="active_button btn-primary but_1"  style={{cursor:'pointer',width:'116px',height:'28px'}}>In Progress</button>;
       }
       if(status=='2' || status==2)
       {
         content=<button className="inactive_button  btn-success but_1"  style={{cursor:'pointer',width:'116px',height:'28px'}}>Completed</button>;
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
    <td ><Link to={`/services/transcoding/details/${result.id}`}><a href="#" class="link_col">{result.transcode_id}</a></Link></td>
      <td class="ser_width"> {result.email}</td>
      <td class="ser_width">{result.preset}</td>
      <td class="ser_width">{this.status(result.status,result.payment_id)}</td>
      <td class="ser_width">{result.created_at}</td>
      <td class="ser_width">{this.action(result.status,result.id,result.payment_id,result.file_name)}</td>
    </tr>)
  }));
  if(!this.state.loader)
  {
  return (<Loader content="Transcoding List"/>);
  }
  else {
    return (
      <div>
      { <SuccessAlert title={this.state.statusMessage} />}
      <SearchBar placeholder="Search By Anything" clicked={this.searchHandler.bind(this)} />
      <h2 >Transcoding List</h2>
      <br/><br/><br/>
      {this.state.status_change_loader==true && <div style={{marginTop:'-30px'}}><Loader content=""/></div>}
      {this.state.status_change_loader==false && <div class="table-responsive" >
    {this.state.show && <table class="table">
    <thead class="tr_1">
      <tr>
        <th  scope="col">Transcoding Id</th>
        <th scope="col">Requested By</th>
        <th scope="col">Preset</th>
        <th scope="col">Status</th>
        <th scope="col">Requested At</th>
        <th scope="col">Action</th>
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
export default withRouter(Request);
