import React,{Component} from 'react';
import axios from 'axios';
import {VENDOR_REGISTRATION} from '../../../../url';
import $ from 'jquery';
import './bank_infoo.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class BankInfo extends Component{
  isValidated=(e)=>
  {
    e.preventDefault();
    var event=e.target;
    var account_holder_name=event.holder_name.value.trim();
    var account_number=event.acc_no.value.trim();
    var ifsc_code=event.ifsc_code.value.trim();
    var bank_name=event.bank_name.value.trim();
//     console.log(account_holder_name+"--"+
// account_number+"--"+
// ifsc_code+"--"+
// bank_name);

    if(account_holder_name=='' || account_number=='' || ifsc_code=="" || bank_name=='')
    {
      $('#error_message').html('Information Incomplete');
      return false;
    }
    axios.post(VENDOR_REGISTRATION,{
      step_name:'bank_details',
      user_id:localStorage.getItem('userid'),
      account_holder_name:account_holder_name,
      account_number:account_number,
      ifsc_code:ifsc_code,
      bankName:bank_name
    })
  .then(response=>{
    if(response.data.success=="1" || response.data.success==1)
    {
      localStorage.setItem('vendor_status',0);
      toast("Updating Your Profile");
      setTimeout(()=>this.props.history.push('/dashboard/vendor/profile'),2000);
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
    <center>
      <div class="veder_account_info" style={{marginTop:'80px'}}>
        <ToastContainer autoClose={2000}/>
        <form id="acc_details" onSubmit={this.isValidated}>
          <h1>Bank Details</h1>
          <div class="fields last">
            <h2>Bank Detail</h2>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="bank_name"  style={{fontWeight:'normal'}} id="lab">Bank Name:</label>
                  <input type="text" class="form-control input_1" id="bank_name" name="bank_name" placeholder="Bank name" required/>
                </div>
                <div class="form-group input_4">
                    <label for="acc_no" style={{fontWeight:'normal'}}  id="lab">Account No:</label>
                    <input type="text" class="form-control input_1" id="acc_no"  name="acc_no" placeholder="Account No" required/>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 text-left">
                <div class="form-group input_4">
                  <label for="holder_name" style={{fontWeight:'normal'}}  id="lab">Account Holder Name</label>
                  <input type="text" class="form-control input_1" id="holder_name"  name="holder_name" placeholder="Account holder name" required/>
                </div>
                <div class="form-group input_4">
                  <label for="ifsc_code" style={{fontWeight:'normal'}} id="lab" >IFSC Code:</label>
                  <input type="text" class="form-control input_1" id="ifsc_code"  name="ifsc_code" placeholder="Ifsc code" required/>
                </div>
              </div>
            </div>
          </div>
          <h6 id="error_message" style={{color:'red',marginLeft:'50px'}}></h6>
          <div class="buttons">
            <button type="submit" class="acount_btn">Save</button>
          </div>
        </form>
        <div class="row mt-5"></div>
       </div>
      </center>
     )
   }
}
export default BankInfo;
