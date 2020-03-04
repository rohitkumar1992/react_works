import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
class Streaming extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'white'}}>
          <header class="inner_banner">
            <div class="overlay"></div>
            <img src="img/streaming_banner.jpg" style={{position:'absolute'}}/>
            <div class="container mt-5"  style={{top:'50px'}}>
              <div class="banner_information">
                <h1 id= "trans_encod">Streaming</h1>
                <ul class="tarsn_list">
                  <li><i class="fa fa-check" aria-hidden="true"></i>Studio-grade streaming services anytime, anywhere.</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Reach audiences of any size across all media platform</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Innovative and streamlined Webcasting solutions </li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Cost effective and Reliable </li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Fully Managed Services</li>
                </ul>
              </div>
            </div>
          </header>

          <div class="stream_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/streaming_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                    <h1 class="heding_transcoding">Streaming</h1>
                     <p class="span_text">
                       Planetcast provides studio-grade streaming services to audiences of any size. Our streaming services
                        are designed to support multiple video streaming formats.
                     </p>
                     <p class="span_text">
                        Planetcast’s Streaming solution is designed to reduce the complexity of cross-platform content delivery. With our streaming services, we make sure
                        that your business stays future proof in this ever-changing technology environment.
                     </p>
                     <p class="span_text">
                      We offer a complete infrastructure to assist you in managing all aspects of your streaming right from capturing live events from ground to streaming the same on digital platforms. You can easily stream live or
                       recorded video to your browser or mobile application with the help of our streaming services.
                     </p>
                     <p class="span_text">
                     In addition to this, we provide solutions for webcasting of events to any size audience. We offer highly flexible and cost-effective solutions for all your streaming needs. Furthermore,
                     our streaming services are loaded with numerous features and customisation options.
                     </p>
                   </div>
                   <div class="col-lg-5 col-md-5">
                     <div class="video_section">
      	               <h6 id="trans_par_heading"> Pricing and costs</h6>
                       <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;2500 &nbsp;(Per Stream)</span></p>
                       <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                       <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/streaming_banner.jpg">
      	                 <source src="https://res.cloudinary.com/dn3qy37yz/video/upload/v1560492228/live_streaming_hxcaqe.mp4 " type="video/mp4"/>
      	               </video>
                      </div>
                    </div>
                </div>
                <div class="row ">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
      		          <ul class="features_transcoding">
                      <li><span id="span_text">Graphic overlaying </span> </li>
                      <li><span id="span_text">Ad insertion</span>  </li>
                      <li><span id="span_text"> Logo insertion </span> </li>
                      <li><span id="span_text"> 5.1 channel processing </span>   </li>
                      <li><span id="span_text">Audio levelling & video legalizing  </span> </li>
                      <li><span id="span_text"> Multi-format & multi-bitrate feed packaging</span>  </li>
                      <li><span id="span_text">Delivery to CDN  </span>  </li>
                      <li><span id="span_text">Secure</span>   </li>
                      <li><span id="span_text"> Reliable </span> </li>
                      <li><span id="span_text">Fully Managed</span>  </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/streaming/upload"><button class="btn btn-lg button_sub btn-primary">Stream Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
          <br/>
        </div>

    );
  }
}
export default Streaming;
