import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
import axios from 'axios';
import Echo from 'laravel-echo';
import Particles from 'react-particles-js';
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

          <div class="tansc_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/transcoding_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                     <h1 class="heding_transcoding">Transcoding</h1>
                     <p class="span_text">
                        Transform and tune your content for your desired devices and network conditions with Planetcast’s Transcoding Services. Our cutting edge technology offers solutions to meet the growing demands of online media preparation.
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
                  <div class="col-lg-5 col-md-5">
                     <div class="video_section">
    	                 <h6 id="trans_par_heading"> Pricing and costs</h6>
                       <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;250 &nbsp;(Per Minute)</span></p>
                       <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                       <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/transcoding_banner.jpg">
    	                   <source src="img/transcoding.mp4" type="video/mp4"/>
    	                 </video>
                     </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
                    <ul class="features_transcoding ">
                       <li><span id="span_text"> Superior quality and fast turnaround </span> </li>
                       <li><span id="span_text">Integration into your existing content management system </span></li>
                       <li><span id="span_text">Support for all major streaming formats </span> </li>
                       <li><span id="span_text">High Performance   </span> </li>
                       <li><span id="span_text"> Scalability </span></li>
                       <li><span id="span_text"> Reliability  </span></li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/transcoding/upload"><button class="btn button_sub   btn-lg btn-primary">Transcode Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
           <br/>
        </div>
    );
  }
}
export default Transcoding;
  // <img src="img/transcoding_banner.jpg" alt="" style={{position:'absolute'}}/>
  // "particles": {
  //     "line_linked": {
  //                 "color":"#FFFFFF"
  //                 },
  //     "number": {
  //         "value": 60
  //     },
  //     "size": {
  //         "value": 3
  //     }
  // },
  // "interactivity": {
  //     "events": {
  //         "onhover": {
  //             "enable": true,
  //             "mode": "repulse",
  //         }
  //     }
  // }
  // }}
  // style={{
  //     width: '100%',
  //     background: `#0c78ce`,
  //     position:'absolute',zIndex:'1'





//----------------------------------
// <Particles
// params={{"particles": {
//   "number": {
//     "value": 80,
//     "density": {
//       "enable": true,
//       "value_area": 800
//     }
//   },
//   "color": {
//     "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
//   },
//   "shape": {
//     "type": "circle",
//     "stroke": {
//       "width": 0,
//       "color": "#b6b2b2"
//     }
//   },
//   "opacity": {
//     "value": 0.5211089197812949,
//     "random": false,
//     "anim": {
//       "enable": true,
//       "speed": 1,
//       "opacity_min": 0.1,
//       "sync": false
//     }
//   },
//   "size": {
//     "value": 8.017060304327615,
//     "random": true,
//     "anim": {
//       "enable": true,
//       "speed": 12.181158184520175,
//       "size_min": 0.1,
//       "sync": true
//     }
//   },
//   "line_linked": {
//     "enable": true,
//     "distance": 150,
//     "color": "#c8c8c8",
//     "opacity": 0.4,
//     "width": 1
//   },
//   "move": {
//     "enable": true,
//     "speed": 1,
//     "direction": "none",
//     "random": false,
//     "straight": false,
//     "out_mode": "bounce",
//     "bounce": false,
//     "attract": {
//       "enable": false,
//       "rotateX": 600,
//       "rotateY": 1200
//     }
//   }
// },
// "interactivity": {
//   "detect_on": "canvas",
//   "events": {
//     "onhover": {
//       "enable": true,
//       "mode": "repulse"
//     },
//     "onclick": {
//       "enable": true,
//       "mode": "push"
//     },
//     "resize": true
//   },
//   "modes": {
//     "grab": {
//       "distance": 400,
//       "line_linked": {
//         "opacity": 1
//       }
//     },
//     "bubble": {
//       "distance": 400,
//       "size": 40,
//       "duration": 2,
//       "opacity": 8,
//       "speed": 3
//     },
//     "repulse": {
//       "distance": 100,
//       "duration": 0.4
//     },
//     "push": {
//       "particles_nb": 4
//     },
//     "remove": {
//       "particles_nb": 2
//     }
//   }
// },
// "retina_detect": true
//                  }}
//  style={{position:'absolute',zIndex:'111'}}/>
