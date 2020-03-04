import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './seller_register.css';
import axios from 'axios';
import Signup from '../../container/login_signup/signup'
import Echo from 'laravel-echo';
class Transcoding extends Component {
  render() {
    return (
      <div class="top_div">
      <div class="top_div" style={{backgroundColor:'#fffff'}}>
      <header>
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

  <div class="box_1">
   <div class="container">
     <p class="para_11 ml-5">Become Seller</p>
      <div class="row l   offset-lg-1 mr-5">

        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
         <div class="box-part1 text-center">
          <i class="fa fa-gear  icon_font fa-2x" aria-hidden="true"></i>
          <div class="title">
              <p class="para_4">Create</p>
              </div>

              <div class="text mt-5">
              <span class="para_6">Produce high-quality impressive images and videos for our customers  .</span>
          </div>
         </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
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

       <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">

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
  <div class="container">
  <div class="row p-5 ">
  <div class="col-lg-5 col-md-5 col-sm-5">
  <h3 class="o_Storytelling_Storytelling_title" >Earn money doing what you love</h3>
  <div class="o_Storytelling_Storytelling_text" > We pay out handsomely to our global community of contributors for doing what they love.</div>

  </div>
  <div class="col-lg-6  col-sm-6 offset-lg-1 offset-md-1  offset-sm-1 col-md-6 ">
  <img class="img-fluid img_width"  src="img/all-img/vendor1.jpg" />
  </div>
  </div>
  </div>





  <div class="container  ">
  <div class="row p-3  ">
  <div class="col-lg-6 ml-3 col-md-6 col-sm-6 offset-sm-1 ">
  <img class="img-fluid img_width"  src="img/all-img/vendor2.jpg" />
  </div>

  <div class="col-lg-5 col-md-5 col-sm-5">
  <h3 class="o_Storytelling_Storytelling_title" >Exposure</h3>

  <div class="o_Storytelling_Storytelling_text" >Showcase your work to millions of people all around the world with our versatile platform.</div>

  </div>
  </div>
  </div>
  <div class="container ">
  <div class="row p-3  ">
  <div class="col-lg-5 col-md-5 col-sm-5">
  <h3 class="o_Storytelling_Storytelling_title" >Connect with our contributor app</h3>
  <div class="o_Storytelling_Storytelling_text" >All your activities and earnings on the palm of your hands with our contributor app. Upload and submit content straight from your devices.</div>
  </div>
  <div class="col-lg-6  col-sm-6 offset-lg-1 offset-md-1  offset-sm-1 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/vendor3.jpg" />
  </div>
  </div>
  </div>
  <div class="row ">
  <div class="col-lg-12 col-md-10 text-center ff "  style ={ { backgroundImage: "img/all-img/.jpg" } }>
  <div class="bottom_div">
  <div  style={{marginLeft:'500px'}}>
  <center><Modal modalIsOpen="true" tag="role_seller" openUrl="loginModal"/></center></div>
  </div>
  </div>
  </div>
  <div class="row mt-5">
  <div class="col-lg-12 col-md-10 text-center ">
  <div class="bottom_di" >

  </div>
  </div>
  </div>
  </div>
</div>
    );
  }
}
export default Transcoding;
