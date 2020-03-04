import React, { Component } from 'react';
import Modal from '../modal/modal';
import {Link} from 'react-router-dom';
import './terms_condition.css';

class TermsCondition extends Component {
  componentDidMount()
  {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  render() {
    return (
        <div class="top_div term_cond" style={{background:'#fffff'}}>
          {/*<div class="log_planet">
            <a class="img-responsive" href="#" ><img  class="log_terms" src="img/logo.png"/></a>
          </div>*/}
          <h2 class="head_terms offset-lg-2 offset-md-2">Terms and Conditions</h2>
          <div class="container_1">
            <div class="row">
              <div class="col-lg-12">
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>Welcome to Planetcast Media Services Limited These terms and conditions outline the rules and regulations for the use of Planetcast Media Services Limited's Website.  Planetcast Media Services Limited is located at:
                C-34, C Block, Phase 2, Electronic City, Sector 62 Noida 201307 - Uttar Pradesh, India
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Planetcast Media Services Limited's website  if you do not accept all of the terms and conditions stated on this
                page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> Any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i> Accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same. Cookies
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>We employ the use of cookies. By using Planetcast Media Services Limited's website you consent to the use of cookies in accordance with Planetcast Media Services Limited's privacy policy. Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting.                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>Some of our affiliate/advertising partners may also use cookies. License Unless otherwise stated, Planetcast Media Services Limited and/or it's licensors own the intellectual property rights for all material on Planetcast Media Services Limited. All intellectual property rights are reserved. You may view and/or print pages from            http://planetshare.in for your own personal use subject to restrictions set in these terms and conditions
                </p>
                <p class="sub_head mt-5">You must not:</p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i> Republish material from ​http://planetshare.in Sell, rent or sub-license material from http://planetshare.in Reproduce, duplicate or copy material from http://planetshare.in Redistribute content from Planetcast Media Services Limited
                  (unless content is specifically made for redistribution). Hyperlinking to our Content
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>The following organizations may link to our Web site without prior written approval Government agencies; Search engines; News organizations; Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,    and  charity fundraising groups which may not hyperlink to our Web site.
                </p>

                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>
                We may consider and approve in our sole discretion other link requests from the following types of organizations:commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;dot.com community sites; associations or other groups representing charities, including charity giving sites, online directory distributors; internet portals; accounting, law and consulting firms whose primary clients   are businesses; and educational institutions and trade associations
                </p>
                <p class="sub_head mt-5">   We will approve link requests from these organizations if we determine that:
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>
                   The link would not reflect unfavourably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link);
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>The organization does not have an unsatisfactory record with us;
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>The benefit to us from the visibility associated with the hyperlink outweighs the absence of
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>Where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.
                </p>
                <p class="sub_head mt-5">  These organizations may link to our home page, to publications or to other Web site information so long as the link:</p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>     Is not in any way misleading.</p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>  Does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services. </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>  Fits within the context of the linking party's site.</p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i>  If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to info@planetc.net. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>
                <p class="sub_head mt-5">Approved organizations may hyperlink to our Web site as follows:</p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i> By use of our corporate name; or By use of the uniform resource locator (Web address) being linked to; or By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site. No use of Planetcast Media Services Limited's logo or other artwork will be allowed for linking absent a trademark license agreement. Iframes Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site. Reservation of Rights
                </p>
                <p class="para_terms"> <i class="fa fa-caret-right caret mr-2"></i> We reserve the right at any time and in its sole discretion to request that you remove all links particular link also reserver Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.
                </p>
                <p class="sub_head mt-5">Removal of links from our website </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
                </p>
                <p class="sub_head mt-5">Content Liability</p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
                <p class="sub_head mt-5">Disclaimer</p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury resulting from negligence; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> Your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law.
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer:
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> Are subject to the preceding paragraph
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> Govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty. To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
                <p class="sub_head mt-5">Credit & Contact Information</p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> This Terms and conditions page was created at termsandconditionstemplate.com generator.
                </p>
                <p class="para_terms"><i class="fa fa-caret-right caret mr-2"></i> If you have any queries regarding any of our terms, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
export default TermsCondition;
