import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {VIDEO_TRANSCODE_PREVIEW} from '../../../../url';
class Preview extends Component {
  state={
    transcode_id:'',
    video_details:[]
  }
  componentDidMount()
  {
    this.setState({transcode_id:this.props.match.params.transcoding_id})
    console.log(this.props.match.params.transcoding_id);
    axios.post(VIDEO_TRANSCODE_PREVIEW,{
      id:this.props.match.params.transcoding_id
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
                                              <img src={`http://192.168.24.132/${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                      </div>
                                      </div>
                                      <div class="col-md-5" >
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Transcoding Id</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.transcode_id}</p>
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
                                                              <label>Preset</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.preset}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Container</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.container}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Aspect Ratio</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.aspect_ratio}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Dimension</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.width}*{video_details.height}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Priority</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.priority}</p>
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
