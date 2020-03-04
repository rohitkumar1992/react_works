import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactResumableJs from 'react-resumable-js';
import Resumable from 'resumablejs';
class VOD extends Component {

  render() {

      return (
        <fieldset>
          <p>You can add other inputs, selects or stuff right here to complete a form.</p>
          <ReactResumableJs
            uploaderID="image-upload"
            dropTargetID="myDropTarget"
            filetypes={[]}
            fileAccept={["image/*","video/*"]}
            fileAddedMessage="Started!"
            completedMessage="Complete!"
            maxFileSize="100000000"
            service="http://192.168.24.132/PlanetShare/public/api/upload"
            textLabel="Uploaded files"
            previousText="Drop to upload your media:"
            disableDragAndDrop={true}
            onFileSuccess={(file, message) => {
              console.log(file, message);
            }}
            onFileAdded={(file, resumable) => {
              $('.resumable-progress, .resumable-list').show();
              resumable.upload();
            }}
            maxFiles={10}
            startButton={true}
            pauseButton={true}
            cancelButton={true}
            onStartUpload={() => {
                console.log("Start upload");
            }}
            onFileProgress={(file)=>{

            }}
            onCancelUpload={() => {
                this.inputDisable = false;
            }}
            onPauseUpload={() =>{
                this.inputDisable = false;
            }}
            onResumeUpload={() => {
                this.inputDisable = true;
            }}

          />
        </fieldset>

      );
    }
}
export default VOD;
