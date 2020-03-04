import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {VIDEO_DESCRIPTION_EDIT} from '../../url.js';
import ReactJWPlayer from 'react-jw-player';
// import './modal.css';

class UserDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      video_details:[]
    };
  }
componentDidMount()
{
  this.setState({id:this.props.match.params.id});
  this.getData(this.props.match.params.id);
}
  getData=(id)=>
  {
  axios.post(VIDEO_DESCRIPTION_EDIT, {
      video_id:id,
      })
    .then(response=>{
      if(response.data.success=='1')
      {
            this.setState({video_details:response.data.data[0]});
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}
status(premium)
{
  var content='';
  if(premium=='0' || premium==0)
  {
    content=<button className="inactive_button  btn-danger"  style={{cursor:'pointer',width:'73px'}}>Free</button>;
  }
  if(premium=='1' || premium==1)
  {
    content=<button className="active_button btn-primary"  style={{cursor:'pointer',width:'73px'}}>Premium</button>;
  }
  return content;
}
  render() {
    const {video_details}=this.state;
      return (
        <div>
                  <div class="row">
                            <div class="col-md-3" >
                                <div class="profile-img">
                                        <img src={video_details.thumbnail} style={{width:'180px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-5" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Request Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.request_id}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Title</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.title}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Description</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.description}</p>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Cast</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.cast}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Producer</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.producer}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Director</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.director}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Genre</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.genre}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Language</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.language}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Tag</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.tag}</p>
                                                    </div>
                                                </div>
                                                {video_details.Price!=null && <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Price</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.Price}</p>
                                                    </div>
                                                </div>}
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested At</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.created_at}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Premium</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.status(video_details.Premium)}</p>
                                                    </div>
                                                </div>

                                    </div>
                                  <div class="col-md-4">
                                  <ReactJWPlayer
                                  playerId='jw-player'
                                  playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                                  file={video_details.host_url}
                                  aspectRatio="16:9"
                                  className="col-md-12"
                                  isAutoPlay="true"
                                  controls="false"
                                  /></div>
                                </div>
        </div>
      );
  }
}
export default UserDetails;
