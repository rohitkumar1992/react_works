import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
// import fileupload from 'fileupload';
import Resumable from 'resumablejs';
import cancel from './cancel.png';
import pause from './pause.png';
class VOD extends Component {
click()
{
var r = new Resumable({
    target: 'upload.php',
    testChunks: true,
    chunkSize: 1 * 1024 * 1024, // 1MB
    simultaneousUploads: 3,
});

r.assignBrowse(document.getElementById('add-file-btn'));

$('#start-upload-btn').click(function(){
    r.upload();
});

$('#pause-upload-btn').click(function(){
    if (r.files.length>0) {
        if (r.isUploading()) {
          return  r.pause();
        }
        return r.upload();
    }
});

var progressBar = new ProgressBar($('#upload-progress'));

r.on('fileAdded', function(file, event){
    progressBar.fileAdded();
});

r.on('fileSuccess', function(file, message){
    progressBar.finish();
});

r.on('progress', function(){
    progressBar.uploading(r.progress()*100);
    $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
});

r.on('pause', function(){
    $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
});

function ProgressBar(ele) {
    this.thisEle = $(ele);

    return   this.fileAdded = function() {
         (this.thisEle).removeClass('hide').find('.progress-bar').css('width','0%');
    },

    this.uploading = function(progress) {
        (this.thisEle).find('.progress-bar').attr('style', "width:"+progress+'%');
    },

    this.finish = function() {
        (this.thisEle).addClass('hide').find('.progress-bar').css('width','0%');
    }
    }

  }
render()
{
return(
<div class="container" style={{paddingTop: "100px"}}>

    <div class="row">
        <div class="col-lg-offset-2 col-lg-8">
            <div class="page-header">
                <h1> Resumable file upload<small> <br/>with Resumable.js and Resumable.php</small></h1>
            </div>
        </div>

        <div class="col-lg-offset-2 col-lg-8">
            <button type="button" class="btn btn-success" aria-label="Add file" id="add-file-btn" onClick={this.click.bind(this)}>
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add file
            </button>
            <button type="button" class="btn btn-info" aria-label="Start upload" id="start-upload-btn">
                <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
            </button>
            <button type="button" class="btn btn-warning" aria-label="Pause upload" id="pause-upload-btn">
                <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
            </button>
        </div>


        <div class="col-lg-offset-2 col-lg-8">
            <p>
                <div class="progress hide" id="upload-progress">
                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"   style={{width: "0%"}}>
                        <span class="sr-only"></span>
                    </div>
                </div>
            </p>
        </div>
    </div>

</div>
);
}
}
export default VOD;
