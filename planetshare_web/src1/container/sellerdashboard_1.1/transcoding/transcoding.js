import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
// import fileupload from 'fileupload';
import Resumable from 'resumablejs';
import Progress from '../chunkupload/progressbar';
import './transcoding.css';
const uploadPercentage='0%';
class VOD extends Component {
  state={
    percentage:'',
    video_id:'',
    showTable:false,
    tableContent:[],
    nextComponent:false,
    email:'',
    quality:[]

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

  // $('#start-upload-btn').hide();
  //   $('#pause-upload-btn').hide();
   // var $fileUploadDrop = $('#resumable-drop');
   // var $uploadList = $("#file-upload-list");
  // if ($fileUpload.length > 0 && $fileUploadDrop.length > 0) {
        var $qualityChecker = $("#quality_checker");
  var i = 0;
 var arr = [];
 $qualityChecker.on('click',function()
 {
   $('.messageCheckbox:checked').each(function () {
       arr[i++] = $(this).val();
   });
   // this.setState({quality:arr});

      var resumable = new Resumable({
        target:'http://192.168.24.132/PlanetShare/public/api/website/transcode',

          // Use chunk size that is smaller than your maximum limit due a resumable issue
          // https://github.com/23/resumable.js/issues/51
          chunkSize: 10 * 1024 * 1024, // 1MB
          simultaneousUploads:1,
          testChunks: false,
          throttleProgressCallbacks: 1,
          maxFiles:1,
          // Get the url from data-url tag
          // Append token to the request - required for web routes
          query:{_token : $('input[name=_token]').val(),bitrate:arr},
          maxFilesErrorCallback(files, errorCount){ console.log(errorCount);},
          maxFileSizeErrorCallback(file, errorCount){console.log(errorCount)}
      });
      var $fileUploadDrop = $('#resumable-drop');
      var $uploadList = $("#file-upload-list");
      var $uploadstart = $("#Upload-browse");

  // Resumable.js isn't supported, fall back on a different method
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
                              $uploadstart.on('click',function()
                              {
              resumable.upload();});
          });


          resumable.on('fileSuccess', function (file, message) {
            var result=JSON.parse(message);
            // $('#video_id').val(result.video_id);
            console.log(result.url);
            var data=result.url;
            var dwnld_url='<ul>';
            for(var i=0;i<data.length;i++)
            {
              dwnld_url+='<li><h3>'+arr[i]+'</h3><a href="'+data[i]+'">'+data[i]+'</a></li>'
            }
            dwnld_url+='</ul>';
            $('#file-download-list').html(dwnld_url);
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

  //}
  console.log(arr);
  });
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
  this.setState({video_id:video_id,nextComponent:true})
  // this.props.history.push(`/upload/description/${video_id}`);
}
// set=(e)=>
// {
//   e.preventDefault();
//   var i = 0;
//          var arr = [];
//          $('.messageCheckbox:checked').each(function () {
//              arr[i++] = $(this).val();
//          });
//          this.setState({quality:arr})
//         console.log(arr);
//
// }

  render() {
    return (
      <div>
      <div>
    <div class="text-center" >
        <div id="resumable-error" style={{display: "none"}}>
            Resumable not supported
        </div>

        <br/>

 <input type="hidden" id="video_id"/>
</div>
  <br/>
    <br/>
            </div>
            <div class="row">
            <div class="col-md-6" >
              <div class="row"><h1>Transcoding</h1></div>
              <div class="row"><div class="col-md-6">
              <div class="col-md-12">
              <div id="resumable-drop"  >
              <div id="file_upload_button">
              <span class="btn btn-success fileinput-button">
                  <i class="glyphicon glyphicon-plus"></i>
                   <button type="button" class="btn btn-success fileinput-button" id="resumable-browse"  >Select Files</button>
              </span>
              </div>
              </div>
                       <button type="button"  id="Upload-browse"  >Upload Files</button>
              <button type="button" class="btn btn-warning" aria-label="Pause upload" id="pause-upload-btn" style={{display: "none"}}>
                  <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
              </button>
              <button type="button" class="btn btn-info" aria-label="Start upload" id="start-upload-btn" style={{display: "none"}}>
                  <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
              </button>
              </div>
              </div>
              <div class="col-md-6">
              Settings
              <select>
              <option>MP4</option>
              <option>3gp</option>
              <option>WebM</option>
              </select>
                  <form action="javascript:">
                  <ul>
                    <li>1080p<input type="checkbox" value="1080" class="messageCheckbox" name="quality[]" /></li>
                    <li>720p<input type="checkbox" value="720" class="messageCheckbox" name="quality[]"/></li>
                    <li>360p<input type="checkbox" value="360" class="messageCheckbox" name="quality[]"/></li>
                  </ul>
                  <button id="quality_checker">start</button>
                    </form>
              </div>
            </div>
            </div>
            <div class="col-md-6"  style={{border:'1px solid grey'}}>
            Output
            <div class="col-lg-offset-2 col-lg-12" id="progress_bar_status" style={{display:'none'}}>
                <p>
                <Progress  percent={this.state.percentage}/>
                <div id="show_percentage" ></div>
                </p>
            </div>
            <div class="col-md-8">
            <ul id="file-upload-list" class="list-styled"  style={{display: "none",backgroundColor:'rgba(0,0,0,0.5)'}}>
            </ul>
            </div>
            <div id="file-download-list" class="list-styled" >
            </div>
            </div>
            </div>
                        </div>
        )

      }
    }
export default VOD;
// {this.state.showTable && <Paging total={this.state.total} clicked={this.pagingContent.bind(this)} first={this.state.first} rows={this.state.rows} search={this.state.search}/>}
