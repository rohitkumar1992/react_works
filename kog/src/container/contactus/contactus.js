import React from 'react'
import axios from 'axios';
import {COUNTRYCODE,PARTNER_ID,USERID,GENERATE_TICKET} from '../../url';
import {  toast,cssTransition} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'
const Zoom = cssTransition({
enter: 'zoomIn',
exit: 'zoomOut',
duration: 750,
});
class Aboutus extends React.Component{
onSubmit=async(e)=>{
  e.preventDefault();
  var tag=e.target.tag_p.value.trim();
  var msg=e.target.msg_t.value.trim();
  if(msg=='')
  {
    toast("Message can't be blank",{ transition: Zoom});
    return false;
  }
  var formData=new FormData();
  formData.append('userid',USERID);
  formData.append('countrycode',COUNTRYCODE);
  formData.append('partnerid',PARTNER_ID);
  formData.append('msg',msg);
  formData.append('tag',tag);
  let response= await axios.post(GENERATE_TICKET,formData,{headers:{'token':localStorage.getItem('token')}});
    if(response.status=='200')
    {
        var result=response.data;
          //this.setState({not_found:true,isLoading:true})
          $("#ticket_form").trigger("reset");
          toast(result.Msg,{ transition: Zoom,});
    }
    else {
    }
}
  render()
  {
    return(
      <div class="inner_wrap">
        {/*<section class="inner_banner">
          <div class="item">
            <img src="images/home_banner1.jpg" alt="" />
            <div class="caption">
              <div class="container">
                <div class="b_title">

                    <h2>About Us</h2>
                    <p><span></span>Examples might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using this site, you agree to have read and accepted our terms of use,</p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        <section class="about_area">
          <article class="container">
              <h2 class="text-center">About us</h2>
              <p>One Take Media was formed to be a successful conduit between high quality content producers from across the globe and to the right audiences. Our mission is to transcend geographical and linguistic boundaries as ewe feel that we specialize in contnet production, global conten and distribution, providing Value add services (VAS) to global DTH platforms/Cable Platforms in varous genres like Nursery Rhymes, Kids Animated Series, Kids Animated Movies, Bollywood Spicy Songs, Celebrity based Cooking Shows, Short Films etc.</p>

              <form  onSubmit={this.onSubmit} id="ticket_form">
                <h3 class="text-center">Write to us</h3>
                <div class="fields checkboxes">
                  <div class="inputbox">
                    <input type="radio" id="support" name="tag_p" value="s" required/>
                    <label for="support">Support & Contact us</label>
                  </div>
                  <div class="inputbox">
                    <input type="radio" id="business" name="tag_p" value="b" required/>
                    <label for="business">Business</label>
                  </div>
                  <div class="inputbox">
                    <input type="radio" id="feedback" name="tag_p" value="f" required/>
                    <label for="feedback">Feedback</label>
                  </div>
                </div>
                <div class="fields">
                  <div class="inputbox">
                    <textarea placeholder="How can we help you?" name="msg_t" required></textarea>
                  </div>
                </div>
                <div class="buttons">
                  <button type="button" class="btn btn-danger" onClick={()=>{  $("#ticket_form").trigger("reset");}}>Cancel</button>
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </form>
          </article>
          <div class="clearfix"></div>
        </section>
      </div>
    )
  }
}
export default Aboutus;
