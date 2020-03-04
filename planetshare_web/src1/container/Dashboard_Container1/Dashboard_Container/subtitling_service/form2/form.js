import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import Select from 'react-select';
import './form.css';
import {VIDEO_SUBTITLING} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../../component/content_loader/loader.js'
const notification=[{ value: '0', label: 'Dont Notify Me' },
{ value: '1', label: 'Notify Me on web' },
{ value: '2', label: 'Notify Me through Mail' }
];
const priority=[{ value: '2', label: 'High' },
{ value: '1', label: 'Medium' },
{ value: '0', label: 'Low' }
];
const outputformat=[{ value: 'srt', label: 'SubRip(.srt)' },
{ value: 'scc', label: 'Scenarist(.scc)' },
{ value: 'ttml', label: 'Timed Text(.ttml)' },
{ value: 'txt', label: 'Transcript(.txt)' },
{ value: 'vtt', label: 'WebVTT(.vtt)' },
{ value: 'dfxp', label: 'DFXP(.dfxp)' },
{ value: 'cap', label: 'Cheetah.CAP(.cap)' }
]
class VideoDescription extends Component {
  state={
    video_id:0,
    selectedNotification:[],
    languageList:[],
      selectedPriority:[],
    selectedOutputFormat:[],
    loader:false
  }
  componentDidMount()
  {
    this.setState({video_id:this.props.match.params.id,uploadSelection:this.props.match.params.tag});


  }
  formSubmitHandler=(e)=>
  {
    e.preventDefault();
    var arr=[],i=0;
    $('.Checkbox:checked').each(function () {
    arr[i++] = $(this).val();
  });
  var isClosed_caption=$('.caption_Checkbox').is(":checked");
  var closed_caption_result=isClosed_caption==true?1:0;
  var outputFormat=[];
    for(var i=0;i<this.state.selectedOutputFormat.length;i++)
      {
        outputFormat.push(this.state.selectedOutputFormat[i].value);
      }
    var notify=e.target.notification.value;
    var priority=e.target.priority.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    this.setState({loader:true});
    axios.post(VIDEO_SUBTITLING,
      {
        tag:tag,
        user_id:user_id,
        video_id:this.state.video_id,
        priority:priority,
        notify:notify,
        language:arr,
        closed_caption:closed_caption_result,
        output_file_format:outputFormat,
        price:'300'
      }
  )
  .then(response=>{
    console.log(response);
if(response.data.success=='1' && response.data.success==1)
{
toast("Adding To Queue")
setTimeout(()=>this.props.history.push(`/dashboard/buyer/service/subtitling/preview/${response.data.subtitle_id}`),2000);                                                                                                            ;
}
  })
  .catch(function (error) {
    console.log(error);
});
  }

notificationChange = (selectedOption) => {
this.setState({ selectedNotification:selectedOption });
}
outputChange = (selectedOption) => {
this.setState({ selectedOutputFormat:selectedOption});
}
priorityChange = (selectedOption) => {
this.setState({ selectedPriority:selectedOption });
}
  render() {
    return (
            <div>
            <ToastContainer autoClose={2000}/>
            {this.state.loader && <Loader />}
              {this.state.loader==false && <div id="form_data"><center><h3>Subtitle Description</h3></center>
              <form  id="form_tag" action="javascript:" onSubmit={this.formSubmitHandler}>
              <div class="row">
              <div class="col-md-6 col-lg-4 col-sm-10 col_sub" style={{marginTop:'4%',marginLeft:'17%'}}>
                    <label for="language_div" style={{color:'black',textTransform:'uppercase'}}>Language</label>
                    <ul class="subtitle_checkbox">
    <li style={{color:'black' ,textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="English" id="home_coo" class="Checkbox" /> English</li>
    <li style={{color:'black',textTransform:'uppercase'}}> <input type="checkbox" name="areaofinterest" value="Hindi" id="home_cra" class="Checkbox"/> Hindi</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Bengali" id="home_dec" class="Checkbox"/> Bengali</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Tamil" id="home_ent" class="Checkbox"/> Tamil</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Telugu" id="home_gar" class="Checkbox"/> Telugu</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Chinese" id="home_hom" class="Checkbox"/>Chinese</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Russian" id="home_mar" class="Checkbox"/> Russian</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Arabic" id="home_par" class="Checkbox"/> Arabic</li>
    <li style={{color:'black',textTransform:'uppercase'}}><input type="checkbox" name="areaofinterest" value="Korean" id="home_pet" class="Checkbox" /> Korean</li>
    <li style={{color:'black',textTransform:'uppercase'}}> <input type="checkbox" name="areaofinterest" value="Urdu" id="home_ret" class="Checkbox"/> Urdu</li></ul>
    </div>
    <div class="col-md-6 col-lg-4 col-sm-10 col_sub" style={{marginTop:'4%'}}>
<div class="row"><div class="col-md-8"  style={{color:'black',textTransform:'uppercase'}}> Do you want close captioning</div><div class="col-md-0"><input type="checkbox" name="caption_div" value="Yes" id="caption_div" class="caption_Checkbox " /></div></div>
<label for="output_div" style={{color:'black',textTransform:'uppercase'}}>Output Format</label>
              <Select
                 value={this.state.selectedOutputFormat}
                 onChange={this.outputChange}
                 placeholder={'Output Format'}
                 options={outputformat}
                 isMulti={true}
                 name="outputformat"
                 id="output_div"
                 />
                    <label for="notification_div" style={{color:'black',textTransform:'uppercase'}}>Notification (optional)</label>
                    <Select
                       value={this.state.selectedNotification}
                       onChange={this.notificationChange}
                       placeholder={'Notification'}
                       options={notification}
                       isMulti={false}
                       name="notification"
                       id="notification_div"
                       />
                       <label for="priority" style={{color:'black',textTransform:'uppercase'}}>Priority</label><Select
                      value={this.state.selectedPriority}
                      onChange={this.priorityChange}
                      placeholder={'Select Priority'}
                      options={priority}
                      isMulti={false}
                      name="priority"
                      id="priority"
                      />
              <button type="submit" class="btn btn-lg btn-primary pull-right mt-5" id="save_button">Next</button>
              </div>

               </div>
              </form>
              </div>}
            </div>
        )
}
}
export default VideoDescription;
