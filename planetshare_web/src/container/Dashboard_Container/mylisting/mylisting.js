import React, { Component } from 'react';
import axios from 'axios';
import thumb from '../../../video_thumb.png';
import { Link,withRouter} from "react-router-dom";
import {Button} from 'primereact/button';
import {VIDEOLIST,VIDEO_CHANGESTATUS} from '../../../url.js';
import VideoCards from '../videocards/videocards.js';
import ListingCards from '../listing_cards/listing_cards.js';
import './editList.css';
class VideoList extends Component {
  state={
    list:[],
    tag:'',
    active:0,
    inactive:0
  }
      componentDidMount()
      {
        var x=this.props.location.pathname;
        var lastItem = x.split("/").pop(-1);
          this.setState({tag:lastItem})
        this.handlePageChange();
      }
   handlePageChange=()=> {
   var email=localStorage.getItem('username');
     axios.post(`${VIDEOLIST}`, {
       email:email
     })
   .then(response=>{
     if(response.data.success)
     {
   var result=response.data.data;
   this.setState({
                 list:result,
                 show:true,
                 active:response.data.active_listings,inactive:response.data.inactive_listings
                 });
               }
   })
   .catch(function (error) {
     console.log(error);
   });
     }
     changeStatus=(video_id,status)=>{
          axios.post(VIDEO_CHANGESTATUS, {
           video_id:video_id,
           status:!(status)
           })
         .then(response=>{
           this.handlePageChange();
         })
         .catch(function (error) {
           console.log(error);
       });
     }
  render()
  {
    const videolist=(this.state.list.length!=0 && this.state.list.map((result,key)=>{
if(this.state.tag=="mylist" && (result.status=='1' || result.status=='0'))
{
    return(
       <ListingCards video_id={result.video_id} title={result.title} status={result.status} tag={this.state.tag} premium={result.Premium} description={result.description} price={result.Price} img_url={result.thumbnail} clicked={this.changeStatus.bind(this)}/>
    )
  }
  if(this.state.tag!="mylist")
   {
    return(
       <ListingCards video_id={result.video_id} title={result.title} status={result.status} tag={this.state.tag} premium={result.Premium} description={result.description} price={result.Price} img_url={result.thumbnail} clicked={this.changeStatus.bind(this)}/>
    )
  }
}
  ));
  const videolistrequest=(this.state.list.length!='0' && this.state.list.map((result,key)=>{
  return (
    <ListingCards title={result.title} status={result.status} premium={result.Premium} description={result.description} price={result.Price} img_url={`${result.thumbnail}`}/>
  )}
));
if(this.state.list.length==0 || (this.state.active==0 && this.state.inactive==0) )
{
  return (
    <center><div style={{marginTop:'80px'}}>

      <span style={{fontSize:'25px',padding:'10px',color:'black; margin:auto;',color:'black'}}>No Record Found</span>
       </div></center>
  )
}
else {
  return (
    <div class="card_listing" style={{marginTop:'100px'}}>
      <div class="container">
        <div class="row">
          {videolist}
        </div>
      </div>
    </div>
  )
}

  }
}
export default withRouter(VideoList);
