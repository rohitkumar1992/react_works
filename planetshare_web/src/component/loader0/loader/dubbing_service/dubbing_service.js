import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './dubbing_service.css';

class Dubbing extends Component {
  render() {
    return (
        <div class="top_div">
        <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://ustreamssl-a.akamaihd.net/videos/home.webm" type="video/mp4"/>
        </video>
        <div class="container mt-5">
        <span><u id="media_ser">Media Services</u></span> <span id="encod">/</span> <span id="encod">Dubbing</span>
        <h1 id= "trans_encod">Dubbing</h1>
        <p id="trans_head">Studio-grade dubbing at cloud scale</p>
        <div class="row ">
        <div clas="col-lg-8">
        <ul class="tarsn_list">
        <li > <i class="fa fa-check" aria-hidden="true"></i> Encode to multiple formats</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>Scalable batch processing</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>Thumbnail, overlay, stitching and clip generation</li>
        </ul>
        </div>
        <div class="col-lg-2">

        </div>
        <div clas="col-lg-4">
        <ul class="tarsn_list">
        <li > <i class="fa fa-check" aria-hidden="true"></i> Encode to multiple formats</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>Scalable batch processing</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>Thumbnail, overlay, stitching and clip generation</li>
        </ul>
        </div>
        </div>
        <button type="button" class="btn btn-success">Create Media Solution</button>
        <p id="trasn_text">  Already using Azure? Try Dubbing now </p>


        </div>
          </header>
          <div class="row" >
          <div class="col-sm-1 col-md-1 col-lg-1">
          </div>
           <div class="col-sm-8 col-md-6 col-lg-6 ">
          <h1>HOW ITS WORK</h1>
          <img src="/img/all-img/index_11.png" />
           <h1>Benefits and features</h1>
          <h6> Reliably transport video</h6>
          <p id="trans_parastyle">
          AWS Elemental MediaConnect adds a video-specific quality-of-service layer over standard IP transport , enabling uninterrupted, high-quality
          live video delivery for business-to-business applications.
         This makes your live video workflows more reliable, even over less dependable networks.
          </p>
          <div class="pt-2 border-top-0" >  <h6> Reliably transport video</h6></div>

        <p id="trasn_para6">
          AWS Elemental MediaConnect adds a video-specific quality-of-service layer over standard IP transport , enabling uninterrupted, high-quality
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
                 <img src="/img/all-img/index_11.png" />
                 </div>
                 <div class="card_2 trans_get mt-5 p-2">
                  Getting started
                  </div>
                  <div class="mt-4 trans_link1" >

                  </div>
                 <div class="mt-1 trans_link" >
                  <a href="#">Getting started with AWS Elemental MediaConnect</a>
                 </div>
                 <div class="card_2 trans_get mt-5 p-2">
                Related services
                  </div>
                <div class="mt-2" >
                  <a href="#">AWS Elemental MediaLive</a></div>
                   <div class="mt-1"id="trans_para" >
                  <p id="trans_Par">Use AWS Elemental MediaConnect to deliver content streams to AWS Elemental MediaLive for cloud-based dubbing </p>
                    </div>

                    <div class="mt-5" >
                    <a href="#">Amazon CloudWatch</a>
                      </div>
                       <div class="mt-1" id="trans_para1" >
                      <p id="tran_pp">Use Planetshaare CloudWatch to track AWS Elemental MediaConnect metrics such as ingress and origination/packaging
                       request counts.</p>
                     </div>
                 </div>
              <div class="col-sm-1 col-md-1 col-lg-1">

              </div>
         </div>
<center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/dubbing"><button class="btn btn-lg btn-primary">Dubbit Now</button></Link>:<Modal modalIsOpen="true" tag="services"/>}</center>
  <br/>
  </div>

    );
  }
}
export default Dubbing;
