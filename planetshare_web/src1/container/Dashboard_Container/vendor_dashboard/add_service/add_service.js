import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {VENDOR_ADDED_SERVICE_LIST} from '../../../../url.js';
import TranscodeForm from '../service_form/transcodeform.js';
import DubbingForm from '../service_form/dubbing_form.js';
import SubtitleForm from '../service_form/subtitle_form.js';
import Select from 'react-select';
import '../service_form/form.css';
import './add_service.css';
import ChildNavbar from '../childnavbar/childnavbar';
const service_name=[{
  label:'Subtitle',value:'subtitle'
},
{label:'Dubbing',value:'dubbing'
}]
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
    var count=0;
  for(var i=0;i<this.state.service_name.length;i++)
  {
    if(selectedOption.value==this.state.service_name[i].value)
    {
      count++;
    }
  }
  if(count>0)
  {
      this.setState({ selectedService:selectedOption});
  }
  else {
    this.props.history.push(`/dashboard/vendor/${selectedOption.value}/details`);
    return false;
  }
}
  render()
  {
    return(
      <div class="container-scroller ">
        {/*<ChildNavbar head="Add Service"/>*/}
        <div class="page-body-wrapper gap" style={{backgroundColor:'white'}}>
      <div class="col-12 col-md-12 add_services_box">
        <section class="features section text-center">
        <ul class="font-weight-bold" >
                  <li class="nav-item" id="dubbing_cont" class="nav-link">
                    <center><Select
                     value={this.state.selectedService}
                     onChange={this.languageChange}
                     options={service_name}
                     isMulti={false}
                     placeholder="Add Service"
                     name="service"
                     id="service"
                     /><br/>
                    </center>

                      {this.state.selectedService.value=="dubbing" && <DubbingForm />}
                      {this.state.selectedService.value=="subtitle" && <SubtitleForm />}
                  </li>
                </ul>
{/*(this.state.selectedService.value=="transcoding" || this.state.selectedService.value=="dubbing" || this.state.selectedService.value=="subtitle") && <div class="right_bord_direction">
<div class="container">
<div class="timeline">
  <div class="circle c_right">
    <div class="content">
      <h2>Add Services</h2>

    </div>
  </div>
  <div class="circle c_right">
    <div class="content">
      <h2>Get Jobs</h2>

    </div>
  </div>

  <div class="circle c_right">
    <div class="content">
      <h2>Get Paid</h2>

    </div>
  </div>

  </div>
  </div>
  </div>*/}


          </section>
       </div></div></div>

)
}
}
export default UploadNav;
