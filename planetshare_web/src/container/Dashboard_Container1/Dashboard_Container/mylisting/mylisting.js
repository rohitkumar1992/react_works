import React, { Component } from 'react';
import axios from 'axios';
import thumb from '../../../video_thumb.png';
import { Link,withRouter} from "react-router-dom";
import {Button} from 'primereact/button';
import {VIDEOLIST,VIDEO_CHANGESTATUS} from '../../../url.js';
import VideoCards from '../videocards/videocards.js';
import ListingCards from '../listing_cards/listing_cards.js';
class VideoList extends Component {
  state={
    list:[],
    tag:''
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

    const videolist=(this.state.list.length!='0' && this.state.list.map((result,key)=>{
    return (
      <ListingCards video_id={result.video_id} title={result.title} status={result.status} tag={this.state.tag} premium={result.Premium} description={result.description} price={result.Price} img_url={`http://192.168.24.132/${result.thumbnail}`} clicked={this.changeStatus.bind(this)}/>
    )}
  ));
  const videolistrequest=(this.state.list.length!='0' && this.state.list.map((result,key)=>{
  return (
    <ListingCards title={result.title} status={result.status} premium={result.Premium} description={result.description} price={result.Price} img_url={`http://192.168.24.132/${result.thumbnail}`}/>
  )}
));

    return (
      <div class="home_dashboard mt-4">
          <div class="row">
      {videolist}
      </div>
    </div>
    )
  }
}
export default withRouter(VideoList);
