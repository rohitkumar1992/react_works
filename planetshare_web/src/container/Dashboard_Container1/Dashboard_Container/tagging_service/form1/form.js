import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import Select from 'react-select';
import './form.css';
import {VIDEO_TAGGING} from '../../../../url.js';
import Loader from '../../../../component/content_loader/loader.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    var priority=e.target.priority.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    this.setState({loader:true});
    axios.post(VIDEO_TAGGING,
      {
        user_id:user_id,
        tag:tag,
        video_id:this.state.video_id,
        priority:priority,
        notify:notify,
        price:'600',
      }
  )
  .then(response=>{
if(response.data.success=='1' && response.data.success==1)
{
toast("Adding To Queue")
setTimeout(()=>this.props.history.push(`/dashboard/buyer/service/tagging/preview/${response.data.tagging_id}`),2000);                                                                                                            ;
}
  })
  .catch(function (error) {
    console.log(error);
});
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
                        <h3>Tagging Description</h3>
              <form  id="form_tag" action="javascript:" onSubmit={this.formSubmitHandler}>
              <div class="col-md-7" style={{marginTop:'20px',paddingLeft:'150px',paddingRight:'150px'}}>
                     <label for="priority">Priority</label><Select
                    value={this.state.selectedPriority}
                    onChange={this.priorityChange}
                    placeholder={'Select Priority'}
                    options={priority}
                    isMulti={false}
                    name="priority"
                    id="priority"
                    />
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
              <button type="submit" class="btn btn-lg btn-success pull-right" id="save_button">Next</button>
              </form></div>}
            </div>
        )
}
}
export default VideoDescription;
