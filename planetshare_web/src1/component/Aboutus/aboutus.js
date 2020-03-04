import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './aboutus.css';

class Dubbing extends Component {
  state={
    popup:''
  }
  componentDidMount()
  {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  openNav=(data)=> {
    this.setState({popup:data})
  document.getElementById("about_us_owner").style.height = "100%";
  }

  closeNav=()=> {
    this.setState({popup:''})
  document.getElementById("about_us_owner").style.height = "0%";
  }
  render() {
    return (
    <div class="top_div" style={{backgroundColor:'white'}}>
    <header class="inner_banner">
      <div class="overlay"></div>
      <img src="img/aboutus1_banner.jpg" style={{position:'absolute'}}/>
      <div class="container mt-5" style={{top:'80px'}}>
		    <div class="banner_information">
          <h1 id= "trans_encod">About Us</h1>
          <ul class="tarsn_list ">
            <li > <i class="fa fa-check" aria-hidden="true"></i>Studio-grade services at cloud scale</li>
            <li > <i class="fa fa-check" aria-hidden="true"></i>Incredible content, straightforward prices </li>
            <li > <i class="fa fa-check" aria-hidden="true"></i>Share your work and get paid to do what you love </li>
            <li > <i class="fa fa-check" aria-hidden="true"></i>Add your services and earn money</li>
            <li > <i class="fa fa-check" aria-hidden="true"></i>Exceptional features </li>
          </ul>
		    </div>
      </div>
    </header>

    <div class="features-header text-center">
      <div class="container-sm">
        <p class="section-paragraph mb-0"></p>
      </div>
    </div>

    <div class="about_us">
      <div class="container">
        <h1>About Us</h1>
        <div class="about_comp">
          <div class="box">
            <h2 class="wow fadeInUp">Overview</h2>
            <div class="desc wow fadeInUp">
              <p>Planetshare, a subsidiary of Planetcast Media Services Limited, is a media technology platform helping customers with the post-production services used in filmmaking or media content creation and facilitating sellers and vendors to sell their content and provide services as demanded or otherwise.</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="box">
            <h2 class="wow fadeInUp">Objective</h2>
            <div class="desc wow fadeInUp">
              <p>Our objective is to offer passionate creators, sellers, and skilled service providers, vendors a platform to sell their content and render production services to our customers and clients. Also, our constant endeavor shall be to make the content and entertainment barrier-free by enabling content creators to push the language restrictions, bandwidth limits, etc. further as they opt for our affordable services. Similarly, viewers shall have access to a plethora of entertainment, educational, motivational contents from different geographical locations and language domains from the comfort of their living rooms, on the available bandwidth and in their own languages.</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="box">
            <h2 class="wow fadeInUp">How We Work</h2>
            <div class="desc wow fadeInUp">
              <p>At Planteshare, we have a rich stock of images and videos sourced from the crowd, as well as we have our own media stock. Sellers can come on Planetshare to sell their images and videos, and vendors can register themselves to offer their services. Also, Planetshare offers its services on the chosen media files as asked by our customers and clients.</p>
              <p>While customers have the luxury to browse and buy the images and videos of their choice, they can also opt for services on the selected media file (s). They shall have access to a wide range of images and videos, and they can also top-up their media with services. Media services are additional and separate as customers can buy media files and opt for services independently.</p>
              <p>While Planetcast works independently, we have sellers and vendors on our website to enrich our platform with their contributions.</p>

              <h5>Seller</h5>
              <p>Any firm or individual can become a seller on Planetshare by registering themselves on our website. Sellers can upload their contents (videos or/and images) on the website after the account gets approved by our team. We have a range of categories such as animations, documentaries, static photos, short films, etc. and sellers can take advantage of the diversity that we have on our platform.</p>

              <h5>Vendor</h5>
              <p>Any firm (s) or individual (s) can register themselves as vendors on Planetshare. Vendors can provide their services as and when they receive a task.</p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="box">
            <h2 class="wow fadeInUp">Services</h2>
            <div class="desc wow fadeInUp">
              <p><strong>We specialise in the following services:</strong></p>
              <div class="s_list">
                <ul>
                  <li>
                    <div class="img">
                      <img src="img/all-img/transcode_svg.svg" alt="Feature 01" />
                    </div>
                    <p>Transcoding</p>
                  </li>
                  <li>
                    <div class="img">
                      <img src="img/all-img/dubbing_svg.svg" alt="Feature 02" />
                    </div>
                    <p>Dubbing</p>
                  </li>
                  <li>
                    <div class="img">
                      <img src="img/all-img/autotagging.svg" alt="Feature 02" />
                    </div>
                    <p>Auto Tagging</p>
                  </li>
                  <li>
                    <div class="img">
                      <img src="img/all-img/subtitling.svg" alt="Feature 02" />
                    </div>
                    <p>Subtitling & Captioning</p>
                  </li>
                  <li>
                    <div class="img">
                      <img src="img/all-img/archieve_svg.svg" alt="Feature 02" />
                    </div>
                    <p>Streaming</p>
                  </li>
                  <li>
                    <div class="img">
                      <img src="img/all-img/streaming_svg.svg" alt="Feature 02" />
                    </div>
                    <p>Archiving</p>
                  </li>
                </ul>
              </div>

              <h5>Languages</h5>
              <p>We at Planetshare offers our services (dubbing, subtitling, etc.) in almost all Indian languages such as Hindi, Gujarati, Marathi, Tamil, Telugu, Kannada, Malayalam, Bangla, etc. and in the following other languages:</p>
              <p>English, Arabic, Nepali, Hebrew, Sinhala, Vietnamese, Filipino, etc.</p>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="about_memb">
          <h2 class="wow fadeInUp">Our Leadership</h2>
          <div id="about_us_owner" class="about_us_owner overlay_sell">
            <div class="about_owner_list">
              <a href="javascript:void(0)" class="closebtn_sell" onClick={()=>this.closeNav()}>&times;</a>
              {this.state.popup=="vyas" && <div class="box">
                <div class="img">
                  <img src="img/Mahendra-Nath-Vyas.jpg" />
                </div>
                <h4>Mahendra Nath Vyas</h4>
                <p>Executive Director, Planetcast Media Services Limited</p>
                <div class="desc">
                  <p>Mahendra Nath Vyas, Executive Director at Planetcast Media Services Limited, comes with a rich experience of 41 years in Satellite Communication and Digital Media Technology. He began his career with the Indian Space Research Organization (ISRO) as a design engineer. During his stint with the ISRO, he had developed a sub-system for India’s first communication satellite transponder called APPLE, which got adapted in the current INSAT satellite.</p>
                  <p>Over the years, he has had associations with several defence SATCOM networks while he was at Bharat Electronics Limited, a Government of India owned aerospace and defence company. Mr. Vyas is the mind behind Planetshare and he has been instrumental in guiding us through since the initial days of this platform.</p>
                  <p>He is responsible for making strategies and helping us understand technological transitions. He was on the Board of World Teleport Association from April 1, 2007, to March 31, 2013. He is a technology graduate with a specialization in microwave and satellite communication from the Indian Institute of Technology, Bombay and did Computer Architecture from the Indian Institute of Science, Bangalore.</p>
                </div>
              </div>}
              {this.state.popup=="lalit" && <div class="box">
                <div class="img">
                  <img src="img/Lalit-Jain.jpg" />
                </div>
                <h4>Lalit Jain</h4>
                <p>Founder Member and Director, Planetcast Media Services Limited</p>
                <div class="desc">
                  <p>Lalit Jain, the Founder Member and Whole Time Director of Planetcast Media Services, enjoys a vast experience of around 40 years in multiple groups such as Modi Group, Birla Group, JK Group, Essel Group and Bhilwara Group. He has influenced various fields in his carrier including Media, Steel, Human Resource, Textiles, Cement, Technology, Finance, Legal, Administrative, General Management and corporate governance.</p>
                  <p>His leadership saw major improvements in varied sectors and companies, increasing productivity, setting up efficient operational systems, etc. He is an M.A, LLB and a fellow Member of the Institute of Cost Accountants of India.</p>
                </div>
              </div>}
            </div>
          </div>
          <div class="memb_list wow fadeInUp">
            <ul>
              <li>
                <div class="box">
                  <a href="javascript:;"  onClick={()=>this.openNav('vyas')}>
                    <img src="img/Mahendra-Nath-Vyas.jpg" />
                  </a>
                  <h4>Mahendra Nath Vyas</h4>
                  <p>Executive Director, Planetcast Media Services Limited</p>
                </div>
              </li>
              <li>
                <div class="box">
                  <a href="javascript:;"  onClick={()=>this.openNav('lalit')}>
                    <img src="img/Lalit-Jain.jpg" />
                  </a>
                  <h4>Lalit Jain</h4>
                  <p>Founder Member and Director, Planetcast Media Services Limited</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
      {/*
      <div class="row  wc_pixel">
        <div class="col-sm-4 box-left img_imagine">
          <figure><img src="img/all-img1/imagine.jpg"/></figure>
        </div>
        <div class="col-sm-8 box-right">
          <h3 class="wow fadeInDown" >Imagine, Innovate, Inspire</h3>
          <p>Planetcast Media Services Limited is a key market player in India since last two decades in providing technology-led managed service to Media & Entertainment industry primarily to Broadcasters in SAARC countries with rapidly growing footprint across Southeast Asia.</p>
          <p>Unleash the power of Media with Planetcast’s media solutions to make your media assets easier to access, manage, share, archive and distribute. Deliver content to the world anytime, anywhere to an unprecedented range of platforms.</p>
          <p>Enrich your media experiences with our wide range of services for all your media-related necessities. At Planetcast, we provide end to end solutions to our clients to simplify all digital media workflows in the most cost effective way.</p>
          <p><a class="btn btn-default" href="#">contact Us</a></p>
        </div>
      </div>
      <div class="row  wc_pixel">
        <div class="col-sm-8 box-right">
          <h3 class="wow fadeInDown" >What We Offer</h3>
          <p>Our platform integrates different products and services under one unique platform to foster profitability for your business. With our platform, you can connect with buyers, sellers and vendors (service providers) from all around the world to monetize your content and services.</p>
          <h6 class="heding_transcoding">Our offerings include:</h6>
          <ul class="features_transcoding ">
            <li><span id="span_text" style={{color:'black'}}>High-Quality images and videos</span> </li>
            <li><span id="span_text" style={{color:'black'}}>Media localisation services ( Dubbing & Subtitling)</span> </li>
            <li><span id="span_text" style={{color:'black'}}>Studio-grade Streaming at cloud scale</span>  </li>
            <li><span id="span_text" style={{color:'black'}}>Studio-grade Transcoding at cloud scale</span> </li>
            <li><span id="span_text" style={{color:'black'}}> Digital Archival Solutions </span> </li>
            <li><span id="span_text" style={{color:'black'}}>Auto-Tagging Services </span> </li>
          </ul>
        </div>
        <div class="col-sm-4 box-left">
          <figure><img src="img/all-img1/off.jpg"/></figure>
        </div>
      </div>
      */}
    </div>
  </div>

    );
  }
}
export default Dubbing;
