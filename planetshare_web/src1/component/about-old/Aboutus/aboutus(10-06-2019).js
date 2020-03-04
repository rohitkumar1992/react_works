import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './aboutus.css';

class Dubbing extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'white'}}>
     <header>
      <div class="overlay"></div>
	 
        
        <div class="container">
        <h1 id= "trans_encod">About Us</h1>
        <div class="banner_info">
        <ul class="tarsn_list">
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
   <div class="container">
       <div class="row">
       	<div class="card_4 col-md-5 p-3 offset-lg-1 offfet-md-1">


       				<div class="card_4-block">
       					<h2 class="card-title_about title_card">Imagine, Innovate, Inspire </h2>
       					<p class="card-text_about text-justify">Unleash the power of Media to transform your business with Plantcast’s Media  Solutions. Planetcast Media Services is your one-stop shop for all your Media necessities. 
                  We provide end to end solutions to deliver the industry’s most innovative and  comprehensive media solutions.</p>

                    <p class="card-text_about text-justify mt-3">With our advanced media delivery and management capabilities, we aim to provide  integrated solutions connecting content creation, collaboration, consumption and  distribution. At Planetcast, we strive to assist creative professionals
                   to produce their  best work with spectacular content and share it with the world, all under one platform</p>
                   	<p class="card-text_about text-justify">Deliver your media to the world anytime, anywhere and on any device. Our Media  platform integrates
                    different aspects of broadcasting, production and post-production.</p>
       				</div>

            </div>
          <div class="col-md-4 p-4" style={{marginLeft:'100px'}}>
          <img src="img/all-img/marketplace-3d4d802b60.jpg"  style={{maxWidth:'100%'}}/>
       </div>
       	<div class="card_4 col-md-12 p-3 offset-lg-1 offset-md-1">
       		<div class="row ">
       			<div class="col-md-10 p-3">
       				<div class="card_4-block">
       					<h2 class="card-title_about  title_card">What We Offer   </h2>
                <div class="row  pb-3">
                <div class="col-lg-6">
       					<p class="card-text_about text-justify">Planetcast Media Services simplifies all digital media workflows to cover all requirements in today’s Media landscape. We offer a wide range of product and services in various media segments. We have created a unique media
                 platform where buyers and sellers come under one roof to foster profitability for your business. </p>
                 </div>
              <div class="col-lg-5" style={{marginLeft:'50px'}}>
              <img class="img-fluid mx-auto d-block rounded" src="img/all-img/about_us.jpg" alt="Feature 01"/>
                </div>
                </div>
                <div class="row mt-5  pb-3">
                <div class="col-lg-4">
                <img  class="img-fluid mx-auto d-block rounded " src="img/all-img/paid_in.jpg" alt="Feature 01"/>
                  </div>
                <div class="col-lg-8">
                 	<p class="card-text_about text-justify">With our unique platform, you can buy as well as sell content and deliver it to the world. We offer best in class quality images, footage videos, illustrations and other media as per your needs. We have a wide collection of images and footage videos for
                 our customers to download. In addition to this, you can also contribute to us and get paid with our Media services</p>
                 </div>
                </div>
                <div class="row mt-5  pb-3">
                <div class="col-lg-6">
                	<p class="card-text_about text-justify">Furthermore, we offer a wide range of services to enrich your media experiences. We can help you with monetising your content with our highly sophisticated services. We provide studio-grade streaming services to audiences of any size. We also help in transforming
                  and tuning your content to all devices and network conditions with our advanced transcoding services</p>
                  </div>
               <div class="col-lg-5" style={{marginLeft:'50px'}}>
               <img class="img-fluid mx-auto d-block rounded" src="img/all-img/about_us.jpg" alt="Feature 01"/>
                 </div>
                 </div>
                 <div class="row mt-5  pb-3">
                 <div class="col-lg-4">
                 <img  class="img-fluid mx-auto d-block rounded " src="img/all-img/images_about.jpg" alt="Feature 01"/>
                   </div>
                 <div class="col-lg-8">
                    <p class="card-text_about text-justify">At Planetcast, we provide exceptionally reliable and secure solutions for the storage of your digital assets with our
                   archiving services. With our digital archival services, you can manage your content anytime from any location</p>
                   </div>
                   </div>
                   <div class="row mt-5 ">
                   <div class="col-lg-6 mt-3">
                    <p class="card-text_about text-justify">In addition to this, we provide a range of post-production and studio based services to add value to your content.</p>
                    <p class="card-text_about text-justify">Last but not the least, our services are scalable and affordable and also we ensure utmost satisfaction of our client in terms of service and delivery.</p>
                     </div>
                     <div class="col-lg-4" style={{marginLeft:'100px'}}>
                     <img  class="img-fluid mx-auto d-block rounded " src="img/all-img/paid_in.jpg" alt="Feature 01"/>
                       </div></div>
       				</div>
       			</div>
       		</div>
       	</div>
       </div>
     </div>



  </div>

    );
  }
}
export default Dubbing;
