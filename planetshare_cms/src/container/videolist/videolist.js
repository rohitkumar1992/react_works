import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter,Link} from "react-router-dom";
import {Button} from 'primereact/button';
import {VIDEOLIST,VIDEO_CHANGESTATUS,VIDEO_DOWNLOAD} from '../../url.js';
import SearchBar from '../../component/searchbar/searchbar';
import Pagination from "react-js-pagination";
import Action from '../../component/Action/action.js';
import thumb from '../../video_thumb.png';
import Loader from '../../component/loader/loader.js';
import ReactJWPlayer from 'react-jw-player';
import './videolist.css';
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
    status_change_loader:false,
    video_data_host_url:""
  }
  componentWillReceiveProps(nextProps){
this.handlePageChange('1');
}
      componentDidMount()
      {
        this.handlePageChange('1');
        document.onkeydown = function(evt) {
           evt = evt || window.event;
           if (evt.keyCode == 27) {
                    document.getElementById("myNav_sell").style.height = "0%";
           }
        };
      }
      video_thumb(host_url,thumbnail,video_id)
      {
  return <img src={`${thumbnail}`} style={{width:'70px',height:'60px'}}/>
      }
      action(status,video_id,user_id,title,host_url) {
       return (
         <div style={{textAlign:'center',marginLeft:'-60px'}}>
               <i className="fa fa-trash " style={{width:'2em',height:'2em',cursor:'pointer',color:'#d9534f'}} ></i>
               {/*<i className="fa fa-eye" style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} onClick={()=>this.openNav(host_url)}></i>*/}
               <i className="fa fa-download" style={{width:'2em',height:'2em',cursor:'pointer',color:'black'}} onClick={()=>this.downloadVideo(video_id,title)}></i>
               <i style={{width:'2em',height:'2em',marginLeft:'30px'}} ><Action status={status} video_id={video_id} user_id={user_id} status_change={this.statuschange.bind(this)}/></i>
        </div>);
   }
   downloadVideo=(video_id,title)=>
   {
     axios({
       url: VIDEO_DOWNLOAD, //your url
       method: 'POST',
       responseType: 'blob', // important
       data:{video_id:video_id},
     }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', title); //or any other extension
        document.body.appendChild(link);
        link.click();
     });
   }
   statuschange(status,video_id,user_id)
   {
    this.setState({status_change_loader:true})
     axios.post(VIDEO_CHANGESTATUS, {
         video_id:video_id,
         status:status,user_id:user_id
         })
       .then(response=>{
         this.setState({status_change_loader:false});
         setTimeout(()=>this.handlePageChange(this.state.pageNumber),500);
       })
       .catch(function (error) {
         console.log(error);
     });
   }
   handlePageChange=(pageNumber,searchKeyword)=> {
   var email=localStorage.getItem('email');
     axios.post(`${VIDEOLIST}?page=${pageNumber}`, {
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
       if(status=='2' || status==2)
       {
         content=<button className="inactive_button  btn-danger"  style={{cursor:'pointer',width:'68px'}}>Pending</button>;
       }
       if(status=='3' || status==3)
       {
         content=<button className="inactive_button  btn-danger"  style={{cursor:'pointer',width:'68px'}}>Disapproved</button>;
       }
       return content;
     }
     searchHandler(e)
     {
       this.setState({search:e.target.value});
       this.handlePageChange('1',e.target.value);
     }
     openNav=(hostUrl)=> {
       this.setState({video_data_host_url:hostUrl});
     document.getElementById("myNav_sell").style.height = "36%";
     }

     closeNav=()=> {
       this.setState({video_data_host_url:""});
     document.getElementById("myNav_sell").style.height = "0%";
     }
  render()
  {
    const videolist=(this.state.list.length>0 && this.state.list.map((result,key)=>{
    return (
      <tr>
      <td>{this.video_thumb(result.host_url,result.thumbnail,result.video_id)}</td>
      <td ><Link to={`/video/details/${result.video_id}`}><a href="#" class="link_col">{result.request_id}</a></Link></td>

      <td class="ser_width">{result.title}</td>
      <td class="ser_width">{result.name}</td>
      <td class="ser_width">{result.Premium=='0'?'Free':'Premium'}</td>
      <td class="ser_width">{result.Premium=='0'?'0':result.Price}</td>
      <td class="ser_width" >{this.status(result.status)}</td>
      <td class="ser_width"> {this.action(result.status,result.video_id,result.user_id,result.title,result.host_url)}</td>
    </tr>)
  }));
  if(!this.state.loader)
  {
  return (<Loader content="Video List"/>);
  }
  else {
    return (
      <div >
      <div id="myNav_sell" class="overlay_sell">
        <a href="javascript:void(0)" class="closebtn_sell" onClick={()=>this.closeNav()}>&times;</a>
        <div class="row ">
        <ReactJWPlayer
        playerId='jw-player'
        playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
        file={this.state.video_data_host_url}
        aspectRatio="16:9"
        className="col-md-12"
        isAutoPlay="true"
        controls="false"
        /></div>
      </div>

      <SearchBar placeholder="Search By Name,Id Or Title" clicked={this.searchHandler.bind(this)} />
      <h2 >Video List</h2>
      <br/><br/><br/>
      {this.state.status_change_loader==true && <div style={{marginTop:'-30px'}}><Loader content=""/></div>}
      {this.state.status_change_loader==false && <div class="table-responsive" >
    {this.state.show && <table class="table">
    <thead >
      <tr>
        <th scope="col">Thumbnail</th>
        <th scope="col">Request Id</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Tag</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
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
export default VideoList;
