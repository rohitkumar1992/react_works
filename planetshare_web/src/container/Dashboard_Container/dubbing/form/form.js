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
import ReactTooltip from 'react-tooltip';
import LanguageList from '../../language';
const language = [
  { key: 'hin', value: 'Hindi',  label: 'Hindi' },
  { key: 'urd', value: 'Urdu',  label: 'Urdu' },
  { key: 'pun', value: 'Punjabi',  label: 'Punjabi' },
    { key: 'en', value: 'English',  label: 'English' },
  { key: 'mar', value: 'Marathi',  label: 'Marathi' },
  { key: 'guj', value: 'Gujarati',  label: 'Gujarati' },
  { key: 'tam', value: 'Tamil',  label: 'Tamil' },
  { key: 'bhoj', value: 'Bhojpuri' ,label: 'Bhojpuri' },
  { key: 'assa', value: 'Assamese',  label: 'Assamese' },
  { key: 'ben', value: 'Bengali',  label: 'Bengali' },
  { key: 'kan', value: 'Kannada',  label: 'Kannada' },
  { key: 'kas', value: 'Kashmiri', label: 'Kashmiri' },
  { key: 'mal', value: 'Malayalam',  label: 'Malayalam' },
  { key: 'ori', value: 'Oriya',  label: 'Oriya' },
  { key: 'tel', value: 'Telugu',  label: 'Telugu' },
  { key: 'sin', value: 'Sindhi',  label: 'Sindhi' },
  { key: 'pas' ,value:'Pashto',    label: 'Pashto ' },
  { key: 'ara', value: 'Arabic', label: 'Arabic' },
  { key: 'nep', value: 'Nepali',  label: 'Nepali' },
  { key: 'arm ',value: 'Armenian',  label:'Armenian  ' },
  { key: 'aze', value: 'Azerbaijani',  label: 'Azerbaijani ' },
  { key: 'bhu', value: 'Bhutanese',  label: ' Bhutanese  ' },
  { key: 'khm', value: 'Khmer',  label: 'Khmer ' },
  { key: 'chin', value: 'Chinese', label: 'Chinese ' },
  { key: 'per', value: 'Persian',  label: 'Persian ' },
  { key: 'heb', value: 'Hebrew',  label: 'Hebrew ' },
  { key: 'kur', value: 'Kurdish',  label: 'Kurdish' },
  { key: 'bahs', value: 'Bahasa Melayu',  label: 'Bahasa Melayu' },
  { key: 'mal', value: 'Maldivian',  label: 'Maldivian' },
  { key: 'burm', value: 'burm',  label: 'Burmese' },
  { key: 'sin', value: 'Sinhala',  label: ' Sinhala  ' },
  { key: 'tha', value: 'Thai', label: 'Thai' },
  { key: 'bn', value: 'Brunei', flag: 'labelbn', label: 'Brunei' },
  { key: 'bg', value: 'Bulgaria', flag: 'bg', label: 'Bulgaria' },
  { key: 'vie', value: 'Vietnamese', label: 'Vietnamese' },
  { key: 'phi', value: 'Philippines', label: 'Philippines' },
  { key: 'com', value: 'Cambodian',label: 'Cambodian' },
  { key: 'tur', value: 'Turkish',  label: 'Turkish' },
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
    selectedoriginalLanguage:[],
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
    $('#save_button').attr('disabled',true);
      $('#error_msg').html('');
    var language=this.state.selectedLanguage;
    var lang_list=[];
    for(var i=0;i<language.length;i++)
    {
      lang_list[i]=language[i].value;
    }
    var original_language=this.state.selectedoriginalLanguage.value;
    var priority=e.target.priority.value;
    var notify=e.target.notification.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    var match_original_lang=/^[A-Za-z]{3,10}/;
      if(priority=='' || notify=='' || original_language=='' || lang_list.length==0)
      {
        $('#error_msg').html('All Options Must Be Filled');
          $('#save_button').attr('disabled',false);
            return false;
      }
      // if(!original_language.match(match_original_lang))
      // {
      //   $('#error_msg').html('Original Language Must Be Valid');
      //     $('#save_button').attr('disabled',false);
      //       return false;
      // }
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
else {
  this.props.history.push('/dashboard/buyer/service/dubbing');
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
originallanguageChange = (selectedOption) => {
this.setState({ selectedoriginalLanguage:selectedOption });
}
  render() {
    // console.log(this.state.selectedLanguage);
    return (
      <div>
      <ToastContainer autoClose={2000}/>
        {this.state.loader && <Loader />}
          {this.state.loader==false && <div id="form_data" class="dashboard_services">
          <div class="avail_ser_form">
            <div class="container">
              <center><h3 style={{margin:'20px 0'}}>Dubbing Description</h3></center>
              <form  id="form_tag"  action="javascript:" onSubmit={this.formSubmitHandler}>
                <center><span style={{color:'red'}} id="error_msg"></span></center>
               <div class="box_area" style={{margin:'20px 0'}}><div class="box l"><label for="original_language" style={{color:'black',textTransform:'uppercase'}}>Original Language</label></div>

                <div class="box r" id="original_lang_drop"><Select
                 value={this.state.selectedoriginalLanguage}
                 onChange={this.originallanguageChange}
                 options={language}
                 placeholder={'Select Original Language'}
                 isMulti={false}
                 name="language"
                 id="language"
                 />
                 <a class="q" data-tip="Please specify the original language of your video."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                 <ReactTooltip place="right" type="dark" effect="solid"/>
                 </div>

                </div>
                <div class="box_area" style={{margin:'20px 0'}}><div class="box l">
                <label for="language" style={{color:'black',textTransform:'uppercase'}}>Dubbed Language</label></div><div class="box r">
                <Select
                 value={this.state.selectedLanguage}
                 onChange={this.languageChange}
                 options={language}
                 placeholder={'Select Language'}
                 isMulti={true}
                 name="language"
                 id="language"
                 />
                 <a class="q" data-tip="Please choose languages in  which you want to dubb."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                <ReactTooltip place="right" type="dark" effect="solid"/>
                </div>  </div>
                 <div class="box_area" style={{margin:'20px 0'}}><div class="box l">
                     <label for="priority" style={{color:'black',textTransform:'uppercase'}}>Priority</label>
                     </div><div class="box r"><Select
                value={this.state.selectedPriority}
                onChange={this.priorityChange}
                placeholder={'Select Priority'}
                options={priority}
                isMulti={false}
                name="priority"
                id="priority"
                />
                <a class="q" data-tip="High - Need to be done within 5 days, Medium - within 10 days and Low - within 20 days."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                <ReactTooltip place="right" type="dark" effect="solid"/>
                </div></div>
                <div class="box_area" style={{margin:'20px 0'}}><div class="box l">
                <label for="notification_div" style={{color:'black',textTransform:'uppercase'}}>Notification</label></div><div class="box r">
                <Select
                   value={this.state.selectedNotification}
                   onChange={this.notificationChange}
                   placeholder={'Notification'}
                   options={notification}
                   isMulti={false}
                   name="notification"
                   id="notification_div"
                   />
                   <a class="q" data-tip="How to get notified ."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                <ReactTooltip place="right" type="dark" effect="solid"/>
                </div></div>
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
