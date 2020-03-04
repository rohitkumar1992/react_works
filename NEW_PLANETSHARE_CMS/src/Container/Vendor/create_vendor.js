import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {LOGIN,TAG,TOKEN,VENDORLIST,USERID,HEADER,CHANGE_STATUS} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import axios from 'axios';
import $ from 'jquery';
import { EditorState,convertToRaw,convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Loader from '../../Component/Loader/loader'
class VendorList extends Component {
  state={
    isLoading:false,editorState:EditorState.createEmpty(),contentState: {}
}
  componentDidMount()
  {
    setTimeout(()=>this.setState({isLoading:true}),1000)
  }
  onEditorStateChange=(editorState) => {
  this.setState({
    editorState,
  });
};
onContentStateChange: Function = (contentState) => {
  this.setState({
    contentState,
  });
};
handleSubmit = (e) => {
   e.preventDefault()
   var convertedData = convertToRaw(this.state.editorState.getCurrentContent())
console.log(convertedData.blocks);
   this.setState({editorState: EditorState.createEmpty()})
 }
convertCommentFromJSONToHTML = (text) => {
      return stateToHTML(convertFromRaw(JSON.parse(text))) }
  render() {
console.log(convertToRaw(this.state.editorState.getCurrentContent()))
    const {isLoading}=this.state;
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="Create Vendor"/>
          <Editor
        editorState={this.state.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
        onContentStateChange={this.onContentStateChange}
      />
        </div>
      {/*  <div dangerouslySetInnerHTML={{ __html: this.convertCommentFromJSONToHTML(this.state.editorState.getCurrentContent())}}>  </div>*/}
      <div id="comment-button-div">
        <button onClick={this.handleSubmit} id="comment-submit-button" color="teal">Submit</button>
      </div>
      </div>
    );
  }
 else {
   return(<div id="content"><Loader/></div>);
 }
  }
}

export default Authentication(VendorList);
