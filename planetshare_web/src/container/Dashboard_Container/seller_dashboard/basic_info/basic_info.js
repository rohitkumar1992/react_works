import React,{Component} from 'react';
import axios from 'axios';
import {SELLER_REGISTRATION,CHECK_SELLER_STATUS} from '../../../../url';
import $ from 'jquery';
import './bsic_infoo.css';
import {Redirect} from 'react-router-dom';
class BasicInfo extends Component{
  state={
     code:null
  }
  componentDidMount()
  {
    this.getStatus();
  }
  getStatus=()=>{
    axios.post(CHECK_SELLER_STATUS,{
      user_id:localStorage.getItem('userid'),
    })
  .then(response=>{
    if(response.data.code!=null && response.data.code!=0)
    {
      if(response.data.code==2)
      {
        localStorage.setItem('seller_status',0);
      }
      else {
          localStorage.setItem('seller_status',1);
      }
    }
    this.setState({code:response.data.code});
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  isValidated=(e)=>
  {
    // console.log(this.state.disp_name);
    e.preventDefault();
    var event=e.target;
    var country_name=event.country_name.value;
    var pincode=event.pincode.value;
    var city=event.city.value;
    var address=event.address.value;
    var phone=event.comp_phone.value;

    if(event.comp_name.value=='' || event.comp_details.value=='' || event.comp_phone.value=='' || event.disp_name.value=='' || country_name=='' || pincode=='' || city=='' || address=='')
    {
      $('#error_message').html('Information Incomplete');
      return false;
    }
    var pincodematch=/^[0-9]+$/;
      if(!phone.match(pincodematch))
      {
            $('#error_message').html('Phone Number Must Be Numeric');
          return false;
      }
    axios.post(SELLER_REGISTRATION,{
      step_name:'company_info',
      user_id:localStorage.getItem('userid'),
      company_name:event.comp_name.value,
      phone_number:event.comp_phone.value,
      display_name:event.disp_name.value,
      company_info:event.comp_details.value,
      country_name:country_name,
      pin_code:pincode,
      address:address,
      city_name:city
    })
  .then(response=>{
    if(response.data.success=="1" || response.data.success==1)
    {
      localStorage.setItem('seller_status',1);
      setTimeout(()=>this.props.history.push('/dashboard/seller'),1000);
        return true;
    }
    if(response.data.success=="0" || response.data.success==0)
    {
        $('#error_message').html('Invalid Details');
        return false;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render()
  {
    if(this.state.code!=null)
    {
      if(this.state.code==0)
      {
  return(
    <center>
    <div class="seller_detail">
       <div class="main">
        <div class=" mt-5">
         <div class="col-md-10 col-lg-10 col-sm-10">
         <form id="myform" onSubmit={this.isValidated}>
            <h1>Join Our Seller Community</h1>
            <div class="fields">
              <h2>Company Info</h2>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                  <div class="form-group input_4">
                     <label for="comp_name" id="lab">Company Name</label>
                     <input type="text" class="form-control input_1" id="comp_name" name="comp_name" />
                  </div>
                  <div class="form-group input_4">
                    <label for="comp_phone" id="lab" >Phone Number</label>
                    <input type="text" class="form-control input_1" id="comp_phone"  name="comp_phone" />
                  </div>
                  <div class="form-group input_4">
                   <label for="disp_name" id="lab" >Display Name</label>
                   <input type="text" class="form-control input_1" id="disp_name"  name="disp_name" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                  <div class="form-group input_5">
                    <div class="ff">
                      <label for="comp_details" id="lab">Company Details</label>
                      <textarea rows="4" cols="50" id="comp_details" name="comp_details"></textarea>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="fields last">
              <h2>Located At</h2>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                  <div class="form-group input_4">
                    <label for="country_name" id="lab">Country Name:</label>
                    <input type="text" list="seller_country_list" class="form-control input_1" id="country_name" name="country_name" required/>
                    <datalist id="seller_country_list">
                     <option>India</option>
                     <option>Russia</option>
                     <option>USA</option>
                     <option>Japan</option>
                     <option>Pakistan</option>
                    </datalist>
                  </div>
                  <div class="form-group input_4">
                    <label for="city" id="lab" >City</label>
                    <input type="text" class="form-control input_1" id="city"  name="city" required/>
                  </div>
                  <div class="form-group input_4">
                    <label for="pincode" id="lab" >Pincode</label>
                    <input type="text" class="form-control input_1" id="pincode"  name="pincode" required/>
                  </div>

                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                  <div class="form-group input_5">
                    <div class="ff">
                      <label for="address" id="lab" name="address">Address</label>
                      <textarea rows="4" cols="50" id="address"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 id="error_message" style={{color:'red',marginLeft:'50px'}}></h6>
            <div class="buttons">
              <button type="submit" class="btn btn-prev btn-primary btn-md pull-right" id="next-button1">Submit</button>
            </div>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-12"></div>
    </div>
    <div class="row mt-5"></div>
  </div>
</center>
     )
   }
   else {
     return(<Redirect to="/dashboard/seller"/>)
   }
 }
   else {
     return(()=>this.getStatus())
   }
   }
}
export default BasicInfo;
