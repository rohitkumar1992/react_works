import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import {Link,withRouter} from "react-router-dom";
import Resumable from 'resumablejs';
import Progress from './progressbar';
import VIDEODESCRIPTION from './videodescription';
import {CHUNK_UPLOAD_SERVICE} from '../../../../url.js';
const uploadPercentage='0%';
class VOD extends Component {
  state={
    percentage:'',
    video_id:'',
    showTable:false,
    tableContent:[],
    nextComponent:false,
    email:'',

  }
  componentWillMount()
  {
    var email=localStorage.getItem('username');
    this.setState({email:email});
  }
  componentDidMount()
  {
    var $ = window.$; // use the global jQuery instance
  var $fileUpload = $('#resumable-browse');
  $('#start-upload-btn').hide();
    $('#pause-upload-btn').hide();
  var $fileUploadDrop = $('#resumable-drop');
  var $uploadList = $("#file-upload-list");
  if ($fileUpload.length > 0 && $fileUploadDrop.length > 0) {
      var resumable = new Resumable({

          // Use chunk size that is smaller than your maximum limit due a resumable issue
          // https://github.com/23/resumable.js/issues/51
          chunkSize: 10 * 1024 * 1024, // 1MB
          fileType: ['mp4','3gp','avi','flv'],
          simultaneousUploads:1,
          testChunks: false,
          throttleProgressCallbacks: 1,
          maxFiles:1,
          // Get the url from data-url tag
          target: $fileUpload.data('url'),
          // Append token to the request - required for web routes
          query:{_token : $('input[name=_token]').val(),tag:'seller'},
          maxFilesErrorCallback(files, errorCount){ console.log(errorCount);},
          maxFileSizeErrorCallback(file, errorCount){console.log(errorCount)}
      });

  // Resumable.js isn't supported, fall back on a different method
  $('#resumable-browse').click(function()
  {
    $('#dubbing_cont').addClass('collapsed');
    $('#dubbing_upload_button').removeClass('show');
  })
      if (!resumable.support) {
          $('#resumable-error').show();
      } else {
          // Show a place for dropping/selecting files
          $fileUploadDrop.show();
          resumable.assignDrop($fileUpload[0]);
          resumable.assignBrowse($fileUploadDrop[0]);

          // Handle file add event

          resumable.on('fileAdded', function (file) {
              // Show progress pabr

              $fileUpload.hide();
              $uploadList.show();
              $('#progress_bar_status').show()

              $('#file_upload_button').hide()
              // $('#start-upload-btn').show();
                $('#pause-upload-btn').show();
              // Show pause, hide resume
              $('.resumable-progress .progress-resume-link').hide();
              $('.resumable-progress .progress-pause-link').show();
              // Add the file to the list
              $uploadList.append('<li class="resumable-file-' + file.uniqueIdentifier + '">Uploading <span class="resumable-file-name"></span> <span class="resumable-file-progress"></span>');
              $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-name').html(file.fileName);
              // Actually start the upload
                              // console.log(file);
              resumable.upload();
          });

          resumable.on('fileSuccess', function (file, message) {
            var result=JSON.parse(message);
            $('#video_id').val(result.video_id);

            $('#start-upload-btn').hide();
            $('#pause-upload-btn').hide();
            $('#progress_bar_status').hide();
            $('#file_upload_button').show();
            $('#progress_bar_status').hide()
            $('#save_button').show();
              $fileUpload.show();


              // Reflect that the file upload has completed
              $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html('(completed)');
          });
          resumable.on('fileError', function (file, message) {
              // Reflect that the file upload has resulted in error
              $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html('(file could not be uploaded: ' + message + ')');
          });
          resumable.on('fileProgress', function (file) {
              // Handle progress for both the file and the overall upload
              $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-progress').html(Math.floor(file.progress() * 100) + '%');
              $('.progress-bar').css({width: Math.floor(resumable.progress() * 100) + '%'});
              $('#hidden_percent').val(Math.floor(file.progress() * 100));
              $('#show_percentage').html(Math.floor(file.progress() * 100)+'%');
             // uploadPercentage=Math.floor(file.progress() * 100) + '%';
              // this.setState({percentage:'10'});
          });
      }
      $('#pause-upload-btn').click(function(){
        $('#pause-upload-btn').hide();
        $('#start-upload-btn').show();
          if (resumable.files.length>0) {
              if (resumable.isUploading()) {
                return  resumable.pause();
              }
              return resumable.upload();
          }
      });
      $('#start-upload-btn').click(function(){
                $('#start-upload-btn').hide();
                  $('#pause-upload-btn').show();
          resumable.upload();
      });

  }
}

pause(){
 // Show resume, hide pause
 $('.resumable-progress .progress-resume-link').show();
 $('.resumable-progress .progress-pause-link').hide();
}
cancel(){
$('.resumable-file-progress').html('canceled');
}
redirectHandler()
{
  var video_id=document.getElementById('video_id').value;
  this.setState({video_id:video_id})
  // this.props.history.push(`/upload/description/${video_id}`);
}
formContent=()=>{
  var video_id=document.getElementById('video_id').value;
  // this.setState({video_id:video_id});
  this.props.history.push(`/dashboard/seller/uploadDetails/${video_id}`)
}
  render() {
    return (
      <div class="page-body-wrapper" style={{backgroundColor:'white'}}>
      <div class="col-12 col-md-12">
     <div class="file-upload">
  <div class="image-upload-wrap">

     <div class="col-12 col-md-12 mx-auto ml-8">
    <div class="drag-text">   <h6 class="text-center">File Upload</h6>
    <img src="img/upload_icon.png" class="mx-auto ml-8"/> </div>

    <div class="text-center" >
        <div id="resumable-error" style={{display: "none"}}>
            Resumable not supported
        </div>
        <div class="col-md-12">
        <div id="resumable-drop">
        <div id="file_upload_button" class="mt-16">
        <span class="btn btn-success fileinput-button">
            <i class="glyphicon glyphicon-plus"></i>
             <button type="button" class="btn btn-success fileinput-button" id="resumable-browse" data-url={`${CHUNK_UPLOAD_SERVICE}/${this.state.email}`} >Select Files</button>
        </span>
        </div>
        </div>
        <button type="button" class="btn btn-warning" aria-label="Pause upload" id="pause-upload-btn" style={{display: "none"}}>
            <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
        </button>
        <button type="button" class="btn btn-info" aria-label="Start upload" id="start-upload-btn" style={{display: "none"}}>
            <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
        </button>
        </div>
        <br/>
 <div class="col-lg-offset-2 col-lg-12" id="progress_bar_status" style={{display:'none'}}>
     <p>
     <Progress  percent={this.state.percentage}/>
     <div id="show_percentage" ></div>
     </p>

 </div>
 <div class="col-md-12">
 <ul id="file-upload-list" class="list-styled"  style={{display: "none",backgroundColor:'rgba(0,0,0,0.1)', color:'black'}}>
 </ul>
 </div>
 <input type="hidden" id="video_id"/>
 <button class="btn btn-primary pull-right" id="save_button" style={{display:'none'}} onClick={this.formContent}>Next</button>
</div>
  <br/>
    <br/>
            </div></div></div></div></div>
        )

      }
    }
export default withRouter(VOD);
// {this.state.showTable && <Paging total={this.state.total} clicked={this.pagingContent.bind(this)} first={this.state.first} rows={this.state.rows} search={this.state.search}/>}
