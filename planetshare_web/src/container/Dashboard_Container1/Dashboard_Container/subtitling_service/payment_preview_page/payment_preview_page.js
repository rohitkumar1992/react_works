import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {VIDEO_SUBTITLE_PREVIEW} from '../../../../url';
class Preview extends Component {
  state={
    transcode_id:'',
    video_details:[]
  }
  componentDidMount()
  {
    this.setState({transcode_id:this.props.match.params.subtitle_id})
    console.log(this.props.match.params.subtitle_id);
    axios.post(VIDEO_SUBTITLE_PREVIEW,{
      id:this.props.match.params.subtitle_id
    })
  .then(response=>{
    var result=response.data;
    if(result.success=="1")
    {
        this.setState({video_details:result.data});
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    const {video_details}=this.state;
    const link=this.props.location.pathname.split('/');
    const tag=link[4];
    if(video_details!=null)
    {
    return(
      <div style={{marginTop:'20px'}}>
                              <div class="row">
                                  <div class="col-md-3" >
                                      <div class="profile-img">
                                              <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                      </div>
                                      </div>
                                      <div class="col-md-5" >
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Transcoding Id</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.subtitle_id}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Email</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.email}</p>
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
                                                              <label>Length(in seconds)</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.video_length}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Output Foramt</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.output_file_formats}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Closed Captioning</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.closed_caption==0?false:true}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Priority</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                          <p>{video_details.priority=='0' && <td>Low</td>}
                                                          {video_details.priority=='1' && <td>Medium</td>}
                                                          {video_details.priority=='2' && <td>High</td>}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Requested By</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.AccountId}</p>
                                                          </div>
                                                      </div>
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
                                                              <label>Status</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.status=='0' && <td>Queued</td>}
                                                              {video_details.status=='1' && <td>In Progress</td>}
                                                              {video_details.status=='2' && <td>Preview Available</td>}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row" style={{background:'rgb(57, 73, 89)',padding:'5px'}}>
                                                      <div class="col-md-6">
                                                          <h4 style={{color:'white',fontSize:'26px'}}>Total Amount:</h4>
                                                          </div>
                                                          <div class="col-md-6" >
                                                            <h4 style={{color:'white',fontSize:'19px'}}>Rs. {video_details.price}</h4>
                                                          </div>
                                                      </div>
                                          </div>
                                      </div>
                                      <Link to={{
                                        pathname:"/checkout",
                                        data:{price:video_details.price,id:video_details.id,link:tag}
                                      }}><button class="btn btn-success btn-md float-right">Make Payment</button></Link>

              </div>
       );
     }
     else {
       return (<div>Loading...</div>);
     }
}
}
export default Preview;
