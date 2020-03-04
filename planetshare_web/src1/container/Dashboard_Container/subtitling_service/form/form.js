import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import Select from 'react-select';
import './form.css';
import {VIDEO_SUBTITLING} from '../../../../url.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../../component/content_loader/loader.js';
import ReactTooltip from 'react-tooltip';
const notification=[{ value: '0', label: 'Dont Notify Me' },
{ value: '1', label: 'Notify Me on web' },
{ value: '2', label: 'Notify Me through Mail' }
];
const priority=[{ value: '2', label: 'High' },
{ value: '1', label: 'Medium' },
{ value: '0', label: 'Low' }
];
const closed_caption=[
{ value: '1', label: 'Yes' },{ value: '0', label: 'No' },
];
const outputformat=[{ value: 'srt', label: 'SubRip(.srt)' },
{ value: 'scc', label: 'Scenarist(.scc)' },
{ value: 'ttml', label: 'Timed Text(.ttml)' },
{ value: 'txt', label: 'Transcript(.txt)' },
{ value: 'vtt', label: 'WebVTT(.vtt)' },
{ value: 'dfxp', label: 'DFXP(.dfxp)' },
{ value: 'cap', label: 'Cheetah.CAP(.cap)' }
]
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
class VideoDescription extends Component {
  state={
    video_id:0,
    selectedNotification:[],
    languageList:[],
      selectedPriority:[],
    selectedOutputFormat:[],
    selectedLanguage:[],
    closed_captioning:[],
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
  //   var arr=[],i=0;
  //   $('.Checkbox:checked').each(function () {
  //   arr[i++] = $(this).val();
  // });
  // var isClosed_caption=$('.caption_Checkbox').is(":checked");
  var closed_caption_result=this.state.closed_captioning.value;
  var outputFormat=[];
  var language=this.state.selectedLanguage;
  var lang_list=[];
    for(var i=0;i<language.length;i++)
    {
    lang_list[i]=language[i].value;
    }
    for(var i=0;i<this.state.selectedOutputFormat.length;i++)
      {
        outputFormat.push(this.state.selectedOutputFormat[i].value);
      }
    var notify=e.target.notification.value;
    var priority=e.target.priority.value;
    var user_id=localStorage.getItem('userid');
    var tag=this.state.uploadSelection=="mylist"?"from_our_list":"new";
    if(priority=='' || notify=='' ||  outputFormat.length==0 || lang_list.length==0 || closed_caption_result==null)
    {
      $('#error_msg').html('All Options Must Be Filled');
        $('#save_button').attr('disabled',false);
          return false;
    }
//     alert(tag+"---"+
// user_id+"---"+
// priority+"---"+
// notify+"---"+
// lang_list+"---"+
// closed_caption_result+"---"+
// outputFormat);
// return false
    this.setState({loader:true});
    axios.post(VIDEO_SUBTITLING,
      {
        tag:tag,
        user_id:user_id,
        video_id:this.state.video_id,
        priority:priority,
        notify:notify,
        language:lang_list,
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
  languageChange = (selectedOption) => {
  this.setState({ selectedLanguage:selectedOption});
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
closed_captioning_method = (selectedOption) => {
this.setState({ closed_captioning:selectedOption });
}
  render() {
    return (
      <div >
            <ToastContainer autoClose={2000}/>
            {this.state.loader && <Loader />}
              {this.state.loader==false && <div id="form_data" class="dashboard_services">
              <div class="avail_ser_form">
                <div class="container">
                  <center><h3 style={{margin:'20px 0'}}>Subtitle Description</h3></center>
                  <form  id="form_tag" action="javascript:" onSubmit={this.formSubmitHandler}>


                  <center><span style={{color:'red'}} id="error_msg"></span></center>
                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="language_div" style={{textTransform:'uppercase'}}>Language</label>
                    </div>
                    <div class="box r">
                      <Select
                       value={this.state.selectedLanguage}
                       onChange={this.languageChange}
                       options={language}
                       placeholder={'Select Language'}
                       isMulti={true}
                       name="language"
                       id="language"
                       />
                       <a class="q" data-tip="Please choose languages in  which you want to perform subtitling. "> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                       <ReactTooltip place="right" type="dark" effect="solid"/>
                     </div>
                  </div>

                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="closed_caption_box" styles={{color:'#1F1A1A'}}>Closed Captioning</label>
                    </div>
                    <div class="box r">
                      <Select
                      value={this.state.closed_captioning}
                      onChange={this.closed_captioning_method}
                      placeholder={'Closed Captioning'}
                      options={closed_caption}
                      isMulti={false}
                      name="closed_caption_box"
                      id="closed_caption_box"
                      />
                      <a class="q" data-tip="Do you need closed captioning on this video."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                      <ReactTooltip place="right" type="dark" effect="solid"/>
                    </div>
                  </div>
                  {/*<input type="checkbox" name="caption_div" value="Yes" id="caption_div" class="caption_Checkbox " />*/}
                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="output_div"  styles={{color:'#1F1A1A'}}>Output Format</label>
                    </div>
                    <div class="box r">
                      <Select
                       value={this.state.selectedOutputFormat}
                       onChange={this.outputChange}
                       placeholder={'Output Format'}
                       options={outputformat}
                       isMulti={true}
                       name="outputformat"
                       id="output_div"
                       />
                       <a class="q" data-tip="Please choose the output title format."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                      <ReactTooltip place="right" type="dark" effect="solid"/>
                     </div>
                  </div>

                  <div class="box_area" style={{margin:'20px 0'}}>
                    <div class="box l">
                      <label for="notification_div" styles={{color:'#1F1A1A'}}>Notification</label>
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
                         <a class="q" data-tip="How to get notified."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                         <ReactTooltip place="right" type="dark" effect="solid"/>
                      </div>
                    </div>

                    <div class="box_area" style={{margin:'20px 0'}}>
                      <div class="box l">
                        <label for="priority" styles={{color:'#1F1A1A'}}>Priority</label>
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
                          <a class="q" data-tip="High - Need to be done within 5 days, Medium - within 10 days and Low - within 20 days."> <i class="fa fa-question-circle" aria-hidden="true"></i> </a>
                          <ReactTooltip place="right" type="dark" effect="solid"/>
                        </div>
                      </div>

                    <br/>
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
