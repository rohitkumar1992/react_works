import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './tagging_service.css';
import $ from 'jquery';
class Dubbing extends Component {
  state={
    list:[
    {
      url:'index_21.jpg'
    },
    {
      url:'index_111.jpg'
    },
    {
      url:'images_24.jpg'
    },
    {
      url:'car_2.jpg'
    },
    {
      url:'car_3.jpg'
    },
    {
      url:'car_1.jpg'
    }
  ]
}
  componentDidMount() {
    $("img").on('click',function(){
    var hello = $(this).attr('data-id');
    $('.hideDivs').hide();
    $('#'+hello).show();
    });
    }


    imgDisplay(url)
    {
    $('#test').html('<img src="'+url+'" />');
    }


    render() {
    return (
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
          <header class="inner_banner">
            <div class="overlay"></div>
            <img src="img/tagging_banner.jpg" style={{position:'absolute'}}/>
            <div class="container mt-5" style={{top:'50px'}}>
              <div class="banner_information">
		            <h1 id= "trans_encod">Tagging</h1>
                <ul class="tarsn_list">
                  <li><i class="fa fa-check" aria-hidden="true"></i>Rich experience in the industry to ensure maximum engagement and boost the visibility of your content</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Cutting edge technology with advanced tools for video recognition and categorisation</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Flexible and Scalable resources </li>
          		    <li><i class="fa fa-check" aria-hidden="true"></i>Higher Search Engine Rankings</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Experienced professionals to work with you 24*7</li>
                </ul>
              </div>
            </div>
          </header>

          <div class="taggng_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/tagging_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container">
                <div class="row ">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                    <h1 class="heding_transcoding">Tagging</h1>
                     <p class="span_text">
                      Amplify the visibility of your video content and get noticed by your target audience with Planetcast’s video tagging services. Our video tagging service will ensure that your media can
                      be easily discovered via search engines and internal search function of your website.
                     </p>
                     <p class="span_text">
                       At Planetcast we have the expertise for professional video labelling and tagging to maximise engagement and boost the visibility of your video content. Our team can deliver large video labelling and tagging projects
                       with the help of our cutting edge technology using the latest tools and software.
                     </p>
                     <p class="span_text">
                      Planetcast offers studio-grade tagging at cloud scale to assign multiple tags for listings of your media library. Our
                      superior tagging services provide  solutions for all your video tagging requirements.
                     </p>
                   </div>
                  <div class="col-lg-5 col-md-5">
                    <div class="video_section">
      				        <h6 id="trans_par_heading"> Pricing and costs</h6>
                      <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;350 &nbsp;(Per Video)</span></p>
                      <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                      <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/tagging_banner.jpg">
      					        <source src="https://res.cloudinary.com/dn3qy37yz/video/upload/v1560492244/tagging_mq7ljn.mp4 " type="video/mp4"/>
      					      </video>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
    					      <ul class="features_transcoding">
                      <li><span id="span_text"> Advanced recognition and categorisation</span>  </li>
                      <li><span id="span_text">Real-time analysis</span>  </li>
                      <li><span id="span_text">Simplified Integration</span>  </li>
                      <li><span id="span_text">Fully Managed Service  </span> </li>
                      <li> <span id="span_text">Affordable</span> </li>
                      <li><span id="span_text">Time-Saving </span> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/tagging/upload"><button class="btn btn-lg  button_sub btn-primary">Tag Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
          <br/>
        </div>

    );
  }
}
export default Dubbing;
