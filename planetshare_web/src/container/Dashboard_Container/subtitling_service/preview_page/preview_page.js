import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../service_preview_page.css';
import {VIDEO_SUBTITLE_PREVIEW,SUBTITLE_VIDEO_DOWNLOAD} from '../../../../url';
class Preview extends Component {
  state={
    transcoding_id:'',
    video_details:[]
  }
  componentDidMount()
  {
    console.log(this.props.match.params.subtitle_id);
    this.setState({subtitle_id:this.props.match.params.subtitle_id})
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
  downloadVideo=(subtitle_id,title)=>
  {
    axios({
      url: SUBTITLE_VIDEO_DOWNLOAD, //your url
      method: 'POST',
      responseType: 'blob', // important
      data:{subtitle_id:subtitle_id},
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', title); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }
  render()
  {
    const {video_details}=this.state;
    const link=this.props.location.pathname;
    const download_string=String(this.state.video_details.language);
    const download_link=download_string.split(',');
    console.log(download_string.split(','));
    if(video_details!=null)
    {
    return(
      <div class="service_preview" style={{marginTop:'20px'}}>
        <div class="container">
          <div class="preview_table">
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
                  <label>Output Format</label>
                </div>
                <div class="table_c">
                  <p>{video_details.output_file_formats}</p>
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
                  <label>Closed Captioning</label>
                </div>
                <div class="table_c">
                  {video_details.closed_caption=='0'?<p>No</p>:<p>Yes</p>}
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
              <div class="table_r">
                <div class="table_c">
                  <label>Payment</label>
                </div>
                <div class="table_c">
                  <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                </div>
              </div>
              {video_details.payment_id!=null && <div class="table_r">
                <div class="table_c">
                  <label>Payment Id</label>
                </div>
                <div class="table_c">
                  <p>{video_details.payment_id}</p>
                </div>
              </div>}
              {video_details.payment_id==null && <div class="table_r last">
                <div class="table_c">
                  <label>Total Amount:</label>
                </div>
                <div class="table_c">
                  <p>Rs. {video_details.price}</p>
                </div>
              </div>}
            </div>
            <div class="buttons">
                {video_details.payment_id==null?<Link to={{
                  pathname:"/checkout",
                  data:{price:video_details.price,id:video_details.id,link:link}
                }}><button class="btn btn-success btn-md float-right">Make Payment</button></Link>:
                  <div style={{color:'black'}}>{download_link.map((output,key)=>{
                    return(  <button class="btn btn-primary btn-md " onClick={this.downloadVideo.bind(this,video_details.id,video_details.file_name)}>
<i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> {output}</button>
                            );
                  })}</div>
                }
            </div>
          </div>
        </div>



      </div>
       );
     }
     else {
       return(<div>Loading...</div>);
     }
}
}
export default Preview;
