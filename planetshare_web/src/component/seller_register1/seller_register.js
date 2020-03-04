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
      <h1 class= "display-4 text-left offset-lg-1" style={{color:'white',fontWeight:'bold'}}>Share your work and start earning.

  <p id="para_7">
  Join Planetshare global community of contributors and earn money doing what you love.
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

        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
         <div class="box-part1 text-center">
          <i class="fa fa-gear  icon_font fa-2x" aria-hidden="true"></i>
          <div class="title">
              <p class="para_4">Create</p>
              </div>

              <div class="text mt-5">
              <span class="para_6">Produce high-quality images and videos for our customers to download.</span>
          </div>
         </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="box-part1 text-center">
            <i class="fa fa-twitter icon_font fa-2x" aria-hidden="true"></i>
          <div class="title">
            <p class="para_4">Submit</p>
          </div>
          <div class="text mt-5">
            <span class="para_6">Upload your content with our easy-to-use platform, and get tips for success.</span>
          </div>
         </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
       <div class="box-part1 text-center">
        <i class="fa fa-camera  icon_font fa-2x" aria-hidden="true"></i>
        <div class="title">
            <p class="para_4">Get Paid</p>
            </div>

            <div class="text mt-5">
            <span class="para_6">Make money every time your content is downloaded .</span>
        </div>
       </div>
      </div>

       <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

        <div class="box-part1 text-center ">

                      <i class="fa fa-pinterest-p fa-2x icon_font" aria-hidden="true"></i>

          <div class="title">
            <p class="para_4">Refer</p>
          </div>

          <div class="text mt-5">
            <span class="para_6">Earn even more by referring new contributors and customers..</span>
          </div>


         </div>
      </div>
  </div>
  </div>
  </div>
  <div class="container">
  <div class="row p-5">
  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >More than $500 million paid out</h3>
  <div class="o_Storytelling_Storytelling_text" >Over the last 15 years, we’ve paid out half a billion dollars to our worldwide community of contributors.</div>
  <button class="btn btn-lg  button_subpage btn-primary">Join Now</button>
  </div>
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/paid_out-734550afc2.jpg" />
  </div>
  </div>
  </div>





  <div class="container mt-5">
  <div class="row p-5">
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/marketplace-3d4d802b60.jpg" />
  </div>

  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >JGlobal marketplace</h3>
  <div class="o_Storytelling_Storytelling_text" >Showcase gives millions of customers access to your work. See your content around the world — even on billboards or in movies..</div>
  <button class="btn btn-lg  button_subpage  btn-primary">Join Now</button>
  </div>
  </div>
  </div>
  <div class="container mt-5">
  <div class="row p-5">
  <div class="col-lg-6 col-md-6">
  <h3 class="o_Storytelling_Storytelling_title" >Get the contributor app</h3>
  <div class="o_Storytelling_Storytelling_text" >Upload and submit images straight from your mobile device and track your activity and earnings, all while on the go..</div>
  <button class="btn btn-lg  button_subpage btn-primary">Learn More</button>
  </div>
  <div class="col-lg-6 col-md-6">
  <img class="img-fluid img_width"  src="img/all-img/app-d019150d52.jpg" />
  </div>
  </div>
  </div>
  <div class="row mt-5">
  <div class="col-lg-12 col-md-10 text-center ff mt-5"  style ={ { backgroundImage: "img/all-img/app-d019150d52.jpg" } }>
  <div class="bottom_div">
  <p class="bot" >Start earning today</p>
  <p class="bottom_para">Contribute to Shutterstock and make money doing what you love.</p>
  <center><Modal modalIsOpen="true" tag="role_seller" openUrl="loginModal"/></center>
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
