import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './seller_register.css';
import axios from 'axios';
import Signup from '../../container/login_signup/signup'
class Transcoding extends Component {
  render() {
    return (
      <div class="top_div">
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
          <header class="inner_video">
            <div class="overlay"></div>
              <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="seller.mp4" type="video/mp4"/>
              </video>
              <div class="container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                  <div class="w-100 text-white">
                    <h1 class= "display-4 text-left offset-lg-1" style={{color:'white',fontWeight:'bold'}}>Share your work and get paid
                    <p id="para_7">
                      Join Planetshare’s worldwide community of contributors and get rewarded handsomely.
                    </p>
                  </h1>
                  <Modal modalIsOpen="true" tag="role_seller" openUrl="loginModal"/>
                </div>
              </div>
            </div>
          </header>

          <div class="seller_regis">
            <div class="box_1">
              <div class="container">
                <h3 class="o_Storytelling_Storytelling_title text-center">Become Seller</h3>
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="box-part1 text-center">
                      <i class="fa fa-gear  icon_font fa-2x" aria-hidden="true"></i>
                      <div class="title">
                        <p class="para_4">Create</p>
                      </div>
                      <div class="text mt-5">
                        <span class="para_6">Produce high-quality impressive images and videos for our customers .</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="box-part1 text-center">
                      <i class="fa fa-twitter icon_font fa-2x" aria-hidden="true"></i>
                      <div class="title">
                        <p class="para_4">Submit</p>
                      </div>
                      <div class="text mt-5">
                        <span class="para_6">Upload your images and videos with our easy to use platform .</span>
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
                        <span class="para_6">Get rewarded handsomely every time your content is downloaded. </span>
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
                        <span class="para_6"  >Spread the word to new contributors and customers and earn money. </span>
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
                    <p>Excited about starting your journey on Planetshre? Get yourself or your firm registered on Planetshare and let your GENIUS begin an everlasting innings with us.</p>
                    <p>Bring your art to life as you embark on a mission filled with limitless rewards and an ocean of opportunities. With Planetshare, you have the luxury of joining content and work-loving clients and customers.</p>
                    <p>The registration process is quick and easy, requiring you to provide us with some personal details. Once you are on board with us, you can manage your account, upload your work, track your transactions, etc.</p>
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
                  <h3 class="o_Storytelling_Storytelling_title" >Upload &amp; Review</h3>
                  <div class="o_Storytelling_Storytelling_text mb0" >
                    <p>After you have registered with us, you can start uploading your artful content to contribute to the Planetshare community.</p>
                    <p>Please follow these steps to complete the uploading process:</p>
                    <ul>
                      <li><p>Go to your seller account and click on "Upload Now"</p></li>
                      <li><p>Select your file you wish to upload</p></li>
                      <li><p>Enter your "Video Details" ("Meta Info", "Video Category", "Licence Agreement" and "Video Description"</p></li>
                      <li><p>Click to 'Save" to finish your upload</p></li>
                    </ul>
                    <p>Now that your content has been uploaded, please wait for our team to approve your project. We may take up to 24 hours to approve the same. Your content would feature on our website immediately after it gets approved. Also, we shall keep you posted with all developments related to your project.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mb30">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <h3 class="o_Storytelling_Storytelling_title" >Rewards</h3>
                  <div class="o_Storytelling_Storytelling_text" >
                    <p>Done with Registration and Content Uploading? Your content is up and live on Planetshare.in for our customers and clients to browse and purchase. Your earnings start as soon as someone buys your content online. We shall pay your money back within 72-hours of the sale.</p>
                    <p>Further, we shall communicate with you about every transaction of yours as part of our services.</p>
                    <p>Please refer to our 'Terms" and contact our team if you have any queries or concerns.</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <img class="img-fluid img_width" src="img/all-img/vendor3.jpg" />
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-lg-12 text-center ff mt-5 " style ={ { backgroundImage: "img/all-img/.jpg" } }>
                <div class="bottom_div buttons">
                  <Modal modalIsOpen="true" tag="role_seller" openUrl="loginModal"/>
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
