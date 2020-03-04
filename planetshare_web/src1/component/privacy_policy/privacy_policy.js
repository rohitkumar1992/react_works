import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './privacy_policy.css';
import $ from 'jquery'
class PrivacyPolicy extends Component {

  componentDidMount()
  {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    $(".scrollTo").on('click', function(e) {
         e.preventDefault();
         var target = $(this).attr('href');
         $('html, body').animate({
           scrollTop: ($(target).offset().top)
         }, 2000);
      });
      $(window).scroll(function() {
          var height = $(window).scrollTop();
          if (height > 100) {
              $('#back2Top').fadeIn();
          } else {
              $('#back2Top').fadeOut();
          }
      });
      $(document).ready(function() {
          $("#back2Top").click(function(event) {
              event.preventDefault();
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
          });

      });
  }
  render() {
    return (
        <div class="top_div priv_policy" style={{backgroundColor:''}}>
          {/*<div class="log_planet">
            <a class="img-responsive" href="#" ><img  class="log_terms" src="img/logo.png"/></a>
          </div>*/}
          <h2 class="head_terms">Privacy Policies</h2>
          <div class="container_2">
            <div class="sec_links">
              <ul>
                <li><a href="#a" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Introduction</a></li>
                <li><a href="#b" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Users Outside India</a></li>
                <li><a href="#c" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Collection Of Information/Data</a></li>
                <li><a href="#d" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Use of information</a></li>
                <li><a href="#e" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Cookies</a></li>
                <li><a href="#f" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Information Sharing And Disclosure</a></li>
                <li><a href="#g" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Compliance With Laws And Law Enforcement</a></li>
                <li><a href="#h" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Email Policies</a></li>
                <li><a href="#i" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Data Security</a></li>
                <li><a href="#j" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Data Retention</a></li>
                <li><a href="#k" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Links To Other Sites</a></li>
                <li><a href="#l" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Changes In Privacy Policy</a></li>
                <li><a href="#m" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Your Rights Concerning Data</a></li>
                <li><a href="#n" class="scrollTo"><span><i class="fa fa-check" aria-hidden="true"></i></span> Contact Us</a></li>
              </ul>
              <div class="clearfix"></div>
            </div>

            <div class="cont_box" id="a">
              <h3>Introduction</h3>
              <p>This is Planetshare's Privacy Policy page. Planetshare is a subsidiary of Planetcast Media Services Limited ((formerly known as Essel Shyam Communication Limited). We at Planetshare, have the utmost respect for the privacy of our customers and visitors. </p>
              <p>Please note that for this Privacy Policy, wherever the context so demands, terms "<b>Platform</b>", <b>We</b> ", "<b>Us</b>" and "<b>Our</b>" shall mean the website (s), Mobile sites (s) and App (s) of Planetshare and its related entities such as Parent site, subsidiaries, etc. and "<b>You</b>" or "<b>Your</b>" shall mean Visitors.</p>
              <p>By visiting or entering the Website, Mobile Site or App, or making any purchase (s), you hereby agree with this Privacy Policy and the contents within. This Privacy Policy shall not apply to any third-party website(s), mobile site (s) and App (s), even if their websites or/and products are linked to Planetshare in any form.</p>
              <p>We recommend all users to take note that Information and Privacy Practices of our partners, advertisers, or other sites which find a mention or hyperlink on Planethshare, may be substantially different from our Privacy Policy. We at Planethshare, suggest you to review the Privacy Policies of any such third-party websites.</p>
              <p>We request you to view this Privacy Policy in conjunction and together with the Terms of Service. Please note that we collect Personal Information of User(s) if the User(s) registers on our website, enters the website or performs any action and buys our products and services on the Website or the App.</p>
              <div class="bullet_list">
                <p>These are our Privacy Policy Principles:</p>
                <ul>
                  <li><p>Giving Personal Information or any data to us is the user's choice.</p></li>
                  <li><p>We do not share your information with anyone unless it is under our business or legal obligation (s).</p></li>
                  <li><p>User (s) always has the option to opt-out of receiving communications from Planetshare.</p></li>
                  <li><p>User (s) can always write to us to raise concerns or get clarifications on this Privacy Policy.</p></li>
                </ul>
              </div>
              <div class="clearfix"></div>
            </div>
            <hr></hr>
            <div class="cont_box" id="b">
              <h3>Users Outside India</h3>
              <p>The data provided to us shall be essentially processed within the Geographical Limits of India and such other domains where our service partners may process the data on our behalf. By consenting to this Privacy Policy, you are providing Planetshare with your clear permission to process your data for the purpose(s) outlined in this policy. Please note that the data security regulations in India or such other jurisdictions cited above may vary from those of your country.</p>
              <p>Please feel free to contact us at <a href="mailto:amit@planetshare.in">AMIT@PLANETSHARE.IN</a> if you have any concerns regarding the processing of your personal information. However, if such processing of your personal information is necessary for us to be able to render the services to you, we may be unable to provide you with our products and services after the retraction of consent.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="c">
              <h3>Collection Of Information/Data</h3>
              <p>Before we list out the types of information we collect from users, it is important to mention that we collect and process your data only when it is essential for us to deliver the services opted by our users and fulfil our commitments towards our partners and legal obligations.</p>
              <div class="bullet_list">
                <p>Here's the list of Personal Information we may collect:</p>
                <ul>
                  <li><p>Registration details such as your Name, Email Address, Username, Mobile Number/Contact Details, Password, Location, Address, etc.</p></li>
                  <li><p>We may collect your Social Media Username and any information you share with us while accessing or engaging with our website and App through a Social Media Service.</p></li>
                  <li><p>Transactional history related to our products and services (excluding your banking details) available on our website and App.</p></li>
                  <li><p>Your Credit/Debit card details or other Bank details while purchasing any products and services in some cases when you choose to share with us.</p></li>
                  <li><p>Your clicks and visits to subpages while on our website, links followed here, service requests, orders details and open and completed transactions.</p></li>
                  <li><p>Your search terms, products or services viewed, service cart, responses, comments, pictures, videos or other related contents that you share with us or store on our website or the App.</p></li>
                  <li><p>Usage behaviour of the website or interests, purchasing derivatives, and other traceable activities.</p></li>
                  <li><p>Your preferences such as language.</p></li>
                  <li><p>Any information you have made public on Social Media platforms.</p></li>
                  <li><p>Details of your device, network, session, Uniform Resource Locator (URL), Date and Time of your visit and other commercially available services and details traced through cookies.</p></li>
                  <li><p>IP Address, Operating System (OS), browser details, Internet Service Provider (ISP), and other connection-related information.</p></li>
                  <li><p>Newsletter subscriptions, survey answers, reviews, ratings and feedback.</p></li>
                  <li><p>Consents, authorizations, agreements, etc.</p></li>
                  <li><p>Any communication performed on the website including but not limited to information posted in Social Communities on our platform, content of contact forms, and chat transcripts.</p></li>
                  <li><p>Details of software and other content downloaded from our platform.</p></li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div class="cont_box" id="d">
              <h3>Use of information</h3>
              <div class="bullet_list">
                <p>Planetshare may use your Personal Information or Data for various reasons including but not limited to:</p>
                <ul>
                  <li><p>Allow you to access our website with various features, and products and services available on the website or the App.</p></li>
                  <li><p>Send verification email(s) or message(s).</p></li>
                  <li><p>Contact you for any service-related or offer-related purposes.</p></li>
                  <li><p>Record your information and details as authorised to fulfil our service and legal obligations.</p></li>
                  <li><p>Validate/authenticate your account so that we can prevent any misuse or abuse.</p></li>
                  <li><p>Recommend contents, send transactional communication, provide you with information, conduct surveys, request for services, push direct marketing notifications and send you other marketing materials from time to time in connection with our website or its parent, subsidiaries, affiliated companies, service partners and its joint ventures.</p></li>
                  <li><p>Integrate certain third-party Software Development Kits (SDKs) within the Platform to aid advertisement display suited for you and to enhance the overall user experience. Such SDK's may directly collect certain data from you such as user preferences, behaviour, account activity, IP address, interactions with advertisements, Identifiers for Advertisers (IDFAs) and Google Advertising ID (AAID).</p></li>
                  <li><p>Collect and analyse several types of technical information and may include cookies and web beacons.</p></li>
                  <li><p>Request you to share feedback on our products or/and services.</p></li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div class="cont_box" id="e">
              <h3>Cookies</h3>
              <p>A cookie is a small file or set of files and it saves a string of information on your device. Planetshare.in uses “Cookies” to help us provide you with customised information upon your revisit to the platform. It acts so to store your preferences and track your behaviour to pave the way for us to render you the best user experience on our site.</p>
              <p>Please note that Cookies shall come into effect only if you allow the permission on your browser. If you grant permission to a “Cookie”, you hereby agree to our use of data collected through that Cookie.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="f">
              <h3>Information Sharing And Disclosure</h3>
              <p>We may grant permission to our service partners, agents and third-party vendors to access your Personal Information or Data to perform essential activities to enhance the quality of the services provided to you.</p>
              <p>We shall endeavour that such third-parties and others having access to your Personal Information or Data for the purposes detailed out in this Privacy Policy, remain under a contractual obligation to protect your data in accordance with the same standard and security parameters as Planetshare has agreed to be subject to herein.</p>
              <p>We may disclose your Personal Information only when it is absolutely necessary for us to do so to fulfil our obligations. Please note that recipients of your data may be located in any country including those nations or territories or jurisdictions where applicable data protection regulations provide a lesser degree of protection than your country's laws do. </p>
              <p>Please note that we shall exercise prudent commercial endeavours for the restriction of unauthorised disclosure of your Personal Information or data provided by our users, visitors and customers.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="g">
              <h3>Compliance With Laws And Law Enforcement</h3>
              <p>We cooperate with the government authorities, law enforcement agencies of the land, court or legal order and any other competent authority mandated by the law to enforce and comply with the law. We shall disclose any information including but not limited to your Personal Information to such government authorities and law enforcement agencies without your consent as we, in our sole discretion, deem necessary or appropriate to respond to valid claims and legal process, to protect the safety of the public, to guard the property and rights of our platform or a third-party, or any person, or to restrict or stop any unauthorised, unethical or unlawful activity. </p>
            </div>
            <hr></hr>
            <div class="cont_box" id="h">
              <h3>Email Policies</h3>
              <p>We may use data for the purposes stated in this Privacy Policy. You have full control concerning emails and other communications you want to receive. If you decide at any point in time during your association with Planetshare or otherwise you no longer wish to receive such communications from us, you have the option to opt-out. We hope you understand that once we receive your request, it may take a certain time for your opt-out to come into effect.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="i">
              <h3>Data Security</h3>
              <p>We respect your data security and understand its importance as we want your user experience with us to be safe and secure. We would like to inform you that our platform has implemented reasonable precautionary measures to protect your Personal Information or Data, including technical and organisational means against unauthorized access, improper handling, modification, illegal or accidental destruction, and accidental loss. </p>
              <p>All payments and transactions on our website are secured. All your Personal Information are transmitted using Transport Layer Security (TLS) encryption.</p>
              <p>Please note that despite our best efforts to protect your data against potential risks, we cannot guarantee the 100% data protection as the internet world is not absolutely secure.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="j">
              <h3>Data Retention</h3>
              <p>We retain your Personal Information or data only for as long as we deem it to be essential for the purposes detailed out in this Privacy Policy. Please note that we may store your data for longer periods of time subject to any legal obligations.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="k">
              <h3>Links To Other Sites</h3>
              <p>We at Planetshare may provide links to other third-party websites including but not limited to payment gateway providers to ensure your convenience. Please note that we do not directly collect any financial information such as Net Banking details, Credit/Debit Card details and other related details from You. Such third-party websites are not governed by our Privacy Policy. We recommend you to review their privacy practices as they follow their own privacy and data collection guidelines. You shall visit such websites at your own risk and we shall not be responsible for anything that happens to your data while you are on such websites. </p>
              <p>Also, the Platform may contain several other links to third-party websites, including but not limited to ads, promotions and services. You shall visit these websites at your own risk and Plansteshare shall not be responsible for any data loss of yours during your visit to such websites. Such third-party websites may prompt you to download their or foreign software or subscribe to certain services, etc. Please note that you shall follow these steps at your own risk. In no way, Planetshare shall be responsible for any data loss or damage to your device or attack on your network, etc.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="l">
              <h3>Changes In Privacy Policy</h3>
              <p>Planetshare reserves the rights to revise, modify or completely change the Privacy Policy from time to time to fulfil various business, legal, and other related obligations. Please note that your acceptance of the then-current Privacy Policy shall be necessary to avail services and to visit our platform. Therefore, we encourage you to regularly visit our Privacy Policy to review any changes.</p>
            </div>
            <hr></hr>
            <div class="cont_box" id="m">
              <h3>Your Rights Concerning Data</h3>
              <p>You may access your Personal Information or data from your user account with Planetshare. </p>
            </div>
            <hr></hr>
            <div class="cont_box" id="n">
              <h3>Contact Us</h3>
              <p>If you have any queries and concerns about this Privacy Policy or your dealings with the website or the App. Please feel free to contact us at <a href="mailto:amit@planetshare.in"> AMIT@PLANETSHARE.IN</a>  or you can write and send a letter to us at the below address:- <br/>C-34, Sector-62, Electronic City, Noida-201 307 (UP), India.</p>
            </div>
          </div>
          <a id="back2Top" title="Back to top" href="javascript:;">&#10148;</a>
        </div>


    );
  }
}
export default PrivacyPolicy;
