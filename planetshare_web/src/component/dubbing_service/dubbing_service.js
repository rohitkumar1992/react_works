import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './dubbing_service.css';

class Dubbing extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
          <header class="inner_banner">
            <div class="overlay"></div>
            <img src="img/dubbing_banner.jpg" style={{position:'absolute'}}/>
            <div class="container mt-5" style={{top:'50px'}}>
              <div class="banner_information">
		            <h1 id= "trans_encod">Dubbing</h1>
            		<ul class="tarsn_list">
                  <li><i class="fa fa-check" aria-hidden="true"></i> Studio quality Dubbing Services in over 100 languages</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Scalable batch processing</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Linguistic accuracy with perfectly synchronised dubbed output</li>
            	    <li><i class="fa fa-check" aria-hidden="true"></i>Professional Dubbing Artists to capture the cultural shade </li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Experienced team of translators, transcribers, dubbing artists, recordists and directors.</li>
                </ul>
              </div>
            </div>
          </header>

          <div class="debg_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/dubbing_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                    <h1 class="heding_transcoding">Dubbing</h1>
                    <p class="span_text">Planetcast provides comprehensive state of the art solutions for Dubbing Services across multiple platforms. At Planetcast, we have the expertise for localization of audio and video files in more than 128 languages.</p>
                    <p class="span_text">
                     Our Dubbing services facilitate viewers to enjoy foreign content in their local languages. With our highly precise dubbing services, we can help in replacing spoken dialogue in your media with translated voice-overs. Our high-quality dubbing ensures the preservation of the original
                     intent of the creator. Moreover, our dub is flawlessly synchronised and timed to match speakers lips.
                    </p>
                    <p class="span_text">
                     At Planetcast we have a team of highly skilled professionals comprising of ​linguists, translators, dubbing artists, recordists and directors who will ensure to deliver superior
                     quality dubbed output. In addition to this, our dubbing services are affordable and reliable.
                    </p>
                  </div>
                  <div class="col-lg-5 col-md-5">
                    <div class="video_section">
      				        <h6 id="trans_par_heading"> Pricing and costs</h6>
                      <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;250 &nbsp;(Per Minute)</span></p>
                      <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                      <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/dubbing_banner.jpg">
      	                <source src="https://res.cloudinary.com/dn3qy37yz/video/upload/v1560492160/dubbing_lnaugc.mp4 " type="video/mp4"/>
      	              </video>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
    					      <ul class="features_transcoding">
                      <li><span id="span_text">Professional linguists to accurately encapsulate the cultural shade of your content</span> </li>
                      <li><span id="span_text">Best in class recording studios at Delhi & Mumbai </span> </li>
                      <li><span id="span_text">Delivery of dubbed content in all formats like MP4,MPEG,FLV,MOV,MKV,AVI etc.</span>  </li>
                      <li><span id="span_text">Dedicated in house audio studios </span> </li>
                      <li><span id="span_text">Sound Engineers and  Voice Directors</span> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/dubbing/upload"><button class="btn btn-lg  button_sub btn-primary">Dubbit Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
          <br/>
        </div>
    );
  }
}
export default Dubbing;
