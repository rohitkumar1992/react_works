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
import ReactTooltip from 'react-tooltip';
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
        $('#error_msg').html('');
        $('#save_button').attr('disabled',true);
    var priority=e.target.priority.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
      if(priority=='' || notify=='' )
        {
          $('#error_msg').html('All Options Must Be Filled');
          $('#save_button').attr('disabled',false);
              return false;
        }
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
{this.state.loader==false && <div id="form_data" class="dashboard_services">
        <div class="avail_ser_form">
          <div class="container">
            <center><h3>Tagging Description</h3></center>
                <form  id="form_tag" action="javascript:" onSubmit={this.formSubmitHandler}>
                  <center><span style={{color:'red'}} id="error_msg"></span></center>
                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="priority" style={{color:'black',textTransform:'uppercase'}}>Priority</label>
                    </div>
                    <div class="box r">
                      <Select
                      value={this.state.selectedPriority}
                      onChange={this.priorityChange}
                      placeholder={'Select Priority'}
                      options={priority}
                      isMulti={false}
                      name="priority"
                      id="priority"
                      />
                      <a class="q" data-tip="High-Need to be done within 5 days, Medium - within 10 days and Low - within 20 days."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                      <ReactTooltip place="right" type="dark" effect="solid"/>
                    </div>
                  </div>

                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="notification_div" style={{color:'black',textTransform:'uppercase',}}>Notification</label>
                    </div>
                    <div class="box r">
                      <Select
                      value={this.state.selectedNotification}
                      onChange={this.notificationChange}
                      placeholder={'Notification'}
                      options={notification}
                      isMulti={false}
                      name="notification"
                      id="notification_div"
                      />
                      <a class="q" data-tip=" How to get notified."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                      <ReactTooltip place="right" type="dark" effect="solid"/>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-md btn-primary pull-right mt-4 " id="save_button" style={{padding:'7px 16px 8px 16px'}}>Next</button>
                </form>
              </div>
            </div>
        </div>}
        </div>
        )
}
}
export default VideoDescription;
