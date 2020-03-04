import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import $ from 'jquery';
import {VIDEO_DUBB_DESCRIPTION,VIDEO_ASSIGNED_VENDOR_DESCRIPTION,VIDEO_TRANSCODE_DESCRIPTION,VIDEO_SUBTITLE_DESCRIPTION,VIDEO_TAGGING_DESCRIPTION} from '../../url.js';
import Action from '../Action/action.js';
import ReactJWPlayer from 'react-jw-player';
class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      video_details:[],
      vendor_task:[],
      loadvendorlist:false
    };
  }
componentDidMount()
{
  this.setState({id:this.props.match.params.id});
  this.getData(this.props.match.params.id);
}
  getData=(id)=>
  {
    var url='';
    if(this.props.match.params.sname=="dubbing")
    {
      url=VIDEO_DUBB_DESCRIPTION;
    }
    if(this.props.match.params.sname=="transcoding")
    {
      url=VIDEO_TRANSCODE_DESCRIPTION;
    }
    if(this.props.match.params.sname=="subtitle")
    {
      url=VIDEO_SUBTITLE_DESCRIPTION;
    }
    if(this.props.match.params.sname=="tagging")
    {
      url=VIDEO_TAGGING_DESCRIPTION;
    }
  axios.post(url, {
      id:id,
      })
    .then(response=>{
      var result=response.data;

      if(result.success=='1')
      {
            this.setState({video_details:result.data});
      }
    })
    .catch(function (error) {
      console.log(error);
  });
}
loadVendorList=()=>{
  var url='';
  if(this.props.match.params.sname=="dubbing")
  {
    url=VIDEO_ASSIGNED_VENDOR_DESCRIPTION;
  }
  if(this.props.match.params.sname=="transcoding")
  {
    url=VIDEO_ASSIGNED_VENDOR_DESCRIPTION;
  }
  if(this.props.match.params.sname=="subtitle")
  {
    url=VIDEO_ASSIGNED_VENDOR_DESCRIPTION;
  }
  if(this.props.match.params.sname=="tagging")
  {
    url=VIDEO_ASSIGNED_VENDOR_DESCRIPTION;
  }
axios.post(url, {
    id:this.props.match.params.id,
    service_name:this.props.match.params.sname
    })
  .then(response=>{
    var result=response.data;
    if(result.success=='1')
    {
            $('#show_vendor_list').html('<i class="fa fa-refresh" style="color:white"></i>');
          this.setState({vendor_task:result.vendor_task,loadvendorlist:true});
    }
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
    return <button className="inactive_button but_1 btn-primary"  style={{cursor:'pointer',width:'68px'}}>Payment Pending</button>
  }
  if(status=='0' || status==0)
  {
    content=<button className="inactive_button but_1 btn-danger"  style={{cursor:'pointer',width:'68px'}}>Queued</button>;
  }
  if(status=='1' || status==1)
  {
    content=<button className="active_button but_1 btn-primary"  style={{cursor:'pointer',width:'68px'}}>In Progress</button>;
  }
  if(status=='2' || status==2)
  {
    content=<button className="inactive_button  but_1 btn-success"  style={{cursor:'pointer',width:'68px'}}>Completed</button>;
  }
  if(status=='3' || status==3)
  {
    content=<button className="inactive_button  but_1 btn-primary"  style={{cursor:'pointer',width:'68px'}}>Assigned</button>;
  }
  if(status=='4' || status==4)
  {
    content=<button className="inactive_button  but_1 btn-danger"  style={{cursor:'pointer',width:'68px'}}>Rejected</button>;
  }
  if(status=='5' || status==5)
  {
    content=<button className="inactive_button  but_1 btn-success"  style={{cursor:'pointer',width:'68px'}}>Accepted</button>;
  }
  return content;
}
status12(status)
{
  var content='';
  if(status=='1' || status==1)
  {
    content=<p class="font-weight-bold text-info">Assigned</p>;
  }
  if(status=='2' || status==2)
  {
    content=<p class="font-weight-bold text-success">Completed</p>;
  }
  if(status=='3' || status==3)
  {
    content=<p class="font-weight-bold text-warning">In Progress</p>;
  }
  if(status=='4' || status==4)
  {
    content=<p class="font-weight-bold text-danger">Rejected</p>;
  }
  return content;
}
status_payment(status)
{
  var content='';
  if(status=='0' || status==0)
  {
    content=<p class="font-weight-bold text-info">Pending</p>;
  }
  if(status=='1' || status==1)
  {
    content=<p class="font-weight-bold text-success">Completed</p>;
  }
  return content;
}
  render() {
    const {video_details}=this.state;
    const vendor_task=((this.props.match.params.sname=="dubbing" ||   this.props.match.params.sname=="subtitle" || this.props.match.params.sname=="transcoding" && this.state.loadvendorlist) && this.state.vendor_task.map((result,key)=>{
      return(  <div class="col-xl-4 col-md-4 mb-4 top_div" style={{marginTop:'30px'}}>
                              <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col md-12">
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Company Name:</div><div class="col-md-4" >{result.companyName}</div>
                                    {result.status==4 && <i class="col-md-2" ><Action tag="services_dubb" /></i>}
                                    {(result.status==2 && result.payment_status==0 && (this.props.match.params.sname=="subtitle" || this.props.match.params.sname=="dubbing")) && <i class="col-md-2" ><Action tag="services_payment" id={result.id} price={result.rates} redrct={this.props.match.params.sname}/></i>}
                                    </div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Language:</div><div class="col-md-6" >{result.language}</div></div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Price:</div><div class="col-md-6" >{result.rates}&nbsp;(in Rupees)</div></div>
                                    <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black'}}>Status:</div><div class="col-md-6" >{this.status12(result.status)}</div></div>
                                    {(result.status==2 && (this.props.match.params.sname=="subtitle" || this.props.match.params.sname=="dubbing")) && <div class="row"><div class="col-md-6" style={{fontSize:'16px',color:'black',marginTop:'-10px'}}>Payment:</div><div class="col-md-6" style={{marginTop:'-10px'}}>{this.status_payment(result.payment_status)}</div></div>}
                                    </div>
                                  </div>
                                </div>
                  </div>
              </div>);
    }))
    if(this.props.match.params.sname=="dubbing")
    {
      return (
         <div>
                  <div class="row">
                            <div class="col-md-2" >
                                <div class="profile-img">
                                        <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-6" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Dubbing Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.dubb_id}</p>
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
                                                        <label>Original Language</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.original_language}</p>
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
                                                        <label>Dubbed Language</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.dubbed_language}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Priority</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                      {video_details.priority=='0' && <p>Low</p>}
                                                      {video_details.priority=='1' && <p>Medium</p>}
                                                      {video_details.priority=='2' && <p>High</p>}
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-md-4">

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
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                    </div>
                                                </div>
                                                {video_details.payment_id!=null && <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Payment Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id}</p>
                                                    </div>
                                                </div>}
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.status(video_details.status,video_details.payment_id)}</p>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                                  <div class="col-md-6 offset-6">
                                  <ReactJWPlayer
                                playerId='jw-player'
                                playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                                file={video_details.host_url}
                                aspectRatio="16:9"
                                className="col-md-12"
                                isAutoPlay="true"
                                controls="false"
                                />
                                  </div>
                    {(video_details.status==1 || video_details.status==2 ) && <button type="button" class="btn btn-success" id="show_vendor_list" onClick={this.loadVendorList}>Assigned Vendor List</button>}
                    {(video_details.status==1 || video_details.status==2 && this.state.loadvendorlist) && <div class="row">
                        {vendor_task}
                        </div>}
        </div>
      );
    }
    if(this.props.match.params.sname=="transcoding")
    {
      return(<div>  <div>

                        <div class="row">
                            <div class="col-md-2" >
                                <div class="profile-img">
                                        <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-6" >
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
                                                        <label>Length(in seconds)</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.video_length}</p>
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
                                                        <label>Aspect ratio</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.aspect_ratio}</p>
                                                    </div>
                                                </div>
                                                  </div>
                                                  <div class="col-md-4">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Priority</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                      {video_details.priority=='0' && <p>Low</p>}
                                                      {video_details.priority=='1' && <p>Medium</p>}
                                                      {video_details.priority=='2' && <p>High</p>}
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
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                    </div>
                                                </div>
                                                {video_details.payment_id!=null && <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id}</p>
                                                    </div>
                                                </div>}
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.status(video_details.status,video_details.payment_id)}</p>
                                                    </div>
                                                </div>
                                    </div>

                                </div>
        </div>
        <div class="col-md-6 offset-6">
        <ReactJWPlayer
      playerId='jw-player'
      playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
      file={video_details.host_url}
      aspectRatio="16:9"
      className="col-md-12"
      isAutoPlay="true"
      controls="false"
      />
        </div>
        {(video_details.status==1 || video_details.status==2 ) && <button type="button" class="btn btn-success" id="show_vendor_list" onClick={this.loadVendorList}>Assigned Vendor List</button>}
        {(video_details.status==1 || video_details.status==2 && this.state.loadvendorlist) && <div class="row">
            {vendor_task}
        </div>}
        </div>);
    }
    if(this.props.match.params.sname=="subtitle")
    {
      return(<div>  <div>

                        <div class="row">
                            <div class="col-md-2" >
                                <div class="profile-img">
                                        <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-6" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Subtitle Id</label>
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
                                                        <label>Length(in seconds)</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.video_length}</p>
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
                                                        <label>Output Foramt</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.output_file_formats}</p>
                                                    </div>
                                                </div>
                                                  </div>
                                                  <div class="col-md-4">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Priority</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                      {video_details.priority=='0' && <p>Low</p>}
                                                      {video_details.priority=='1' && <p>Medium</p>}
                                                      {video_details.priority=='2' && <p>High</p>}
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
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                    </div>
                                                </div>
                                                {video_details.payment_id!=null && <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Payment Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id}</p>
                                                    </div>
                                                </div>}
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.status(video_details.status,video_details.payment_id)}</p>
                                                    </div>
                                                </div>
                                    </div>

                                </div>
        </div>
        <div class="col-md-6 offset-6">
        <ReactJWPlayer
      playerId='jw-player'
      playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
      file={video_details.host_url}
      aspectRatio="16:9"
      className="col-md-12"
      isAutoPlay="true"
      controls="false"
      />
        </div>
        {(video_details.status==1 || video_details.status==2 ) && <button type="button" class="btn btn-success" id="show_vendor_list" onClick={this.loadVendorList}>Assigned Vendor List</button>}
        {(video_details.status==1 || video_details.status==2 && this.state.loadvendorlist) && <div class="row">
            {vendor_task}
        </div>}
        </div>);
    }
    if(this.props.match.params.sname=="tagging")
    {
      return (
        <div>
                  <div class="row">
                            <div class="col-md-2" >
                                <div class="profile-img">
                                        <img src={`${video_details.thumbnail}`} style={{width:'150px',height:'180px'}}/>
                                </div>
                                </div>
                                <div class="col-md-6" >
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Tagging Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.autotag_id}</p>
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
                                                        <label>Length(in seconds)</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.video_length}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Priority</label>
                                                    </div>
                                                    {video_details.priority=='0' && <p>Low</p>}
                                                    {video_details.priority=='1' && <p>Medium</p>}
                                                    {video_details.priority=='2' && <p>High</p>}
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Requested By</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{video_details.AccountId}</p>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-md-4">
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
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id==null?'Pending':'Completed'}</p>
                                                    </div>
                                                </div>
                                                {video_details.payment_id!=null && <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Payment</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                          <p>{video_details.payment_id}</p>
                                                    </div>
                                                </div>}
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.status(video_details.status,video_details.payment_id)}</p>
                                                    </div>
                                                </div>
                                    </div>
                                    <div class="col-md-6 offset-6">
                                    <ReactJWPlayer
                                  playerId='jw-player'
                                  playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                                  file={video_details.host_url}
                                  aspectRatio="16:9"
                                  className="col-md-12"
                                  isAutoPlay="true"
                                  controls="false"
                                  />
                                    </div>
                                </div>
        </div>
      );
    }
  }
}
export default Details;
