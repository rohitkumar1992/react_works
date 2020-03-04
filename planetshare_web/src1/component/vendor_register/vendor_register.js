import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './vendor_register.css';
import axios from 'axios';
import Signup from '../../container/login_signup/signup'
import Echo from 'laravel-echo';
class Transcoding extends Component {
  render() {
    return (
      <div class="top_div">
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
        <header class="inner_video">
          <div class="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="vendor.mp4" type="video/mp4"/>
          </video>
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class= "display-4 text-left offset-lg-1" style={{color:'white',fontWeight:'bold'}}>
                  Add your Services and Earn money .
                  <p id="para_7">
                  Join Planetshare’s worldwide community of contributors and earn money.
                  </p>
                </h1>
                <Modal modalIsOpen="true" tag="role_vendor" openUrl="loginModal"/>
                {/*<p class="lead mb-0 text-left offset-lg-1"><button type="button" class="btn btn-lg button_subpage_1 btn-primary" onClick={()=>this.openNav()}>Get Started</button></p>*/}
              </div>
            </div>
          </div>
        </header>
        <div class="vendor_regis">
          <div class="box_1">
            <div class="container">
              <h3 class="o_Storytelling_Storytelling_title text-center">Become Vendor</h3>
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                   <div class="box-part1 text-center">
                    <i class="fa fa-gear  icon_font fa-2x" aria-hidden="true"></i>
                    <div class="title">
                      <p class="para_4">Services</p>
                    </div>
                    <div class="text mt-5">
                      <span class="para_6">Add your expertise to provide high-quality dubbing and subtitling services.</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div class="box-part1 text-center">
                    <i class="fa fa-twitter icon_font fa-2x" aria-hidden="true"></i>
                    <div class="title">
                      <p class="para_4">Get Jobs</p>
                    </div>
                    <div class="text mt-5">
                      <span class="para_6">Add your experience  to finish job videos and upload with our easy to use platforms</span>
                    </div>
                   </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div class="box-part1 text-center">
                    <i class="fa fa-camera  icon_font fa-2x" aria-hidden="true"></i>
                    <div class="title">
                      <p class="para_4">Get Paid</p>
                    </div>
                    <div class="text mt-5">
                      <span class="para_6">Get paid handsomely for providing high-quality services to customers.</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div class="box-part1 text-center ">
                    <i class="fa fa-pinterest-p fa-2x icon_font" aria-hidden="true"></i>
                    <div class="title">
                      <p class="para_4">Refer</p>
                    </div>
                    <div class="text mt-5">
                      <span class="para_6">Make more money by referring to new clients and customers.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mb30">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h3 class="o_Storytelling_Storytelling_title" >Register</h3>
                <div class="o_Storytelling_Storytelling_text" >
                  <p>Register as an individual or as a firm on Planetshare.in to join a global creative community and offer yourself a chance to get rewarded for your crafty abilities. Give your skills and creativity a new horizon to glide as you register with us in no time.</p>
                  <p>The registration process is very smooth, and you can get started by entering a few required details. Registration empowers you to manage your tasks, credentials, and profile from anywhere and anytime as per your convenience. </p>
                  <p>Please be assured of the privacy and security of your data as we keep your details confidential.</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <img class="img-fluid img_width" src="img/all-img/vendor1.jpg" />
              </div>
            </div>
          </div>
          <div class="container rtl mb30">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <img class="img-fluid img_width" src="img/all-img/vendor2.jpg" />
              </div>
              <div class="col-lg-6 col-md-6">
                <h3 class="o_Storytelling_Storytelling_title" >Review</h3>
                <div class="o_Storytelling_Storytelling_text" >
                  <p>Registered yourself or your firm registered on Planetshare? Great! Please sit back and wait for our team of experts to review the registration and your profile.</p>
                  <p>Upon the review, our team will communicate with you about the profile. You would be good to go if the profile is approved. While you may expect the approval to happen within a few hours, sometimes it may take up to 24 hours depending on certain parameters. Also, we may invite you to complete a pre-qualifying assessment to meet our service obligations.</p>
                  <p>Please feel free to get in touch with us at any time during the registration process or otherwise to get all your queries addressed by our team. Further, we welcome your concerns related to the approval process.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mb30">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <h3 class="o_Storytelling_Storytelling_title" >Listing &amp; Rewards</h3>
                <div class="o_Storytelling_Storytelling_text" >
                  <p>You need to list your services on the dashboard after your profile is approved to receive task (s). Currently, you can add up to two services namely "Dubbing" and "Subtitling". We would start assigning you relevant tasks as and when they come after you add your services.</p>
                  <p>Your creative work deserves a reward and applause! All our vendors and service providers would get handsome rewards for their efforts and talents. The amount for your contribution would reflect in your Planetshare dashboard within 48-72 hours post the completion of your work. We hope you understand our cycle. We would release your amount after we receive the money from our customers.</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <img class="img-fluid img_width" src="img/all-img/vendor3.jpg" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 text-center ff mt-5"  style ={ { backgroundImage: "img/all-img/app-d019150d52.jpg" } }>
              <div class="bottom_div buttons">
                <Modal modalIsOpen="true" tag="role_vendor" openUrl="loginModal"/>
                {/*<button type="button" class="btn btn-lg button_subpage_1 btn-primary" onClick={()=>this.openNav()}>Get Started</button>*/}
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-lg-12 col-md-10 text-center ">
              <div class="bottom_di" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Transcoding;
