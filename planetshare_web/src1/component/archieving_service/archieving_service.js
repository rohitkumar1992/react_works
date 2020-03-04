import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './transcoding_service.css';
class Archieving extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
          <header class="inner_banner">
            <div class="overlay"></div>
            <img  src="img/archive_banner.jpg" style={{position:'absolute'}}/>
            <div class="container mt-5" style={{top:'50px'}}>
              <div class="banner_information">
                <h1 id= "trans_encod">Archiving</h1>
                <ul class="tarsn_list" >
                  <li><i class="fa fa-check" aria-hidden="true"></i>Highly secured digital archival solutions with data protection</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Smart data management to manage and track your data from any location, anytime</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Highly durable cloud storage solutions across multiple facilities </li>
                  <li><i class="fa fa-check" aria-hidden="true"></i> Reduced complexity with simplified data transfer</li>
                  <li><i class="fa fa-check" aria-hidden="true"></i>Flexible and affordable</li>
                </ul>
              </div>
            </div>
          </header>

          <div class="archiv_service">
            <div class="how_work">
              <div class="container">
                <h1>HOW IT WORKS</h1>
                <figure><img src="img/archiving_flow.png" /></figure>
              </div>
            </div>
            <div class="services_info">
              <div class="container ">
                <div class="row ">
                  <div class="col-sm-12 col-md-7 col-lg-7">
                    <h1 class="heding_transcoding">Archiving</h1>
                    <p class="span_text">
                     Experience exceptional speed, security and reliability with Planetcast’s state of the art archiving services
                     . Planetcast offers a comprehensive set of cloud storage services for archiving.</p>
                    <p class="span_text">
                    We offer digital archival services to help you manage and access your content anytime, anywhere. Our services
                    are extremely durable and cost-effective for long term deep archiving.
                    </p>
                    <p class="span_text">
                     In addition to this, our secure data management platform will provide you with facilities to manage and track storage services. All your existing libraries
                     are migrated and preserved to digital assets which can be reviewed and assessed using a secured web interface.</p>
                    <p class="span_text">
                     Furthermore, We offer a complete ecosystem for comprehensive storage solutions and smarter data management.
                    </p>
                  </div>
                  <div class="col-lg-5 col-md-5">
                    <div class="video_section">
      	             <h6 id="trans_par_heading"> Pricing and costs</h6>
                     <p id="trans_para3">Running cost <span style={{marginLeft:'100px'}}>Rs&nbsp;2500 &nbsp;(Per Gb)</span></p>
                     <p id="trans_para5">Rates provided are for illustration purposes only and may vary by region.</p>
                     <video playsinline="playsinline"  muted="muted" loop="loop" controls style={{width:'100%'}} poster="img/archive_banner.jpg">
      	               <source src="img/transcoding.mp4" type="video/mp4"/>
      	             </video>
                    </div>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-md-12">
                    <h1 class="heding_transcoding">Features and benefits</h1>
            	      <ul class="features_transcoding">
                      <li><span id="span_text">  Instant Retrieval</span>  </li>
                      <li><span id="span_text">Unmatched Scalability </span></li>
                      <li><span id="span_text"> Long term secured preservation </span></li>
                      <li><span id="span_text">  Configurable data storage </span></li>
                      <li><span id="span_text">  Secured with advanced systems  </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <center>{localStorage.getItem('username')!=null?<Link to="/dashboard/buyer/service/archieving/upload"><button class="btn btn-lg btn-primary">Archieve It Now</button></Link>:<Modal modalIsOpen="true" tag="services" openUrl="loginModal"/>}</center>
          <br/>
        </div>

    );
  }
}
export default Archieving;
