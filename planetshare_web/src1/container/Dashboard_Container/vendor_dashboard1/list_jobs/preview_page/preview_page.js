import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {VENDOR_SINGLE_JOB,VENDOR_VIDEO_DOWNLOAD} from '../../../../../url';
import '../list_jobs.css';
class Preview extends Component {
  state={
    video_details:[]
  }
  componentDidMount()
  {
    axios.post(VENDOR_SINGLE_JOB,{
      assigned_task_id:this.props.match.params.id
    })
  .then(response=>{
    var result=response.data;
    if(result.success=="1")
    {
        this.setState({video_details:result.data[0]});
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  downloadVideo=(service_id,title,job_type)=>
  {
    axios({
      url: VENDOR_VIDEO_DOWNLOAD, //your url
      method: 'POST',
      responseType: 'blob', // important
      data:{service_id:service_id,job_type:job_type},
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', title); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }
  status(status)
  {
    var content='';
    if(status=='1' || status==1)
    {
      content=<b class="font-weight-bold text-primary" style={{width:'2em',height:'2em',cursor:'pointer'}} >Assigned</b>;
    }
    if(status=='2' || status==2)
    {
        content=<b class="font-weight-bold text-success" style={{width:'2em',height:'2em',cursor:'pointer'}} >Completed</b>;
    }
    if(status=='3' || status==3)
    {
        content=<b class="font-weight-bold text-warning" style={{width:'2em',height:'2em',cursor:'pointer'}} >In Progress</b>;
    }
    if(status=='4' || status==4)
    {
        content=<b class="font-weight-bold text-danger" style={{width:'2em',height:'2em',cursor:'pointer'}} >Rejected</b>;
    }
    return content;
  }
  render()
  {
    const {video_details}=this.state;
    const link=this.props.location.pathname;
    if(video_details!=null)
    {
      if(this.props.match.params.jobType=="dubbing")
      {
    return(
      <div style={{marginTop:'80px'}}>
                              <div class="row">
                                  <div class="col-md-2" >
                                      <div class="profile-img">
                                              <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                      </div>
                                      </div>
                                      <div class="col-md-5" >
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Job Id</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.jobid}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Job Type</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.job_type}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Original Language</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.original_language}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Dubbed Language</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.language}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>File Name</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p class="file_name">{video_details.file_name}</p>
                                                          </div>
                                                      </div>
                                                      </div>
                                                      <div class="col-md-5">
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Video length</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.video_length} (in Minutes)</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Price</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{video_details.rates} (in Rupees)</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Priority</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              {video_details.priority==0 && <p>Low</p>}
                                                              {video_details.priority==1 && <p>Medium</p>}
                                                              {video_details.priority==2 && <p>High</p>}
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Status</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                              <p>{this.status(video_details.status)}</p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-6">
                                                              <label>Download</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                            <button class="btn btn-primary btn-md " onClick={this.downloadVideo.bind(this,video_details.serviceid,video_details.file_name,video_details.job_type)}>Click Here</button>
                                                          </div>
                                                      </div>
                                                      {/*<div class="row">
                                                          <div class="col-md-6">
                                                              <label>Payment</label>
                                                          </div>
                                                          <div class="col-md-6">
                                                                <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                          </div>
                                                      </div>*/}
                                          </div>
                                      </div>


              </div>
       );
     }
     if(this.props.match.params.jobType=="subtitle")
     {
       return(
         <div style={{marginTop:'80px'}}>
                                 <div class="row">
                                     <div class="col-md-2" >
                                         <div class="profile-img">
                                                 <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                         </div>
                                         </div>
                                         <div class="col-md-5" >
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Job Id</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.jobid}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Job Type</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.job_type}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Subtitle Language</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.language}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>File Name</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p class="file_name">{video_details.file_name}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Closed Captioning</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 {video_details.closed_caption==1 && <p class="file_name">True</p>}
                                                                 {video_details.closed_caption==0 && <p class="file_name">False</p>}
                                                             </div>
                                                         </div>
                                                         </div>
                                                         <div class="col-md-5">
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Video length</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.video_length} (in Minutes)</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Output File Format</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.output_file_formats}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Price</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{video_details.rates} (in Rupees)</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Priority</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 {video_details.priority==0 && <p>Low</p>}
                                                                 {video_details.priority==1 && <p>Medium</p>}
                                                                 {video_details.priority==2 && <p>High</p>}
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Status</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                 <p>{this.status(video_details.status)}</p>
                                                             </div>
                                                         </div>
                                                         <div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Download</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                               <button class="btn btn-primary btn-md " onClick={this.downloadVideo.bind(this,video_details.serviceid,video_details.file_name,video_details.job_type)}>Click Here</button>
                                                             </div>
                                                         </div>
                                                         {/*<div class="row">
                                                             <div class="col-md-6">
                                                                 <label>Payment</label>
                                                             </div>
                                                             <div class="col-md-6">
                                                                   <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                             </div>
                                                         </div>*/}
                                             </div>
                                         </div>


                 </div>
          );
     }
   }
     else {
       return(<div>Loading...</div>);
     }
}
}
export default Preview;
