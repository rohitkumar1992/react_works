import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
import axios from 'axios';
import Echo from 'laravel-echo';
class Transcoding extends Component {
  componentDidMount()
  {
//     const client = require('pusher-js');
//         window.Echo = new Echo({
//             broadcaster: 'pusher',
//             // app_id:'779646',
//             key: '877d27b817106c5622ed',
//             // secret:'d46e7d193230c33befb4',
//             cluster: 'ap2',
//             encrypted:true,
//              authEndpoint:'http://api.planetshare.in/public/api/website/events',
//         });
// //         window.Echo.channel(`1151651`).notification((data) => {
// //     console.log(data);
// // });
//         window.Echo.private('new-post').listen('PostCreated', (e) => {
//       console.log(e);
//   });
//     // axios.get('http://api.planetshare.in/public/api/website/events')
//     //     .then(response=>{
//     //       console.log(response);
//     //
//     //     })
//     //     .catch(function (error) {
//     //       console.log(error);
//     //     });
  }

  render() {
    return (
        <div class="top_div">
  <header class="inner_banner">
  <div class="overlay"></div>

  <img src="img/transcoding_banner.jpg" alt="" style={{position:'absolute'}}/>
  <div class="container mt-5" style={{top:'50px'}}>
  
  
<div class="banner_information">
	<h1 id= "trans_encod">Transcoding</h1>
  <ul class="tarsn_list">
  <li > <i class="fa fa-check" aria-hidden="true"></i> Swift Transcoding in the cloud </li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Transcode any video for any device on the market</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>High-Quality video outputs</li>
    <li > <i class="fa fa-check" aria-hidden="true"></i>Limitless Scalability </li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Support for all major formats</li>
  <li > <i class="fa fa-check" aria-hidden="true"></i>Thumbnail, overlay, stitching and clip generation</li>
  </ul>
</div>
  </div>
  </header>

  


<div class="how_work">
<div class="container">
  <h1>HOW ITS WORK</h1>
    <figure><img src="img/transcoding_flow.png" /></figure>
  </div>
</div>


       <div class="container  ">
     <div class="row services_info">
       <div class="col-sm-12 col-md-10 col-lg-6 offset-lg-1 offset-md-1 p-3">
       <h1 class="heding_transcoding ">
         Transcoding
          </h1>
         <p class="span_text">
            Transform and tune your content for your desired devices and network conditions with Planetcast’s Transcoding Services. Our cutting
             edge technology offers solutions to meet the growing demands of online media preparation.
         </p>

         <p class="span_text">
          At Planetcast we offer transcoding solutions to reduce the complexity of diverse viewing platforms, file formats and streaming technologies in today’s media landscape. We offer services to optimise and adapt your content for a multitude of playback scenarios. With our transcoding services, we assist in making online
           content viewable across multiple platforms, live streaming and adaptive bitrate delivery.
         </p>

         <p class="span_text">
           Our transcoding services ensures the preservation of video quality with every transcode. At Planetcast, our highly skilled team of professionals
           focuses on extensive planning in the design and automation of transcoding workflow.
         </p>
         <p class="span_text">
           Planetcast offers media transcoding in the cloud. Our services are highly scalable and cost-effective.
         </p>
       </div>
       <div class="col-lg-4 ml-2 mt-2 video_section">
	   <h6 id="trans_par_heading"> Pricing and costs</h6>
  <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;250 &nbsp;(Per Minute)</span></p>
        <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
		
      <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/transcoding_banner.jpg">
	<source src="img/transcoding.mp4" type="video/mp4"/>
	</video>
     </div>
     </div>
   </div>
     <div class="container ">
       <div class="row ">
         <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-1 offset-md-1">
           <h1 class="heding_transcoding">
            Features and benefits
          </h1>
       </div>
     </div>
   </div>
   <div class="container ml-5 ">
     <div class="row ml-3">
       <div class="col-sm-12 col-md-12 col-lg-6 ">
         <ul class="features_transcoding ">
          <li> <span id="span_text"> Superior quality and fast turnaround </span> </li>
          <li><span id="span_text">Integration into your existing content management system </span></li>
          <li> <span id="span_text">Support for all major streaming formats </span> </li>
          <li> <span id="span_text">High Performance   </span> </li>
          <li><span id="span_text"> Scalability </span></li>

          <li><span id="span_text"> Reliability  </span></li>
        </ul>
     </div>

   </div>
   </div>







<center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/transcoding/upload"><button class="btn button_sub   btn-lg btn-primary">Transcode Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
<br/>
  </div>

    );
  }
}
export default Transcoding;
