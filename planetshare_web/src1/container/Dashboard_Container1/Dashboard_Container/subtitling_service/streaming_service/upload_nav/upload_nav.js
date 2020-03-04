import React, { Component } from 'react';
import {Link} from "react-router-dom";
import VideoList from '../../../../component/videolist/videolist';
import UPLOAD from '../../chunkupload/resumable.js';
import Select from 'react-select';
import axios from 'axios';
import {VIDEOS,VIDEO_DESCRIPTION_EDIT} from '../../../../url.js';
import $ from 'jquery';
const dubboptions = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Bengali', label: 'Bengali' },
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Bhojpuri', label: 'Bhojpuri' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Korean', label: 'Korean' }
];
class UploadNav extends Component {
  state={
    list:[],
    upload_tag:'',
    loadUpload:false
  }
  componentDidMount()
  {

    var route=this.props.location.pathname.split('/');
    this.setState({upload_tag:route[4],loadUpload:true});
    axios.post(VIDEOS,{
      page_limit:'20',
      request_coming_from:'web'
    })
  .then(response=>{
    if(response.data.data!='')
    this.setState({list:response.data.data.data});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    const videolist = (this.state.list.length>0 && this.state.list.map((result,index)=>{
    return <VideoList video_id={result.video_id} tag="transcode_service" img_url={`http://192.168.24.132/${result.thumbnail}`} host_url={result.host_url} title={result.title} description={result.description} video_tag={result.Premium=='0'?'Free':'Premium'} price={result.Premium=='0'?'0':result.Price}/>
  }));
    return(
      <div class="col-12 col-md-12">
        <ul class="font-weight-bold">
          <li class="nav-item" id="dubbing_cont" class="nav-link" data-toggle="collapse" href="#dubbing_upload_button" aria-expanded="false" aria-controls="ui-basic">
            <center><button class="btn btn-md btn-primary ">Upload Your Video&nbsp;<i class="fa fa-upload"></i></button></center>
            <div class="collapse" id="dubbing_upload_button">
                <ul class="nav flex-column sub-menu">
                  {this.state.loadUpload && <UPLOAD tag={this.state.upload_tag}/>}
                </ul>
             </div>
          </li>
        </ul>
        <section class="features section text-center">
            <div class="container">
                <div class="features-inner section-inner has-top-divider">
                    <div class="features-header text-center">
                          <h4 style={{marginTop:'-20px'}}>Or</h4>
                        <div class="container-sm">
                            <h5 class="section-title mt-0">You May Also Select</h5>
                            <p class="section-paragraph mb-0"></p>
                        </div>
                    </div>
                    <div class="features-wrap">
                      {videolist}
                     </div>
                  </div>
                </div>
          </section>
       </div>

)
}
}
export default UploadNav;
