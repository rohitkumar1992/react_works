import React,{Component} from 'react';
import axios from 'axios';
import {SELLER_REGISTRATION} from '../../../../url';
import $ from 'jquery';
class BasicInfo extends Component{
  state={
    comp_name:'',
    comp_phone:'',
    comp_details:'',
    disp_name:''
  }
  isValidated=()=>
  {
    console.log(this.state.disp_name);
    if(this.state.comp_name=='' || this.state.comp_phone=='' || this.state.comp_details=='' || this.state.disp_name=='')
    {
      $('#error_message').html('Information Incomplete');
      return false;
    }
    axios.post(SELLER_REGISTRATION,{
      step_name:'company_info',
      user_id:localStorage.getItem('userid'),
      company_name:this.state.comp_name,
      phone_number:this.state.comp_phone,
      display_name:this.state.disp_name,
      company_info:this.state.comp_details
    })
  .then(response=>{
    if(response.data.success=="1" || response.data.success==1)
    {

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
  return(
    <center><div style={{marginTop:'80px'}}>
       <div class="main">
       <h6 id="error_message"></h6>
        <div class=" mt-5">
         <div class="col-md-8  col-lg-8 col-sm-8">
         <form id="myform">
         <div class="row mt-4">
         <div class="col-lg-6 col-md-6 col-sm-6">
         <div class="form-group ">
         <label for="comp_name" id="lab">Company Name</label>
         <input type="text" class="form-control input_1" id="comp_name" name="comp_name" onChange={(event)=>this.setState({comp_name:event.target.value})}/>
         </div>
         <div class="form-group">
         <label for="comp_phone" id="lab" >Phone Number</label>
         <input type="text" class="form-control input_1" id="comp_phone"  name="comp_phone" onChange={(event)=>this.setState({comp_phone:event.target.value})}/>
         </div>
         <div class="form-group">
         <label for="disp_name" id="lab" >Display Name</label>
         <input type="text" class="form-control input_1" id="disp_name"  name="disp_name" onChange={(event)=>this.setState({disp_name:event.target.value})}/>
         </div>
         </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group">
                <div class="ff">
                <label for="comp_details" id="lab">Company Details</label>
                <textarea rows="4" cols="50" id="comp_details" onChange={(event)=>this.setState({comp_details:event.target.value})}>
                </textarea>
                </div>
                </div>
          </div>
         </div>
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
export default BasicInfo;
