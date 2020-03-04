import React,{Component} from 'react';
import axios from 'axios';
import {VENDOR_REGISTRATION} from '../../../../url';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import './address_info.css';

class AddressInfo extends Component{
  isValidated=(event)=>
  {
    event.preventDefault();
    var country_name=event.target.country_name.value;
    var pincode=event.target.pincode.value;
    var address=event.target.address.value;
    var city=event.target.city.value;
    var pincodematch=/^[0-9]+$/;
    if(!pincode.match(pincodematch))
    {
          $('#error_message').html('Pincode Must Be Numeric');
        return false;
    }
    if(country_name=='' || pincode=='' || address=='' || city=='')
    {
      $('#error_message').html('Information Incomplete');
      return false;
    }
    axios.post(VENDOR_REGISTRATION,{
      step_name:'billing_details',
      user_id:localStorage.getItem('userid'),
      country_name:country_name,
      pin_code:pincode,
      address:address,
      city_name:city
    })
  .then(response=>{
    if(response.data.success=="1" || response.data.success==1)
    {
        this.props.history.push('/dashboard/vendor');
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
  return(
    <center><div style={{marginTop:'80px'}}>
       <div class="main">
        <div class=" mt-5">
         <div class="col-md-8  col-lg-8 col-sm-8">
         <form onSubmit={this.isValidated}>
         <div class="row mt-4">
         <div class="col-lg-6 col-md-6 col-sm-6">
         <div class="form-group  input_4">
          <div class="col-lg-12 col-md-12 col-sm-12 text-left">
         <label for="country_name" id="lab" style={{fontWeight:'normal'}}>Country Name:</label>   </div>
          <div class="col-lg-12 col-md-12 col-sm-12 text-left">
         <input type="text" list="vendor_country_list" class="form-control input_1" id="country_name" name="country_name" required/>
         <datalist id="vendor_country_list">
         <option>India</option>
         <option>Russia</option>
         <option>USA</option>
         <option>Japan</option>
         <option>Pakistan</option>
         </datalist>
         </div>
            </div>
         <div class="form-group input_4">
          <div class="col-lg-12 col-md-12 col-sm-12 text-left">
         <label for="pincode" id="lab" style={{fontWeight:'normal'}} >Pincode:</label>   </div>
         <div class="col-lg-12 col-md-12 col-sm-12 text-left">
         <input type="text" class="form-control input_1" id="pincode"  name="pincode" required/>
         </div>
         </div>   </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group input_4">
                <div class="col-lg-12 col-md-12 col-sm-12 text-left">
                <label for="city" id="lab" style={{fontWeight:'normal'}} >City:</label>  </div>
                <div class="col-lg-12 col-md-12 col-sm-12 text-left">
                <input type="text" class="form-control input_1" id="city"  name="city" required/>
                </div>  </div>
                <div class="form-group input_6">
                <div class="ff">
                <div class="col-lg-12 col-md-12 col-sm-12 text-left">
                <label for="address" id="lab" name="address" style={{fontWeight:'normal'}}>Address:</label> </div>
                <div class="col-lg-12 col-md-12 col-sm-12 text-left">
                <textarea rows="4"   cols="50"  id="address">
                </textarea>
                </div>
                </div> </div>
                <button type="submit" class="btn btn-prev btn-primary  button_submit btn-lg pull-right" id="next-button1">Submit</button>
          </div>
         </div>
         <h6 id="error_message" style={{color:'red',marginLeft:'50px'}}></h6>
       </form>
        </div>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12">
        </div>
        </div>
        <div class="row mt-5">
        </div>
       </div></center>
     )
   }
}
export default withRouter(AddressInfo);
