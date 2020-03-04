import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './aboutus.css';

class Dubbing extends Component {
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'white'}}>
    <header class="inner_banner">
      <div class="overlay"></div>
        <img src="img/aboutus1_banner.jpg" style={{position:'absolute'}}/>
        <div class="container mt-5   ml-5"    style={{top:'80px'}}>
      
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
  
  
    <div class="container">
       <div class="row  wc_pixel">
<div class="col-sm-4 box-left img_imagine">
<figure><img src="img/all-img1/imagine.jpg"/></figure>

</div>
<div class="col-sm-8 box-right">
<h3 class="wow fadeInDown" >Imagine, Innovate, Inspire</h3>
<p>Unleash the power of Media to transform your business with Plantcast’s Media  Solutions. Planetcast Media Services is your one-stop shop for all your Media necessities.  We provide end to end solutions to deliver the industry’s most innovative and  comprehensive media solutions.</p>
<p>With our advanced media delivery and management capabilities, we aim to provide  integrated solutions connecting content creation, collaboration, consumption and  distribution. At Planetcast, we strive to assist creative professionals to produce their  best work with spectacular content and share it with the world, all under one platform</p>
<p>Deliver your media to the world anytime, anywhere and on any device. Our Media  platform integrates different aspects of broadcasting, production and post-production.</p>

<p><a class="btn btn-default" href="#">contact Us</a></p>
</div>
</div>

<div class="row  wc_pixel">
<div class="col-sm-8 box-right">
<h3 class="wow fadeInDown" >What We Offer</h3>
<p>Planetcast Media Services simplifies all digital media workflows to cover all requirements in today’s Media landscape. We offer a wide range of product and services in various media segments. We have created a unique media platform where buyers and sellers come under one roof to foster profitability for your business.</p>
<p>With our unique platform, you can buy as well as sell content and deliver it to the world. We offer best in class quality images, footage videos, illustrations and other media as per your needs. We have a wide collection of images and footage videos for our customers to download. In addition to this, you can also contribute to us and get paid with our Media services.</p>
<p>Furthermore, we offer a wide range of services to enrich your media experiences. We can help you with monetising your content with our highly sophisticated services. We provide studio-grade streaming services to audiences of any size. We also help in transforming and tuning your content to all devices and network conditions with our advanced transcoding services</p>
<p>At Planetcast, we provide exceptionally reliable and secure solutions for the storage of your digital assets with our archiving services. With our digital archival services, you can manage your content anytime from any location.</p>
<p>In addition to this, we provide a range of post-production and studio based services to add value to your content.Last but not the least, our services are scalable and affordable and also we ensure utmost satisfaction of our client in terms of service and delivery.</p>
<p><a class="btn btn-default" href="#">contact Us</a></p>
</div>
<div class="col-sm-4 box-left"><figure><img src="img/all-img1/off.jpg"/></figure></div>
</div>	
	   
</div>
                
                
                
       				
       		
       
    



  </div>

    );
  }
}
export default Dubbing;
