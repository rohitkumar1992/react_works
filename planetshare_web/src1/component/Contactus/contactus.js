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
  componentDidMount()
  {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
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
          <div class="contact_page">
          <div class="container_6 contact_container">
		<main id="main" class="site-main contactus" role="main">





<div class="container">
<div class="row cont_form">
<div class="col-md-5 col-sm-6 left_side">
<ul>
<li><a href="tel:+91-120-2400780">phone  : <span>+91-120-2400780</span></a></li>
<li><a href="mailto:info@planetc.net">EMAIL:<span>info@planetc.net</span></a></li>
<li>Location:<span>C-34, Sector-62, Electronic City, Noida-201 307 (UP), India.</span>



</li>
</ul>


</div>
<div class="col-md-7 col-sm-6 right_side">

<form onSubmit={this.contactHandler} id="contact_form" autocomplete="off">
                <div class="container register-form">
                 <div class="form">
                  <div class="form-content">
                  <div class="row">
                  <div class="col-md-12 ">
                          <div class="form-group cont_input">
                          <div class="has-float-label">
                            <input type="text" class="form-control box_input " id="user_name" name="user_name" placeholder=" " required/>
                          <label class="label-text" for="name">Name</label>
                          </div>
                          </div>
                          <div class="form-group cont_input">
                          <div class="has-float-label">
                               <input type="text" class="form-control" id="user_phone" name="user_phone" placeholder=" "  required/>
                               <label class="label-text" for="name">Phone Number </label>
                           </div>
                           </div>
                            <div class="form-group cont_input">
                            <div class="has-float-label">
                                <input type="email" class="form-control box_input" id="user_email" name="user_email" placeholder=" " required/>
                                <label class="label-text" for="name">Your email</label>
                            </div>
                            </div>
                            <div class="form-group cont_input">
                            <div class="has-float-label">
                                <input type="text" class="form-control box_input"id="user_subject" name="user_subject" placeholder=" "required />
                                 <label class="label-text" for="name">Your Subject</label>
                            </div>
                            </div>
                            <div class="form-group cont_input">
                              <div class="has-float-label">
                                         <textarea name="your-message" cols="40" rows="2" class="form-control" id="user_message" name="user_message" placeholder=" " required></textarea>
                             <label class="label-text" for="name">Leave your message here</label>
                             </div>
                             </div>



                          </div>
                        <button type="submit" class="btnSubmit_1 btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
          </div></form>
</div>
</div>
</div>


        <div class="container-radius page-details mb-4">
          <article>
            <div class="entry-content row">
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                <h3>Registered Office</h3>
                1121, Hemkunt Chambers, 11th Floor,
89 Nehru Place, New Delhi-110019, India             </div>
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7374604728266!2d77.25022551549395!3d28.547609994669312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c55fcb6929%3A0xc1915416d869c7ed!2sHemkunt+Towers%2C+Nehru+Pl+Market+Rd%2C+Nehru+Place%2C+New+Delhi%2C+Delhi+110048!5e0!3m2!1sen!2sin!4v1536324104635" width="450" height="200" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>             </div>

            </div>
          </article>
        </div>


        <div class="container-radius page-details mb-4">
          <article>
            <div class="entry-content row">
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                <h3>Mumbai Office</h3>
               Unit No. 109-114, Ground floor B-wing, ORM Mall, Royal Palms Mayur Nagar, Goregaon East Mumbai-400065, Fax: 91-22-28766475
+91-22-28766473</div>
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6323751945406!2d77.36570181549487!3d28.61080349181403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5663c97e9cd%3A0xb22c763430e09779!2sPlanetcast+Media+Services+Limited!5e0!3m2!1sen!2sin!4v1536323870954" width="450" height="200" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>             </div>

            </div>
          </article>
        </div>


        <div class="container-radius page-details mb-4">
          <article>
            <div class="entry-content row">
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                <h3>Cochin Office</h3>
               Door No : 174/a, Kottappuram Road,Near Aroor Church,
Aroor Post, Alappuzha Dist Kerala-688 534   </div>
              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6323751945406!2d77.36570181549487!3d28.61080349181403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5663c97e9cd%3A0xb22c763430e09779!2sPlanetcast+Media+Services+Limited!5e0!3m2!1sen!2sin!4v1536323870954" width="450" height="200" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe>             </div>

            </div>
          </article>
        </div>



</main>
	</div>
  </div>
  </div>

    );
  }
}
export default Contactus;
