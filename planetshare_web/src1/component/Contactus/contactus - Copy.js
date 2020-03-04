import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {CONTACTUS} from '../../url';
import './contactus.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Contactus extends Component {
  contactHandler =(e)=>{
    e.preventDefault();
    var data=e.target;
    if(data.user_phone.value.length!=10)
    {
      alert('Please Enter Correct Mobile Number');
      return false;
    }
    axios.post(CONTACTUS,{
      name:data.user_name.value,
      email:data.user_email.value,
      mobile:data.user_phone.value,
      subject:data.user_subject.value,
      message:data.user_message.value
    })
  .then(response=>{
    console.log(response.data.success);
    if(response.data.success=="1" || response.data.success==1){
        toast("Thanks For Contacting us  Your Message Has Been Sent")
        document.getElementById("contact_form").reset();
    }
    else {
      return false;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    return (
        <div class="top_div" style={{backgroundColor:'#fffff'}}>
        <ToastContainer autoClose={2000}/>
        <header class="inner_banner">
        <div class="overlay"></div>
        	  <img src="/img/contact_banner.jpg" style={{position:'absolute'}}/>
        <div class="container mt-5"  style={{top:'50px'}}>
        
		<div class="banner_information">
		<h1 id= "trans_encod">Contact Us</h1>
          <ul class="tarsn_list">
        <li > <i class="fa fa-check" aria-hidden="true"></i>&nbsp;Reach out for General Queries:  info@planetc.net</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>&nbsp; For any support call us on +91-120-2400780, +91-120-2402301-10</li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>&nbsp;Leave us a message and we’d get back to you! </li>
		  <li > <i class="fa fa-check" aria-hidden="true"></i>&nbsp;Public Relations: +91 9654635775 </li>
        <li > <i class="fa fa-check" aria-hidden="true"></i>&nbsp;For Sales reach us +91-120-2014698 </li>
        </ul>
		</div>


        </div>
          </header>
          <div class="container_6">
		<main id="main" class="site-main contactus" role="main">
						<div class="container-radius  page-details mb-4 mt-3 p-4">
					<article>
						<div class="entry-content row">
							<div class="col-md-5 aos-init aos-animate  ml-5" data-aos="fade-up" data-aos-duration="200">
								<h3 class="head_about ">Corporate Head Office</h3>
                <p class="para_address">C-34, Sector-62, Electronic City, Noida-201 307 </p>
                     <p class="para_address">(UP), India.</p>
                   <p class="para_address">Fax:+91-120-2400474.</p>
									<p class="para_address">		+91-120-2400780, +91-120-2402301-10 </p>		</div>
							<div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
								<iframe class="map map_1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6323751945406!2d77.36570181549487!3d28.61080349181403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5663c97e9cd%3A0xb22c763430e09779!2sPlanetcast+Media+Services+Limited!5e0!3m2!1sen!2sin!4v1536323870954" ></iframe>							</div>

						</div>
					</article>
				</div>
								<div class="container-radius page-details mb-4 p-4">
					<article>
						<div class="entry-content row">
							<div class="col-md-5 aos-init ml-5 " >
								<h3 class="head_about">Registered Office</h3>

                  <p class="para_address">C1121, Hemkunt Chambers, 11th Floor,.</p>
                   <p class="para_address">89 Nehru Place, New Delhi-110019, India.</p>

					         	</div>
							<div class="col-md-6 aos-init" >
								<iframe class="map map_1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7374604728266!2d77.25022551549395!3d28.547609994669312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c55fcb6929%3A0xc1915416d869c7ed!2sHemkunt+Towers%2C+Nehru+Pl+Market+Rd%2C+Nehru+Place%2C+New+Delhi%2C+Delhi+110048!5e0!3m2!1sen!2sin!4v1536324104635" ></iframe>							</div>

						</div>
					</article>
				</div>


				<div class="row">
					<div class="col-md-6 d-flex row-eq-height   mb-4 aos-init" >
						<article class="container-radius page-details">
							<div class="entry-content ml-4">
																	<h3 class="head_about">Mumbai</h3>
                                  <p class="para_address">C-34, Sector-62, Electronic City, Noida-201 307 (UP), India.</p>
                                     <p class="para_address">Fax:+91-120-2400474.</p>
                  									<p class="para_address">		+91-120-2400780, +91-120-2402301-10 </p>

<h3 class="head_about">Cochin</h3>
<p class="para_address">Door No : 174/a, Kottappuram Road,Near Aroor Church,</p>
   <p class="para_address">Fax:+91-120-2400474.</p>
  <p class="para_address">	Aroor Post, Alappuzha Dist Kerala-688 534</p>

<h3 class="head_about">Hyderabad</h3>
<p class="para_address">3-3-111/62, Sirimalle Nagar Hyderguda, Attapur</p>
   <p class="para_address">Hyderabad-500 048, India</p>




							</div>
						</article>
					</div>

					<div class="col-md-6 d-flex row-eq-height mb-4 aos-init" >
						<article class="container-radius page-details">
							<h4 class="text-center give_us">Give Us Feedback</h4>
              
              <form onSubmit={this.contactHandler} id="contact_form">
                <div class="container register-form">
                 <div class="form">
                  <div class="form-content">
                  <div class="row">
                  <div class="col-md-12">
                          <div class="form-group cont_input">
                            <input type="text" class="form-control box_input " id="user_name" name="user_name" placeholder="Your Name *" required/>
                          </div>
                          <div class="form-group cont_input">
                               <input type="text" class="form-control" id="user_phone" name="user_phone" placeholder="Phone Number *"  required/>
                           </div>
                            <div class="form-group cont_input">
                                <input type="email" class="form-control box_input" id="user_email" name="user_email" placeholder="Your email *" required/>
                            </div>
                            <div class="form-group cont_input">
                                <input type="text" class="form-control box_input"id="user_subject" name="user_subject" placeholder="Your Subject *"required />
                            </div>
                            <textarea name="your-message" cols="40" rows="2" class=" " id="user_message" name="user_message" placeholder="Leave your message here" required></textarea>
                          </div>
                        <button type="submit" class="btnSubmit_1 btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
          </div></form>


								</article>
					</div>
				</div>
				<div class="row row-eq-height justify-content-center">
										<article class="col-md-4 text-center mb-4 aos-init" data-aos="fade-up" data-aos-duration="200">
						<div class="container-radius page-details h100">

							<div class="entry-content">
									<h3 class="sub-title_1">General Queries </h3>
									<h5 class="p-0"></h5>
									<a href="mailto:info@planetc.net" class="info">info@planetc.net</a>									<p></p>

							</div>

					</div></article>
	         <article class="col-md-4 text-center mb-4 aos-init" >
						<div class="container-radius page-details h100">
							<div class="entry-content">
									<h3 class="sub-title_1">Public Relations </h3>

									<a href="mailto:satyandrey@planetc.net " class="info">satyandrey@planetc.net </a>									<p></p>

							</div>

					</div></article>

		</div></main>
	</div>
  </div>

    );
  }
}
export default Contactus;
