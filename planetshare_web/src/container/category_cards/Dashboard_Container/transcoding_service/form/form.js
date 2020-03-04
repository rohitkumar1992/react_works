import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import Select from 'react-select';
import './form.css';
import {VIDEO_TRANSCODE} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../../component/content_loader/loader.js'
const preset = [
  { value: '720p', label: '720p' },
  { value: '1080p', label: '1080p' },
  { value: '480p 16:9', label: '480p 16:9' },
  { value: '480p 4:3', label: '480p 4:3' },
  { value: '360p 16:9', label: '360p 16:9' },
  { value: '360p 4:3', label: '360p 4:3' },
  { value: '240p', label: '240p' },
  { value: '144p', label: '144p' },
  { value: 'Iphone4', label: 'Iphone4' },
  { value: 'Iphone4s', label: 'Iphone4s' },
  { value: 'Iphone5', label: 'Iphone5' },
  { value: 'Iphone5s', label: 'Iphone5s' },
  { value: 'Iphone6', label: 'Iphone6' },
  { value: 'Iphone6s', label: 'Iphone6s' },
  { value: 'Kindle Fire HD', label: 'Kindle Fire HD' },
  { value: 'HLS 2M', label: 'HLS 2M' },
  { value: 'HLS 1.5M', label: 'HLS 1.5M' },
  { value: 'HLS 1M', label: 'HLS 1M' },
  { value: 'HLS 600K', label: 'HLS 600' },
  { value: 'HLS 400K', label: 'HLS 400K' },
  { value: 'HLS Video-400K', label: 'HLS Video-400K' },
  { value: 'HLS Video-160K', label: 'HLS Video-160K' },
];
const priority=[{ value: '2', label: 'High' },
{ value: '1', label: 'Medium' },
{ value: '0', label: 'Low' }
];
const aspectRatio=[{ value: 'auto', label: 'auto' },
{ value: '16:9', label: '16:9' },
{ value: '18:11', label: '18:11' }
];

const inputContainer=[{ value: 'auto', label: 'auto' },
{ value: '3gp', label: '3gp' },
{ value: 'avi', label: 'avi' },
{ value: 'flv', label: 'flv' },
{ value: 'mkv', label: 'mkv' },
{ value: 'mpeg', label: 'mpeg' },
{ value: 'ogg', label: 'ogg' }
];
const notification=[{ value: '0', label: 'Dont Notify Me' },
{ value: '1', label: 'Notify Me on web' },
{ value: '2', label: 'Notify Me through Mail' }
]
class VideoDescription extends Component {
  state={
    video_id:0,
    selectedNotification:[],
    selectedPreset:[],
    selectedPriority:[],
    selectedInputContainer:[],
    uploadSelection:'',
    selectedAspectRatio:[],
    loader:false
  }
  componentDidMount()
  {
    this.setState({video_id:this.props.match.params.id,uploadSelection:this.props.match.params.tag});
  }
  formSubmitHandler=(e)=>
  {
    e.preventDefault();
      $('#error_msg').html('');
    var aspect_ratio=e.target.aspect_ratio.value;
    var priority=e.target.priority.value;
    var preset=this.state.selectedPreset;
    var preset_list=[];
    for(var i=0;i<preset.length;i++)
    {
      preset_list[i]=preset[i].value;
    }
    var inputContainer=e.target.input_container.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    if(priority=='' || notify=='' || inputContainer=='' || preset_list.length==0 || aspect_ratio=='')
    {
      $('#error_msg').html('All Options Must Be Filled');
          return false;
    }
      this.setState({loader:true});
    axios.post(VIDEO_TRANSCODE,
      {
        user_id:user_id,
        tag:tag,
        preset:preset_list,
        video_id:this.state.video_id,
        priority:priority,
        container:inputContainer,
        aspect_ratio:aspect_ratio,
        notify:notify,
        price:'600',
      }
  )
  .then(response=>{
if(response.data.success=='1' && response.data.success==1)
{
toast("Adding To Queue")
setTimeout(()=>this.props.history.push(`/dashboard/buyer/service/transcoding/preview/${response.data.transcode_id}`),2000);                                                                                                            ;
}
  })
  .catch(function (error) {
    console.log(error);
});
  }
  presetChange = (selectedOption) => {
  this.setState({ selectedPreset:selectedOption });
}
priorityChange = (selectedOption) => {
this.setState({ selectedPriority:selectedOption });
}
notificationChange = (selectedOption) => {
this.setState({ selectedNotification:selectedOption });
}
selectedInputContainerChange = (selectedOption) => {
this.setState({ selectedInputContainer:selectedOption });
}
selectedAspectRatioChange = (selectedOption) => {
this.setState({ selectedAspectRatio:selectedOption });
}
  render() {
    return (
            <div style={{overflowY:'scroll'}}>
              <ToastContainer autoClose={2000}/>
              {this.state.loader && <Loader />}
                {this.state.loader==false && <div id="form_data">
                        <center><h3 style={{}}>Transcoding Description</h3></center>
              <form  id="form_tag" action="javascript:" onSubmit={this.formSubmitHandler}>
              <div class="col-lg-4 col-md-6 col-sm-8 col_transcoding" style={{marginTop:'0px',marginLeft:'33%'}}>
              <center><span style={{color:'red'}} id="error_msg"></span></center>
                    <label for="preset" style={{color:'black',textTransform:'uppercase'}}>Preset</label><Select
                     value={this.state.selectedPreset}
                     onChange={this.presetChange}
                     placeholder={'Select Preset'}
                     options={preset}
                     isMulti={true}
                     name="preset"
                     id="preset"
                     required/>
                     <label for="priority" style={{color:'black',textTransform:'uppercase'}} >Priority</label><Select
                    value={this.state.selectedPriority}
                    onChange={this.priorityChange}
                    placeholder={'Select Priority'}
                    options={priority}
                    isMulti={false}
                    name="priority"
                    id="priority"
                    />
                    <label for="input_container" style={{color:'black',textTransform:'uppercase'}}>Input Container </label>
                    <Select
                       value={this.state.selectedInputContainer}
                       onChange={this.selectedInputContainerChange}
                       placeholder={'Select Input Container'}
                       options={inputContainer}
                       isMulti={false}
                       name="input_container"
                       id="input_container"
                       required/>
                    <label for="notification_div" style={{color:'black',textTransform:'uppercase'}}>Notification</label>
                    <Select
                       value={this.state.selectedNotification}
                       onChange={this.notificationChange}
                       placeholder={'Notification'}
                       options={notification}
                       isMulti={false}
                       name="notification"
                       id="notification_div"
                       />
                       <label for="aspect_ratio" style={{color:'black',textTransform:'uppercase'}}>Aspect Ratio</label>
                       <Select
                          value={this.state.selectedAspectRatio}
                          onChange={this.selectedAspectRatioChange}
                          placeholder={'Select Input Container'}
                          options={aspectRatio}
                          isMulti={false}
                          name="aspect_ratio"
                          id="aspect_ratio"
                          required/>
                       <button type="submit" class="btn btn-lg btn-primary pull-right but_tran mt-3" id="save_button" style={{width:'88px', borderRadius: '5px'}} >Next</button>
                   </div>
              </form>
              </div>
            }
          </div>
        )
}
}
export default VideoDescription;
