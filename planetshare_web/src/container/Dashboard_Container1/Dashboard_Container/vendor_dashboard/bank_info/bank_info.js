import React,{Component} from 'react';
import axios from 'axios';
import {VENDOR_REGISTRATION} from '../../../../url';
import $ from 'jquery';
class BankInfo extends Component{
  state={
    account_holder_name:'',
    account_number:'',
    ifsc_code:'',
    bank_name:''

  }
  isValidated=()=>
  {

    if(this.state.account_holder_name=='' || this.state.account_number=='' || this.state.ifsc_code=='' || this.state.bank_name=='')
    {
      $('#error_message').html('Information Incomplete');
      return false;
    }
    axios.post(VENDOR_REGISTRATION,{
      step_name:'bank_details',
      user_id:localStorage.getItem('userid'),
      account_holder_name:this.state.account_holder_name,
      account_number:this.state.account_number,
      ifsc_code:this.state.ifsc_code,
      bankName:this.state.bank_name
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
         <form>
         <div class="row mt-4">
         <div class="col-lg-6 col-md-6 col-sm-6">
         <div class="form-group ">
         <label for="bank_name" id="lab">Bank Name:</label>
         <input type="text" class="form-control input_1" id="bank_name" name="bank_name" onChange={(event)=>this.setState({bank_name:event.target.value})}/>
         </div>
         <div class="form-group">
         <label for="acc_no" id="lab">Account No:</label>
         <input type="text" class="form-control input_1" id="acc_no"  name="acc_no" onChange={(event)=>this.setState({account_number:event.target.value})}/>
         </div>
         </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="form-group">
                <div class="ff">
                <label for="holder_name" id="lab">Account Holder Name</label>
                </div>
                <input type="text" class="form-control input_1" id="holder_name"  name="holder_name" onChange={(event)=>this.setState({account_holder_name:event.target.value})}/>
                </div>
                <div class="form-group">
                <label for="ifsc_code" id="lab" >IFSC Code:</label>
                <input type="text" class="form-control input_1" id="ifsc_code"  name="ifsc_code" onChange={(event)=>this.setState({ifsc_code:event.target.value})}/>
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
export default BankInfo;
