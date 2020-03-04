import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import Select from 'react-select';
import './form.css';
import {VIDEO_DUBB} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../../component/content_loader/loader.js'
const language = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Urdu', label: 'Urdu' },
  { value: 'Malayalam', label: 'Malayalam' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Bhojpuri', label: 'Bhojpuri' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Korean', label: 'Korean' }
];
const priority=[{ value: '2', label: 'High' },
{ value: '1', label: 'Medium' },
{ value: '0', label: 'Low' }
];
const notification=[{ value: '0', label: 'Dont Notify Me' },
{ value: '1', label: 'Notify Me on web' },
{ value: '2', label: 'Notify Me through Mail' }
]
class VideoDescription extends Component {
  state={
    video_id:0,
    selectedNotification:[],
    selectedLanguage:[],
    selectedPriority:[],
    uploadSelection:'',
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
    var language=this.state.selectedLanguage;
    var lang_list=[];
    for(var i=0;i<language.length;i++)
    {
      lang_list[i]=language[i].value;
    }
    var original_language=e.target.original_language.value;
    var priority=e.target.priority.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    var match_original_lang=/^[A-Za-z]{3,10}/;
      if(priority=='' || notify=='' || original_language=='' || lang_list.length==0)
      {
        $('#error_msg').html('All Options Must Be Filled');
            return false;
      }
      if(!original_language.match(match_original_lang))
      {
        $('#error_msg').html('Original Language Must Be Valid');
            return false;
      }
    this.setState({loader:true});
    axios.post(VIDEO_DUBB,
      {
        user_id:user_id,
        tag:tag,
        video_id:this.state.video_id,
        language:lang_list,
        priority:priority,
        notify:notify,
        price:'200',
        original_language:original_language
      }
  )
  .then(response=>{
if(response.data.success=='1' && response.data.success==1)
{
toast("Adding To Queue")
setTimeout(()=>this.props.history.push(`/dashboard/buyer/service/dubbing/preview/${response.data.dubb_id}`),2000);                                                                                                            ;
}
  })
  .catch(function (error) {
    console.log(error);
});
  }
  languageChange = (selectedOption) => {
  this.setState({ selectedLanguage:selectedOption});
}
priorityChange = (selectedOption) => {
this.setState({ selectedPriority:selectedOption });
}
notificationChange = (selectedOption) => {
this.setState({ selectedNotification:selectedOption });
}
  render() {
    // console.log(this.state.selectedLanguage);
    return (
            <div>
            <ToastContainer autoClose={2000}/>
              {this.state.loader && <Loader />}
                {this.state.loader==false && <div id="form_data">
                <center><h3>Dubbing Description</h3></center>

              <form  id="form_tag"  action="javascript:" onSubmit={this.formSubmitHandler}>
               <div class="col-md-12 d-flex m-32">
               <div class="col-sm-10 col-lg-4 col-md-6 col_css" style={{marginTop:'0px',marginLeft:'33%'}}>
                          <center><span style={{color:'red'}} id="error_msg"></span></center>
                    <label for="original_language" class="col-form-label-sm " style={{color:'black',textTransform:'uppercase'}}>Original Language</label>
                    <input type="text" class="form-control form-control-sm form-control-sm1 width_6" name="original_language" id="original_language" placeholder="Original language"/>
                    <label for="language" style={{color:'black',textTransform:'uppercase'}}>Language</label><Select
                     value={this.state.selectedLanguage}
                     onChange={this.languageChange}
                     options={language}
                     isMulti={true}
                     name="language"
                     id="language"
                     />

                         <label for="priority" style={{color:'black',textTransform:'uppercase'}}>Priority</label><Select
                    value={this.state.selectedPriority}
                    onChange={this.priorityChange}
                    options={priority}
                    isMulti={false}
                    name="priority"
                    id="priority"
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
                       <button type="submit" class="btn btn-md btn-primary pull-right mt-4 " id="save_button" style={{padding:'7px 16px 8px 16px'}}>Next</button>
              </div>
              </div>

              </form>
              </div>}
            </div>
        )
}
}
export default VideoDescription;
