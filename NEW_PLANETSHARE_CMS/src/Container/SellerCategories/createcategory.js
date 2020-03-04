import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import {Link,Redirect} from "react-router-dom";
import {CREATEPACKS,TAG,TOKEN,USERID,HEADER} from '../../url.js';
import BreadCrumb from '../../Component/breadcrumb';
import $ from 'jquery';
import axios from 'axios';
import Loader from '../../Component/Loader/loader'
class PacksCreate extends Component {
  state={
    isLoading:true,pack_type:'image',vidSelect:false,imgSelect:true,loading_msg:'Please Wait'
}
  componentDidMount()
  {
  }
  formSubmit=(e)=>{
    e.preventDefault();
    var pack_name=e.target.pack_name.value.trim();
    var pack_desc=e.target.pack_desc.value.trim();
    var pack_price=e.target.pack_price.value.trim();
    var pack_expire_time=e.target.pack_expire_time.value.trim();
    var pack_type=e.target.pack_type.value.trim();
    var pack_count=e.target.pack_count.value.trim();
    var content_type=''
    var number_pattern=/^[0-9]+$/;
    if(pack_price=='' || pack_count=='' || pack_name=='' || pack_desc=='' || pack_expire_time=='' || pack_type=='')
    {
      alert('All Fields Are Mandatory');
      return false;
    }
    if(pack_type=="video")
    {
       content_type=e.target.content_type.value.trim();
      if(content_type=='')
      {
        alert('All Fields Are Mandatory');
        return false;
      }
    }
    if(!pack_price.match(number_pattern) || !pack_count.match(number_pattern) || !pack_expire_time.match(number_pattern))
    {
      alert('Something Went Wrong');
      return false;
    }
    axios.post(CREATEPACKS,{
      'tag':TAG,
      'pack_type':this.state.pack_type,
       pack_name:pack_name,
       pack_desc:pack_desc,
       pack_expire_time:pack_expire_time,
       pack_count:pack_count,
       content_type:content_type,
       pack_price:pack_price,
       pack_expire_time:pack_expire_time,
      'user_id':USERID
    },HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data;
          this.setState({isLoading:false});
          setTimeout(()=>this.props.history.push('/packs'),1000)
        }
    }).catch((error)=>{

    })
  }
  render() {
    const {isLoading,loading_msg}=this.state;
    if(isLoading)
    {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="PackList"/>
          <form class="pack_form" onSubmit={this.formSubmit}>
            <div class="field">
              <div class="inputbox">
                <label>Pack Name</label>
                <input type="text" name="pack_name" required/>
              </div>
            </div>
            <div class="field">
              <div class="inputbox">
                <label>Description</label>
                <textarea  name="pack_desc" required></textarea>
              </div>
            </div>
            <div class="field">
              <div class="inputbox">
                <label>Description</label>
              <select name="pack_type" required onChange={(e)=>{this.setState({pack_type:e.target.value})}}>
                <option value="image">Image</option>
                <option value="video">Video</option>

              </select>
              </div>
            </div>
            <div class="field">
              <div class="inputbox">
                <label>Count</label>
                <input type="text" name="pack_count" required/>
              </div>
            </div>
            <div class="field">
              <div class="inputbox">
                <label>Price</label>
                <input type="text" name="pack_price" required/>
              </div>
            </div>
            <div class="field">
              <div class="inputbox">
                <label>Expire Time(In Days)</label>
                <input type="text" name="pack_expire_time" required/>
              </div>
            </div>
            {this.state.pack_type=="video" &&  <div class="field">
                <div class="inputbox">
                  <label>Content Type</label>
                  <input type="text" name="content_type"/>
                </div>
              </div>}
            <div class="buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    );
   }
  else {
    return(<div id="content">{loading_msg}</div>);
  }
}
}

export default Authentication(PacksCreate);
