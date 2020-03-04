import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './payment_preview_page.css'
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
      <div class="payment_preview" style={{marginTop:'20px'}}>
        <div class="container">
          <div class="payment_table">
            <div class="profile-img">
              <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
            </div>
            <div class="table">
              <div class="table_r">
                <div class="table_c">
                  <label>Transcoding Id</label>
                </div>
                <div class="table_c">
                  <p>{video_details.subtitle_id}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Email</label>
                </div>
                <div class="table_c">
                  <p>{video_details.email}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Language</label>
                </div>
                <div class="table_c">
                  <p>{video_details.language}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Length(in seconds)</label>
                </div>
                <div class="table_c">
                  <p>{video_details.video_length}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Output Foramt</label>
                </div>
                <div class="table_c">
                  <p>{video_details.output_file_formats}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Closed Captioning</label>
                </div>
                <div class="table_c">
                  {video_details.closed_caption==0 && <p>No</p>}
                  {video_details.closed_caption==1 && <p>Yes</p>}
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Priority</label>
                </div>
                <div class="table_c">
                  <p>{video_details.priority=='0' && <td>Low</td>}
                  {video_details.priority=='1' && <td>Medium</td>}
                  {video_details.priority=='2' && <td>High</td>}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Requested By</label>
                </div>
                <div class="table_c">
                  <p>{video_details.AccountId}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Requested At</label>
                </div>
                <div class="table_c">
                  <p>{video_details.created_at}</p>
                </div>
              </div>
              <div class="table_r">
                <div class="table_c">
                  <label>Status</label>
                </div>
                <div class="table_c">
                  <p>{video_details.status=='0' && <td>Queued</td>}
                  {video_details.status=='1' && <td>In Progress</td>}
                  {video_details.status=='2' && <td>Preview Available</td>}</p>
                </div>
              </div>
              <div class="table_r last">
                <div class="table_c">
                  <label>Total Amount:</label>
                </div>
                <div class="table_c">
                  <p>Rs. {video_details.price}</p>
                </div>
              </div>
            </div>
            <div class="buttons">
              <Link to={{
                  pathname:"/checkout",
                  data:{price:video_details.price,id:video_details.id,link:tag}
                }}><button class="btn btn-success btn-md float-right">Make Payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
       );
     }
     else {
       return (<div>Loading...</div>);
     }
}
}
export default Preview;
