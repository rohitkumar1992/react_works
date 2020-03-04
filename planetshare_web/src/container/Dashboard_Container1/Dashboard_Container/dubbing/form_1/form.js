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
    var language=e.target.language.value;
    var original_language=e.target.original_language.value;
    var priority=e.target.priority.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    this.setState({loader:true});
    axios.post(VIDEO_DUBB,
      {
        user_id:user_id,
        tag:tag,
        video_id:this.state.video_id,
        language:language,
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
  this.setState({ selectedLanguage:selectedOption });
}
priorityChange = (selectedOption) => {
this.setState({ selectedPriority:selectedOption });
}
notificationChange = (selectedOption) => {
this.setState({ selectedNotification:selectedOption });
}
  render() {
    return (
            <div>
            <ToastContainer autoClose={2000}/>
              {this.state.loader && <Loader />}
                {this.state.loader==false && <div id="form_data">
                <h3>Dubbing Description</h3>

              <form  id="form_tag"  action="javascript:" onSubmit={this.formSubmitHandler}>
               <div class="col-md-12 d-flex m-32">
              <div class="col-12 col-md-6 " style={{ }}>
                    <label for="original_language" class="col-form-label-sm">Original Language</label>
                    <input type="text" class="form-control form-control-sm form-control-sm1" name="original_language" id="original_language"/>
                    </div>
                       <div class="col-12 col-md-6 mt-2">
                    <label for="language">Language</label><Select
                     value={this.state.selectedLanguage}
                     onChange={this.languageChange}
                     options={language}
                     isMulti={false}
                     name="language"
                     id="language"
                     />
                     </div>
                     </div>
                      <div class="col-12 col-md-12 d-flex m-32">
                        <div class="col-12 col-md-6">
                         <label for="priority">Priority</label><Select
                    value={this.state.selectedPriority}
                    onChange={this.priorityChange}
                    options={priority}
                    isMulti={false}
                    name="priority"
                    id="priority"
                    />
                    </div>
                    <div class="col-12 col-md-6  ">
                    <label for="notification_div">Notification (optional)</label>
                    <Select
                       value={this.state.selectedNotification}
                       onChange={this.notificationChange}
                       placeholder={'Notification'}
                       options={notification}
                       isMulti={false}
                       name="notification"
                       id="notification_div"
                       
                       />
              </div>
              </div>
              <button type="submit" class="btn btn-md btn-success pull-right" id="save_button">Next</button>
              </form>
              </div>}
            </div>
        )
}
}
export default VideoDescription;
