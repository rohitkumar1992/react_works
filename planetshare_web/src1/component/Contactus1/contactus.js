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
						
  

</main>
	</div>
  </div>

    );
  }
}
export default Contactus;
