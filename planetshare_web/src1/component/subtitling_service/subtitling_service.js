import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
class Subtitling extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
          <header class="inner_banner">
            <div class="overlay"></div>
            <img src="img/subtitling_banner.jpg" style={{position:'absolute'}}/>
            <div class="container mt-5" style={{top:'50px'}}>
              <div class="banner_information">
                <h1 id= "trans_encod">Subtitling</h1>
                <ul class="tarsn_list">
                  <li><i class="fa fa-check" aria-hidden="true"></i>Professional quality services in over 128 languages</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Highly skilled professionals to deliver superior quality video transcriptions.</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Native translators to ensure precision and style</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Support for all major formats</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Swift turnaround times </li>
                </ul>
              </div>
            </div>
          </header>

          <div class="subttl_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/subtitling_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                    <h1 class="heding_transcoding ">Subtitling and Captioning</h1>
                     <p class="span_text">
                        Experience professional quality and linguistic
                        accuracy with Planetcast’s reliable and cost-effective solutions for Subtitling and Captioning.
                     </p>
                     <p class="sub_head">Subtitle Services </p>
                     <p class="span_text">
                       Planetcast offers subtitle services in multiple languages to help you reach a wider audience.As a leading player in localization services we manage everything from transcription,translation ,SRT creation, time-coded file to meet your foreign language subtitling needs. The subtitle text can also be hard-coded into your video. We offer reliable, cost-effective solutions to deliver high quality subtitled video in over 100 languages.</p>
                     <p class="sub_head">Captioning Services  </p>
                     <p class="span_text">
                       Planetcast offers captioning services to synchronise transcribed text to visuals in your multimedia. Our captioning services include sound effects and music to make audio accessible to deaf or hard of hearing viewers. Captioning is ideal for movies, Tv programs, video games, youtube videos etc. At Planetcast we have a team of skilled professional comprising of transcriptionists, proofreaders and support specialists to deliver exceptional quality captioning services.
                     </p>
                  </div>
                  <div class="col-lg-5 col-md-5">
                    <div class="video_section">
      		             <h6 id="trans_par_heading"> Pricing and costs</h6>
                       <p id="trans_para3">Running cost <span style={{marginLeft:'60px'}}>Rs&nbsp;550 &nbsp;(Minute / Language)</span></p>
                       <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                       <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/subtitling_banner.jpg">
      	                 <source src="https://res.cloudinary.com/dn3qy37yz/video/upload/v1560492183/subtitling_gbbmql.mp4 " type="video/mp4"/>
      	               </video>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
    		            <ul class="features_transcoding ">
                      <li><span id="span_text"> Subtitle capabilities in more than 100 languages</span> </li>
                      <li> <span id="span_text">Highly skilled team of subtitling experts</span></li>
                      <li> <span id="span_text">Genre-specific support </span> </li>
                      <li> <span id="span_text">Subtitling offered in multiple formats.  </span> </li>
                      <li><span id="span_text">Trained and certified language professionals</span></li>
                      <li><span id="span_text">Rich experience with captioning software </span> </li>
                      <li><span id="span_text"> Exceptional Delivery time </span></li>
                      <li><span id="span_text">Native translators  </span>   </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/subtitling/upload"><button class="btn btn-lg button_sub btn-primary">Subtitle It Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
          <br/>
        </div>

    );
  }
}
export default Subtitling;
