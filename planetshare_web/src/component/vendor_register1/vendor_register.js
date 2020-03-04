import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './vendor_register.css';
import axios from 'axios';
import Signup from '../../container/login_signup/signup'
import Echo from 'laravel-echo';
class Transcoding extends Component {
  render() {
    return (
      <div class="top_div">
      <div class="top_div" style={{backgroundColor:'#fffff'}}>
      <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="vendor.mp4" type="video/mp4"/>
  </video>
  <div class="container h-100">
  <div class="d-flex h-100 text-center align-items-center">
    <div class="w-100 text-white">
      <h1 class= "display-4 text-left offset-lg-1" style={{color:'white',fontWeight:'bold'}}>Add your Services and Earn money .

  <p id="para_7">
  Join Planetshare’s worldwide community of contributors and earn money.
  </p>
  </h1>
    <Modal modalIsOpen="true" tag="role_vendor" openUrl="loginModal"/>
      {/*<p class="lead mb-0 text-left offset-lg-1"><button type="button" class="btn btn-lg button_subpage_1 btn-primary" onClick={()=>this.openNav()}>Get Started</button></p>*/}
    </div>
  </div>
  </div>
  </header>

  <div class="box_1">
   <div class="container">
     <p class="para_11 ml-5">Become Vendor</p>
      <div class="row l   offset-lg-1 mr-5">

        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
         <div class="box-part1 text-center">
          <i class="fa fa-gear  icon_font fa-2x" aria-hidden="true"></i>
          <div class="title">
              <p class="para_4">Services</p>
              </div>

              <div class="text mt-5">
              <span class="para_6">Add your expertise to provide high-quality dubbing and subtitling services.</span>
          </div>
         </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="box-part1 text-center">
            <i class="fa fa-twitter icon_font fa-2x" aria-hidden="true"></i>
          <div class="title">
            <p class="para_4">Get Jobs</p>
          </div>
          <div class="text mt-5">
            <span class="para_6">Download job's video and upload your final work on time</span>
          </div>
         </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
       <div class="box-part1 text-center">
        <i class="fa fa-camera  icon_font fa-2x" aria-hidden="true"></i>
        <div class="title">
            <p class="para_4">Get Paid</p>
            </div>

            <div class="text mt-5">
            <span class="para_6">Get paid handsomely for providing high-quality services to customers.</span>
        </div>
       </div>
      </div>

       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

        <div class="box-part1 text-center ">

                      <i class="fa fa-pinterest-p fa-2x icon_font" aria-hidden="true"></i>

          <div class="title">
            <p class="para_4">Refer</p>
          </div>

          <div class="text mt-5">
            <span class="para_6">Make more money by referring to new clients and customers.</span>
          </div>


         </div>
      </div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="row p-3">
  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >Register</h3>
  <div class="o_Storytelling_Storytelling_text" >Register with Planetshare and update your profile with relevant information.</div>
  </div>
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/vendor1.jpg" />
  </div>
  </div>
  </div>





  <div class="container ">
  <div class="row p-3">
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/vendor2.jpg" />
  </div>

  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >Review</h3>
  <div class="o_Storytelling_Storytelling_text" >Once your profile is updated, it will be reviewed by our team and we will notify as soon as your company profile is approved. </div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="row p-3">
  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >Rewards</h3>
  <div class="o_Storytelling_Storytelling_text" >All potential suppliers will be rewarded handsomely for their efforts to provide high-quality services to customers.</div>
  </div>
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/vendor3.jpg" />
  </div>
  </div>
  </div>
  <div class="row ">
  <div class="col-lg-12 col-md-10 text-center ff mt-5"  style ={ { backgroundImage: "img/all-img/app-d019150d52.jpg" } }>
  <div class="bottom_div">
<div  style={{marginLeft:'500px'}}>
  <Modal modalIsOpen="true" tag="role_vendor" openUrl="loginModal"/></div>
  {/*<button type="button" class="btn btn-lg button_subpage_1 btn-primary" onClick={()=>this.openNav()}>Get Started</button>*/}
  </div>
  </div>
  </div>
  <div class="row mt-5">
  <div class="col-lg-12 col-md-10 text-center ">
  <div class="bottom_di" >

  </div>
  </div>
  </div>
  </div>
</div>
    );
  }
}
export default Transcoding;
