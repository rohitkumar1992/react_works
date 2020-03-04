import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
// import fileupload from 'fileupload';
import Resumable from 'resumablejs';
import Progress from './progressbar';
import Pagination from "react-js-pagination";
import {UPLOAD,VIDEO_DESCRIPTION_UPLOAD,VIDEO_DESCRIPTION_EDIT,VIDEO_CHANGESTATUS} from '../../url.js';
import VideoList from '../../container/videolist/videolist';
import thumb from '../../video_thumb.png';
import play from '../../play_icon.png';
import {Button} from 'primereact/button';
import VideoDescription from '../videoDescription/videoDescription';
import Modal from '../modal/modal.js';
import Loader from '../../component/loader/loader.js';
// import Action from '../Action/action.js';
// import '../Action/action.css';
const uploadPercentage='0%';
class VOD extends Component {
  state={
    percentage:'',
    video_id:'',
    showTable:false,
    tableContent:[],
    nextComponent:false,
    editData:[],
    search:'',
    active:1,
    activePage:1,
    itemsCountPerPage:1,
    totalItemsCount:1,
    pageRangeDisplayed:3,
    loader:true
  }
  componentDidMount()
  {
//     var el = document.querySelector('.more');
// var btn = el.querySelector('.more-btn');
// var menu = el.querySelector('.more-menu');
// var visible = false;
//
//
//
// btn.addEventListener('click', ()=>this.showMenu(el,btn,menu,visible), false);
    this.handlePageChange('1');
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
          simultaneousUploads:1,
          testChunks: false,
          throttleProgressCallbacks: 1,
          maxFiles:1,
          // Get the url from data-url tag
          target: $fileUpload.data('url'),
          // Append token to the request - required for web routes
          query:{_token : $('input[name=_token]').val()},
          maxFilesErrorCallback(files, errorCount){ console.log(errorCount);},
          maxFileSizeErrorCallback(file, errorCount){console.log(errorCount)}
      });

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
  this.setState({video_id:video_id,nextComponent:true})
  // this.props.history.push(`/upload/description/${video_id}`);
}
video_thumb(host_url,video_id)
{
return <img src={thumb} style={{width:'70px',height:'60px'}}/>
}
action(status,video_id) {
 return (
   <div style={{textAlign:'center',marginLeft:'-50px'}}>
        <i className="fa fa-edit" style={{width:'2em',height:'2em',cursor:'pointer',color:'green'}} onClick={()=>this.editVideoHandler(video_id)}></i>
         <i className="fa fa-trash " style={{marginRight: '.5em',width:'2em',height:'2em',cursor:'pointer',color:'#d9534f'}} ></i>

  </div>);
}
editVideoHandler(video_id)
{
  var email=localStorage.getItem('email');
    axios.post(VIDEO_DESCRIPTION_EDIT, {video_id:video_id
    })
  .then(response=>{
    if(response.data.success)
    {
        this.setState({nextComponent:true,video_id:video_id,editData:response.data.data[0]});
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
confirmPopUp()
{
  this.setState({nextComponent:false});
}
status(status,video_id,user_id)
{
  var content='';
  if(status=='0' || status==0 || status=='1' || status==1)
  {
    content=<button className="inactive_button  btn-success"  style={{cursor:'pointer',width:'68px'}}>Approved</button>;
  }
  if(status=='2' || status==2)
  {
    content=<button className="active_button btn-danger"  style={{cursor:'pointer',width:'68px'}}>Pending</button>;
  }
  if(status=='3' || status==3)
  {
    content=<button className="active_button btn-danger"  style={{cursor:'pointer',width:'68px'}}>Disapproved</button>;
  }
  return content;
}
changeStatus(video_id,status)
{
    axios.post(VIDEO_CHANGESTATUS, {
    video_id:video_id,
    status:status
    })
  .then(response=>{
      if(response.data.success)
      {
        this.setState({show:false})
          if(response.data.status=='1')
          {
             $('#status_'+video_id).removeClass("btn-danger");
             $('#status_'+video_id).addClass("btn-success");
            document.getElementById('status_'+video_id).innerHTML='Active';
            document.getElementById('status_'+video_id).value="1";
          }
          else if(response.data.status=='0') {
            $('#status_'+video_id).removeClass("btn-success");
            $('#status_'+video_id).addClass("btn-danger");
           document.getElementById('status_'+video_id).innerHTML='Inactive';
             document.getElementById('status_'+video_id).value="0";
          }
    }
  })
  .catch(function (error) {
    console.log(error);
});
}
handlePageChange=(pageNumber)=> {
var email=localStorage.getItem('email');
  axios.post(`${VIDEO_DESCRIPTION_UPLOAD}?page=${pageNumber}`, {
    email:email,
  })
.then(response=>{
var result=response.data.data;
setTimeout(()=>{this.setState({
              activePage:result.current_page,
              itemsCountPerPage:result.per_page,
              totalItemsCount:result.total,
              tableContent:result.data,
              showTable:true,
              loader:false
            });},1000);
})
.catch(function (error) {
  console.log(error);
});
  }
  render() {
    const video_desc=(this.state.tableContent.length!='0' && this.state.tableContent.map((result,key)=>{
    return (
      <tr >
        <td style={{width:'50px'}}>{this.video_thumb(result.host_url,result.video_id)}</td>
        <td><Modal video_id={result.video_id} req_id={result.request_id} /></td>
        <td>{result.title}</td>
        <td>{result.description}</td>
        <td>{result.cast}</td>
        <td>{result.director}</td>
        <td>{result.Premium=='0'?'Free':'Premium'}</td>
        <td>{result.Premium=='0'?'0':result.Price}</td>
        <td >{this.status(result.status,result.video_id)}</td>
        <td >{this.action(result.status,result.video_id)}</td>
    </tr>)
    }));
    const form=<VideoDescription video_id={this.state.video_id} confirmPopUp={()=>this.confirmPopUp()} form_data={this.state.editData}/>
    if(this.state.nextComponent)
    {
      return form;
    }
    else {
      if(this.state.loader)
      {
        return <Loader content="Your Listing"/>
      }
      else {
    return (
      <div>
    <div class="text-center" >
      <h2>File Upload</h2>
        <div id="resumable-error" style={{display: "none"}}>
            Resumable not supported
        </div>
        <div class="col-md-12">
        <div id="resumable-drop"  >
        <div id="file_upload_button">
        <span class="btn btn-success fileinput-button">
            <i class="glyphicon glyphicon-plus"></i>
             <button type="button" class="btn btn-success fileinput-button" id="resumable-browse" data-url={`${UPLOAD}/amitrepublik@gmail.com`} >Select Files</button>
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
 <div class="col-md-8">
 <ul id="file-upload-list" class="list-styled"  style={{display: "none",backgroundColor:'rgba(0,0,0,0.5)'}}>
 </ul>
 </div>
 <input type="hidden" id="video_id"/>
 <button class="btn btn-danger" id="save_button" onClick={this.redirectHandler.bind(this)} style={{display:'none'}}>Save</button>
</div>
  <br/>
    <br/>
  {this.state.showTable && <h3>Content Listing</h3>}
  <br/>
{this.state.showTable && <table class="table">
  <thead>
    <tr>
      <th scope="col">Thumbnail</th>
      <th scope="col">Request Id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Cast</th>
      <th scope="col">Director</th>
      <th scope="col">Tag</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {video_desc}
  </tbody>
</table>
}
{this.state.totalItemsCount > this.state.itemsCountPerPage &&<div className="d-flex justify-content-end">
<Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass='page-item '
          linkClass="page-link "
        /></div>}
            </div>
        )}
      }
      }
    }
export default VOD;
// {this.state.showTable && <Paging total={this.state.total} clicked={this.pagingContent.bind(this)} first={this.state.first} rows={this.state.rows} search={this.state.search}/>}
