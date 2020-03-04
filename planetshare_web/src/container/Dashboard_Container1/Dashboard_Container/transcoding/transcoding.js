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
            <div class="col-md-6" style={{background: '#f7f8fa',borderRadius: '13px'}}>
              <div class="row"> <div class="col-md-6 mx-auto"><h4 class="p-2">Transcoding</h4></div></div>
              <div class="row"><div class="col-md-6">
              <div class="col-md-12 drag-and-drop-q6"> 
              <div class="drag-and-drop-icon"></div>             
              <div id="resumable-drop" class="mt-2">
              <div class="drag-and-drop-title text-md pt-2 pb-2 text-center">  Drag &amp; Drop  </div>
              <div class="drag-and-drop-intructions"> your files here, or
              {  /*
                <div class="upload-file-link">
                                    <input type="file" name="file" id="file" />
                                    <label class="" id="label_file" for="file">Browse</label>
                               </div>*/}
                
             </div>
              <div id="file_upload_button">  
              <span class="btn btn-success fileinput-button">
                  <i class="glyphicon glyphicon-plus"></i>
                   <button type="button" class="btn btn-success fileinput-button pt-1 pb-1 pr-2 pl-2" id="resumable-browse"> Select Files </button>
              </span>
              </div>
              </div>
                       <button type="button" class="btn btn-secondary p-2 pr-3 pl-3 mt-2 border-radius-0"  id="Upload-browse"> Upload Files </button>
              <button type="button" class="btn btn-warning  p-1 pr-3 pl-3 mt-2" aria-label="Pause upload" id="pause-upload-btn" style={{display: "none"}}>
                  <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
              </button>
              <button type="button" class="btn btn-info p-1 pr-3 pl-3 mt-2" aria-label="Start upload" id="start-upload-btn" style={{display: "none"}}>
                  <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
              </button>
              </div>
              </div>
              <div class="col-md-5 ml-auto">   <div class="col-md-10 ml-auto"> <h6> Settings </h6> </div>
             <div class="dropdown">
  <button class="btn-blue-features box-shadow dropdown-toggle p-1 text-sm pl-4 pr-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    MP4
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
    <a class="dropdown-item" href="#">WEBM</a>
    <a class="dropdown-item" href="#">HLS</a>
    <a class="dropdown-item" href="#">MPEG-DASH</a>
  </div>
</div>
                  <form action="javascript:"> 
                   <div class="form-check ">
                   <div class="d-flex" for="check1"> 1080p 
                    <input type="checkbox" value="1080" class="messageCheckbox input-mt" name="quality[]" /> </div>
                    </div> 
                     <div class="form-check">
                   <div class="d-flex" for="check1">  720p
                   <input type="checkbox" value="720" class="messageCheckbox input-mt" name="quality[]"/> </div>
                   </div>
                   <div class="form-check">
              <div class="d-flex"> 360p  
                   <input type="checkbox" value="360" class="messageCheckbox input-mt" name="quality[]"/></div>
                 </div>
                    </form>
              </div>
              <div class="col-7 ml-auto mt-4">
                <button id="quality_checker" class="btn-blue-features box-shadow p-1  pl-4 pr-4"> Start </button>
                </div>
            </div>
            </div>
            <div class="col-md-6"  style={{border:'1px solid grey'}}>
            Output
            <div class="col-lg-offset-2 col-lg-12" id="progress_bar_status" style={{display:'none'}}>
               
                  <p> <div id="show_percentage" class="text-right text-md text-dark" ></div>
                       <Progress  percent={this.state.percentage}/>                               
                  </p>
                     
                                
                                
               
            </div>
             <div class="col-lg-offset-2 col-lg-12">
             <div id=" " class="output__description">
                <div>
                    <p class="text-dark">
                        Demo version creates <br /> 30 second clip with watermark
                    </p>

                    <p class="text-dark">
                        <strong class="text-primary">Earn $5 Free Credit </strong>  
                        by creating an account.
                    </p>
                    <a href="https://portal.qencode.com/signup" target="_blank" >
                        <button class="btn-blue-features box-shadow p-1  pl-4 pr-4">Create
                            account
                        </button>
                    </a>
                </div>
            </div>
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
