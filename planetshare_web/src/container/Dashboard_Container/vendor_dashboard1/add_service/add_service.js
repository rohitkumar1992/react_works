import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {VENDOR_ADDED_SERVICE_LIST} from '../../../../url.js';
import TranscodeForm from '../service_form/transcodeform.js';
import DubbingForm from '../service_form/dubbing_form.js';
import SubtitleForm from '../service_form/subtitle_form.js';
import Select from 'react-select';
import ChildNavbar from '../childnavbar/childnavbar';
class UploadNav extends Component {
  state={
    selectedService:[],
    service_name:[]
  }
  componentDidMount()
  {
    axios.post(VENDOR_ADDED_SERVICE_LIST,
      {
        vendor_id:localStorage.getItem('userid'),
      }
    )
    .then(response=>{
      if(response.data.success=='1' || response.data.success==1)
      {
        this.setState({service_name:response.data.data});
      }
      else {
        return false;
      }
    })
    .catch(function (error) {
    console.log(error);
    });
  }
  languageChange = (selectedOption) => {
  this.setState({ selectedService:selectedOption});
}
  render()
  {
    console.log(this.state.selectedService.value);
    return(
      <div class="container-scroller">
        <ChildNavbar head="Add Service"/>
        <div class="page-body-wrapper gap" style={{backgroundColor:'white'}}>
      <div class="col-12 col-md-12">
        <section class="features section text-center">
        <ul class="font-weight-bold" >
                  <li class="nav-item" id="dubbing_cont" class="nav-link">
                    <center><Select
                     value={this.state.selectedService}
                     onChange={this.languageChange}
                     options={this.state.service_name}
                     isMulti={false}
                     name="service"
                     id="service"
                     /><br/>
                    </center>
                      {this.state.selectedService.value=="transcoding" && <TranscodeForm />}
                      {this.state.selectedService.value=="dubbing" && <DubbingForm />}
                      {this.state.selectedService.value=="subtitle" && <SubtitleForm />}
                  </li>
                </ul>
          </section>
       </div></div></div>

)
}
}
export default UploadNav;
