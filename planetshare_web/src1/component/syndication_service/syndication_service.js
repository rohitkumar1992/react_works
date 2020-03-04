import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
class  Syndication extends Component {
  render() {
    return (
        <div class="top_div">
  <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
  <source src="img/transcoding.mp4" type="video/mp4"/>
  </video>
  <div class="container mt-5">
  <span><u id="media_ser">Media Services</u></span> <span id="encod">/</span> <span id="encod">Content Syndication</span>
  <h1 id= "trans_encod">Content Syndication</h1>
  <p id="trans_head">Studio-grade Content Syndication at cloud scale</p>
  <div class="row ">
  <div clas="col-lg-8">
  <ul class="tarsn_list">
  <li > <i class="fa fa-check" aria-hidden="true"></i> Syndicate to multiple formats</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Scalable batch processing</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Thumbnail, overlay, stitching and clip generation</li>
  </ul>
  </div>
  <div class="col-lg-2">

  </div>
  <div clas="col-lg-4">
  <ul class="tarsn_list">
  <li > <i class="fa fa-check" aria-hidden="true"></i> Syndicate to multiple formats</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Scalable batch processing</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Thumbnail, overlay, stitching and clip generation</li>
  </ul>
  </div>
  </div>
  <button type="button" class="btn btn-success">Create Media Solution</button>
  <p id="trasn_text">  Already using Azure? Try Content Syndication now </p>


  </div>
  </header>

  <div class="row" >
  <div class="col-sm-1 col-md-1 col-lg-1">
  </div>
   <div class="col-sm-8 col-md-6 col-lg-6 ">
  <h1>HOW IT WORKS</h1>
  <img src="img/work_flow_trans.png" />
   <h1>Benefits and features</h1>
  <h6> Reliably transport video</h6>
  <p id="trans_parastyle">
  Planetshare Elemental MediaConnect adds a video-specific quality-of-service layer over standard IP transport , enabling uninterrupted, high-quality
  live video delivery for business-to-business applications.
 This makes your live video workflows more reliable, even over less dependable networks.
  </p>
  <div class="pt-2 border-top-0" >  <h6> Reliably transport video</h6></div>

<p id="trasn_para6">
  Planetshare Elemental MediaConnect adds a video-specific quality-of-service layer over standard IP transport , enabling uninterrupted, high-quality
  live video delivery for business-to-business applications.
 This makes your live video workflows more reliable, even over less dependable networks.
</p>

   </div>

   <div class="col-sm-8 col-md-4 col-lg-4">
     <h6 id="trans_par_heading"> Pricing and costs</h6>
     <p id="trans_para3">Running cost </p>
      <p id="trans_para4"> Data transfer  </p>
        <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
        <div class="card_1 ">
         <img src="img/work_flow_trans.png" />
         </div>
         <div class="card_2 trans_get mt-5 p-2">
          Getting started
          </div>
          <div class="mt-4 trans_link1" >

          </div>
         <div class="mt-1 trans_link" >
          <a href="#">Getting started with Planetshare Elemental MediaConnect</a>
         </div>
         <div class="card_2 trans_get mt-5 p-2">
        Related services
          </div>
        <div class="mt-2" >
          <a href="#">Planetshare Elemental MediaLive</a></div>
           <div class="mt-1"id="trans_para" >
          <p id="trans_Par">Use Planetshare Elemental MediaConnect to deliver content streams to Planetshare Elemental MediaLive for cloud-based Content Syndication </p>
            </div>

            <div class="mt-5" >
            <a href="#">Planetshare CloudWatch</a>
              </div>
               <div class="mt-1" id="trans_para1" >
              <p id="tran_pp">Use Planetshare CloudWatch to track Planetshare Elemental MediaConnect metrics such as ingress and origination/packaging
               request counts.</p>
             </div>
         </div>
      <div class="col-sm-1 col-md-1 col-lg-1">

      </div>
 </div>
<center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/syndication/upload"><button class="btn btn-lg btn-primary">Syndicate Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
<br/>
  </div>

    );
  }
}
export default  Syndication;
